import React from 'react';
import './App.css';
import { Container } from './containers/Container/index.js';
import { TodoBox } from './components/index.js';

const App = () => {
  const triggerText = 'Create a task';
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List</h1>
        <div id="tasksList">
          <span className="tasks active">Tasks</span>
        </div>
        <div id="categoriesList">
        <span className="categories">Categories</span>
        </div>
        <div>
        <Container triggerText={triggerText}/>
        </div>
      </header>
      <div id="container" className="container">
        <TodoBox />
      </div>
    </div>
    );
  }

  export default App;
