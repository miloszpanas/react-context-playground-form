import React, { Component } from 'react';
import Contact from "./components/Contact";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header appName="Contact handler" />
        <Contact 
          name="Michael"
          surname="Night"
          email="m.night@gmail.com"
          phone={664-334-667}
        />
        <Contact 
          name="Marry"
          surname="Ann"
          email="marry@gmail.com"
          phone={664-344-557}
        />
      </div>
    );
  }
}

export default App;