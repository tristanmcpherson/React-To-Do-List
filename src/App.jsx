import React, { Component } from "react";
import FullNote from "./FullNote";
import "./App.css";
import propTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      id: 0
    };
  }

  renderNote = index => {
    let newNotes = [...this.state.notes];
    newNotes.push(
      <FullNote deleteNote={this.deleteNote} key={this.state.id} />
    );

    this.setState(
      prevState => {
        return {
          notes: newNotes,
          id: prevState.id + 1
        };
      },
      () => {
        console.log(index);
      }
    );
  };

  deleteNote = index => {
    let newNotes = [...this.state.notes];

    newNotes.splice(index, 1);

    this.setState({
      notes: newNotes
    });
  };

  render() {
    return (
      <div className="App-body">
        <div className="header">
          <button onClick={this.renderNote} className="btn btn-warning btn-sm">
            New Note
          </button>
          <hr className="header-bottom-line" />
        </div>
        <ul className="saved-notes">{this.state.notes}</ul>
      </div>
    );
  }
}

App.propTypes = {
  index: propTypes.number,
  prevState: propTypes.number
};

export default App;
