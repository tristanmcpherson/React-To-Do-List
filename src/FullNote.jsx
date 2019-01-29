import React, { Component } from "react";
import List from "./List.jsx";
import "./App.css";
import CheckedItems from "./CheckedItems";
import MenuButtons from "./MenuButtons";

class FullNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
      items: [],
      deletedItems: [],
      inputPlaceholder: "",
      hovering: false
    };
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ term: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    if (this.state.term === "") {
      return;
    }

    // if (this.state.items.length + 1 >= 1) {
    //   this.setState({ inputPlaceholder: addAnItem }, () => {
    //     console.log(this.state);
    //   });
    // }

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

  uncheckItems = index => {
    let deletedItems = [...this.state.deletedItems];
    deletedItems.splice(index, 1);

    this.setState({ deletedItems: deletedItems });
  };

  displayMenuButtons = () => {
    this.setState({ hovering: !this.state.hovering });
  };

  deleteNote = () => {};

  render() {
    const menuClasses =
      this.state.hovering === true
        ? "far fa-trash-alt trash-icon show"
        : "far fa-trash-alt trash-icon";

    return (
      <div className="container-div">
        <div
          className="full-note"
          onMouseEnter={this.displayMenuButtons}
          onMouseLeave={this.displayMenuButtons}
        >
          <List deleteItems={this.deleteItems} items={this.state.items} />
          <form className="form">
            <div className="form-group">
              <input
                id="input-one"
                placeholder={
                  this.state.items.length === 0
                    ? "Take a Note..."
                    : "Add a Note..."
                }
                className="form-control"
                value={this.state.term}
                onChange={this.handleChange}
              />
              <button className="btn btn-light btn-sm" onClick={this.onSubmit}>
                Add
              </button>
            </div>
          </form>
          {this.state.deletedItems.length > 0 ? (
            <CheckedItems
              uncheck={this.uncheckItems}
              checkedItems={this.state.deletedItems}
            />
          ) : (
            <div />
          )}

          <MenuButtons deleteNote={this.deleteNote} className={menuClasses} />
        </div>
      </div>
    );
  }
}

export default FullNote;
