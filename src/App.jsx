import React, { Component } from "react";
import Note, { NoteModel } from "./Note";
import "./App.css";

class MyClass {
  static text = "Mom";

  constructor(thing) {
    this.thing = thing;
  }
}

class MyApp {
  constructor() {
    var a = new MyClass("A");
    var b = new MyClass("B");

    MyClass.text = "Bob";

    console.log(a.thing);
    console.log(b.thing);

    console.log(a.text);
    console.log(b.text);
    console.log(MyClass.text);
    
  }
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    };
  }

  findNote = noteId => {
    return this.state.notes.find(note => note.id === noteId);
  };

  replaceNote = (noteId, newNote) => {
    const notes = [...this.state.notes];

    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === noteId) {
        notes[i] = newNote;
      }
    }

    this.setState({
      notes: notes
    });
  }

  createNote = () => {
    let newNotes = [...this.state.notes];
    newNotes.push(
      new NoteModel()
    );

    this.setState({
      notes: newNotes
    });
  };

  handleDeleteNote = noteId => {
    const notes = [...this.state.notes];
    const newNotes = notes.filter(note => note.id !== noteId);

    this.setState({
      notes: newNotes
    });
  };

  handleDeleteItem = (noteId, index) => {
    const note = this.findNote(noteId);
    const archivedItems = [...note.archivedItems];
    const newArchivedItems = archivedItems.filter((_, i) => i !== index);

    note.archivedItems = newArchivedItems;

    this.replaceNote(note.id, note);
  };

  handleArchiveItem = (noteId, itemIndex) => {
    const note = this.findNote(noteId);

    let items = [...note.items];
    let removedItems = items.splice(itemIndex, 1);

    //adding items to the deletedItems array and flattening the array

    let archivedItems = [...note.archivedItems];
    archivedItems.push(removedItems);
    let newArchivedItemsArr = archivedItems.flat();

    note.items = items;
    note.archivedItems = newArchivedItemsArr

    this.replaceNote(note.id, note);
  };

  handleAddItem = (noteId, item) => {
    const note = this.findNote(noteId);
    note.items.push(item);

    this.replaceNote(note.id, note);
  }

  render() {
    const nodes = [];
    for (let i = 0; i < this.state.notes.length; i++) {
      const note = this.state.notes[i];
      nodes.push(<Note
        note={note}
        handleDelete={() => this.handleDeleteNote(note.id)}
        handleArchiveItem={(index) => this.handleArchiveItem(note.id, index)}
        handleDeleteItem={(index) => this.handleDeleteItem(note.id, index)}
        handleAddItem={(item) => this.handleAddItem(note.id, item)}
        key={note.id} />);
    }

    return (
      <div className="App-body">
        <div className="header">
          <button onClick={this.createNote} className="btn btn-warning btn-sm">
            New Note
          </button>
          <hr className="header-bottom-line" />
        </div>
        <ul className="saved-notes">
          {nodes}
        </ul>
      </div>
    );
  }
}

export default App;
