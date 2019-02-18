import React, { Component } from "react";
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

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => {
          return <Contact key={contact.id}data={contact} />;
        })}
      </div>
    );
  }
}
