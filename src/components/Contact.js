import React from "react";
import PropTypes from "prop-types";

class Contact extends React.Component {
  render() {
    const { name, surname, email, phone} = this.props.data;
    
    return (
      <div className="card card-body mb-3">
        <h5>{name} {surname}</h5>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  data: PropTypes.object.isRequired
};

export default Contact;
