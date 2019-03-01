import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
      case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};
class Provider extends Component {
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
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
export default Provider;
