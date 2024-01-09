import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import AddToDo from './components/AddToDo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddToDo/>
        <Todo />
      </div>
    );
  }
}

export default App;
