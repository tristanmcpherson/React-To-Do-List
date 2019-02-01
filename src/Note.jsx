import React, { Component } from "react";
import List from "./List.jsx";
import "./App.css";
import ArchivedItems from "./ArchivedItems";
import MenuButtons from "./MenuButtons";

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export class NoteModel {
  constructor() {
    this.id = uuidv4();
    this.items = [];
    this.archivedItems = [];
  }
}

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentText: ""
    }
  }

  handleChange = event => {
    this.setState({
      currentText: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleAddItem(this.state.currentText);
    this.setState({
      currentText: ""
    })
  }

  render() {
    return (
      <div className="container-div">
        <div className="full-note">
          <List handleArchiveItems={this.props.handleArchiveItem} items={this.props.note.items} />
          <form className="form">
            <div className="form-group">
              <input
                id="input-one"
                placeholder={
                  this.props.note.items.length === 0
                    ? "Take a Note..."
                    : "Add a Note..."
                }
                className="form-control"
                value={this.state.currentText}
                onChange={this.handleChange}
              />
              <button className="btn btn-light btn-sm" onClick={this.handleSubmit}>
                Add
              </button>
            </div>
          </form>
          {this.props.note.archivedItems.length > 0 ? (
            <ArchivedItems
              handleDeleteItem={this.props.handleDeleteItem}
              archivedItems={this.props.note.archivedItems}
            />
          ) : (
              <div />
            )}

          <MenuButtons deleteNote={this.props.handleDelete} />
        </div>
      </div>
    );
  }
}

export default Note;
