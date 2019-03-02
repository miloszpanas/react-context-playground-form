import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Provider from "./context";
import "bootstrap/dist/css/bootstrap.min.css";

import Contacts from "./components/Contacts/Contacts";
import Header from "./components/Layout/Header";
import About from "./components/Pages/About";
import AddContact from "./components/Contacts/AddContact";
import NotFound from "./components/Pages/NotFound";
import Test from './components/Pages/Test';
import EditContact from './components/Contacts/EditContact';


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
                  <Route exact path="/contact/edit/:id" component={EditContact} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/test" component={Test} />
                  <Route component={NotFound} />
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