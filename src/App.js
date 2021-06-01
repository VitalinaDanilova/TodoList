import React from 'react';
import './App.css';
import { ModalContainer } from './containers/ModalContainer/index.js';
import { ItemContainer } from './containers';

const App = () => {
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
          <ModalContainer />
        </div>
      </header>
      <div id="container" className="container">
        <ItemContainer />
      </div>
    </div>
  );
};

export default App;
