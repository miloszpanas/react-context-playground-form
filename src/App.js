import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Contacts from "./components/Contacts/Contacts";
import Header from "./components/Layout/Header";
import About from "./components/Pages/About";
import AddContact from "./components/Contacts/AddContact";
import "bootstrap/dist/css/bootstrap.min.css";

import Provider from "./context";

class App extends Component {
  render() {
    return (
      <div>
        <Provider>
          <Router>
            <div className="App">
              <Header appName="Contact handler" />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Contacts} />
                  <Route exact path="/contact/add" component={AddContact} />
                  <Route exact path="/about" component={About} />
                </Switch>
              </div>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;