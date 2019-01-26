import React, { Component } from "react";
import List from "./List.jsx";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
      items: [],
      deletedItems: []
    };
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ term: event.target.value }, () => {
      console.log(this.state);
    });
  };

  onSubmit = event => {
    event.preventDefault();

    if (this.state.term === "") {
      return;
    }

    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    }, () => {
      console.log(this.state);
    });

  };

  deleteItems = index => {
    let newItems = [...this.state.items];
    let removedItems = newItems.splice(index, 1);

    let newDeletedItems = [...this.state.deletedItems];
    newDeletedItems.push(removedItems);
    let newDeletedItemsArr = newDeletedItems.flat();

    this.setState({
      items: newItems,
      deletedItems: newDeletedItemsArr
    }, () => {
      console.log(this.state);
    });
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
                onChange={this.handleChange}
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
