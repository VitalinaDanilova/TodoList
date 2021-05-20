import React from 'react';
import './App.css';
import Container from './Container';
import PropTypes from 'prop-types';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { triggerText: 'Create a task' };
  }
  propTypes = {
    triggerText: PropTypes.string.isRequired,
  };

  render() {
    const { triggerText } = this.state;
    return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
        <div id="tasksList">
          <span className="tasks active">Tasks</span>
        </div>
        <div id="categoriesList">
        <span className="categories">Categories</span>
        </div>
        <div>
        <Container triggerText={triggerText} />
        </div>
      </header>
      <div id="container" className="container"></div>
    </div>
  );
  }
}
