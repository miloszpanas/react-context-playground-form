import React from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

class Contact extends React.Component {
  state = {
    showContactInfo: false
  };

  onShowClick = () => {
    this.setState(prevState => ({
      showContactInfo: !prevState.showContactInfo
    }));
  };

  onItemDelete = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  onDropDownClick = (name, e) => {
    console.log(name);
  };

  render() {
    const { id, name, surname, email, phone } = this.props.data;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name} {surname}
                <i
                  onClick={this.onShowClick}
                  className="fas fa-chevron-down"
                  style={{ cursor: "pointer", marginLeft: 5, color: "#0078F9" }}
                />
                <i
                  onClick={this.onItemDelete.bind(this, id, dispatch)}
                  className="fas fa-times"
                  style={{
                    cursor: "pointer",
                    float: "right",
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
