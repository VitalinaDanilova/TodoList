import React from 'react';
import './App.css';
import Container from './Container';
import TodoBox from './TodoBox';
import PropTypes from 'prop-types';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { triggerText: 'Create a task' };
  }
  propTypes = {
    triggerText: PropTypes.string.isRequired,
    handleSubmit: PropTypes.object.isRequired,
  };

addTodo() {
  
}
  render() {
    const { triggerText } = this.state;
    const { handleSubmit } = this.props;
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
        <Container triggerText={triggerText} onSubmit={handleSubmit} />
        </div>
      </header>
      <div id="container" className="container">
        <TodoBox tasks={[]}/>
      </div>
    </div>
  );
  }
}
