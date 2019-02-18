import React, { Component } from 'react';
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header appName="Contact handler" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;