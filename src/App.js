import React, { Component } from 'react';
import Contacts from "./components/Contacts/Contacts";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";

import Provider from "./context";

class App extends Component {
  render() {
    return (
      <div>
        <Provider>
          <Header appName="Contact handler" />
          <div className="container">
            <Contacts />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;