import React from "react";
import PropTypes from "prop-types";

class Contact extends React.Component {
  render() {
    const { name, surname, email, phone } = this.props;
    
    return (
      <div>
        <h3>Name: {`${name} ${surname}`}</h3>
        <ul>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired
};

export default Contact;
