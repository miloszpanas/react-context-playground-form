import React, { Component, Fragment } from "react";
import Contact from "./Contact";

export default class Contacts extends Component {
  state = {
      contacts: [
        {
          id: 1,
          name: "Michael",
          surname: "Knight",
          email: "m.night@gmail.com",
          phone: "664-754-555"
        },
        {
          id: 2,
          name: "Marry",
          surname: "Ann",
          email: "m.ann@gmail.com",
          phone: "664-444-777"
        },
        {
          id: 3,
          name: "Roman",
          surname: "Bromsky",
          email: "bromsky@gmail.com",
          phone: "664-445-889"
        }
      ]
    };

  deleteContact = (id) => {
    console.log(id);
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <Fragment>
        {contacts.map(contact => {
          return <Contact key={contact.id}data={contact} deleteClickhandler={this.deleteContact.bind(this, contact.id)} />;
        })}
      </Fragment>
    );
  }
}
