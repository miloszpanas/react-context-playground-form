import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";
import axios from "axios";

class Contact extends React.Component {
  state = {
    showContactInfo: false
  };

  onShowClick = () => {
    this.setState(prevState => ({
      showContactInfo: !prevState.showContactInfo
    }));
  };

  onItemDelete = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
  };
    

  onDropDownClick = (name, e) => {
    console.log(name);
  };

  render() {
    const { id, name, email, phone } = this.props.data;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4 style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {name}
                <i
                  onClick={this.onShowClick}
                  className="fas fa-chevron-down"
                  style={{ cursor: "pointer", marginLeft: 5, color: "#0078F9", marginRight: "auto" }}
                />
                <Link to={`/contact/edit/${id}`}>
                  <i className="far fa-edit text-success" style={{ marginRight: "0.6rem" }} />
                </Link>
                <i
                  onClick={this.onItemDelete.bind(this, id, dispatch)}
                  className="fas fa-times"
                  style={{
                    cursor: "pointer",
                    color: "darkred"
                  }}
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  data: PropTypes.object.isRequired
};

export default Contact;
