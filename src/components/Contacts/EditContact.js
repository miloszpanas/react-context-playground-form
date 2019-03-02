import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../Layout/TextInputGroup";
import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

    const contact = response.data;
    this.setState({ 
      name: contact.name,
      email: contact.email,
      phone: contact.phone
     });
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // check for errors
    if (name === "") {
      this.setState({ errors: { name: "please, provide a name" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "please, provide an e-mail" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "please, provide a phone no." } });
      return;
    }

    const updatedContact = {
      name,
      email,
      phone
    };

    const { id } = this.props.match.params;
    const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedContact);
    dispatch({ type: "UPDATE_CONTACT", payload: response.data });


    // clear the form once its submitted
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push('/');

  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onFormSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    name="name"
                    label="Name"
                    onChange={this.onInputChange}
                    type="text"
                    value={name}
                    placeholder="Enter name"
                    error={errors.name}
                  />
                  <TextInputGroup
                    name="email"
                    label="E-mail"
                    onChange={this.onInputChange}
                    type="email"
                    value={email}
                    placeholder="Enter email"
                    error={errors.email}
                  />
                  <TextInputGroup
                    name="phone"
                    label="Phone"
                    onChange={this.onInputChange}
                    type="text"
                    value={phone}
                    placeholder="Enter phone"
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Update Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
