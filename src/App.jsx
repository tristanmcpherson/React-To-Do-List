import React, { Component } from "react";
import List from "./List.jsx";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
      items: []
    };
  }

  onChange = event => {
    this.setState({ term: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    if (this.state.term === "") {
      return;
    }

    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    });
  };

  deleteItems = index => {
    let newItems = [...this.state.items];
    newItems.splice(index, 1);

    this.setState({ items: newItems });
  };

  render() {
    return (
      <div className="container-div">
        <div className="App">
          <h1>What needs to be done?</h1>
          <form className="form">
            <div className="form-group">
              <input
                className="form-control"
                value={this.state.term}
                onChange={this.onChange}
              />
              <button className="btn btn-dark" onClick={this.onSubmit}>
                Submit
              </button>
            </div>
          </form>
          <List deleteItems={this.deleteItems} items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default App;
