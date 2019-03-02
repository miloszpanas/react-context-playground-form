import React, { Component } from "react";

class Test extends Component {
  state = {
    name: "",
    username: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          name: data.userId,
          username: data.title
        })
      );
  }

  render() {
    const { name, username } = this.state;
    return (
      <div>
        <p>
          {name} {username}
        </p>
      </div>
    );
  }
}

export default Test;
