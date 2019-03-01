import React, { Component } from "react";

class AddComponent extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();

  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                onChange={this.onInputChange}
                type="text"
                name="name"
                value={name}
                id="name"
                placeholder="Enter name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                className="form-control"
                onChange={this.onInputChange}
                type="email"
                name="email"
                value={email}
                id="email"
                placeholder="Enter e-mail"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone no.</label>
              <input
                className="form-control"
                onChange={this.onInputChange}
                type="text"
                name="phone"
                value={phone}
                id="phone"
                placeholder="Provide phone"
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddComponent;
