import React, { Component } from "react";
import List from "./List.jsx";
import "./App.css";
import CheckedItems from "./CheckedItems";

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
    });
  };

  deleteItems = index => {
    let items = [...this.state.items];
    let removedItems = items.splice(index, 1);

    //adding items to the deletedItems array and flattening the array

    let newDeletedItems = [...this.state.deletedItems];
    newDeletedItems.push(removedItems);
    let newDeletedItemsArr = newDeletedItems.flat();

    this.setState({
      items: items,
      deletedItems: newDeletedItemsArr
    });
  };

  deleteForGood = index => {
    let deletedItems = [...this.state.deletedItems];
    deletedItems.splice(index, 1);

    this.setState({ deletedItems: deletedItems }, () =>
      console.log(deletedItems)
    );
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
          <CheckedItems
            deleteForGood={this.deleteForGood}
            checkedItems={this.state.deletedItems}
          />
        </div>
      </div>
    );
  }
}

export default App;
