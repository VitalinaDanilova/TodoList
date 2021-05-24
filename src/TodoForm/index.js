import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';


export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', tasks: [] };
  }
  propTypes = {
    handleSubmit: PropTypes.object.isRequired,
  }

  handleRemove = (currentTaskId) => (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    this.setState({ tasks: tasks.filter(({ id }) => id !== currentTaskId) });
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { value, tasks } = this.state;
    const newTask = { id: uniqueId(), text: value };
    this.setState({ value: '', tasks: [newTask, ...tasks] });
  }

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="text"><strong>Create a task</strong></label>
          <input
            type="text"
            onChange={this.handleChange}
            value={value}
            required
            className="form-control"
            id="text"
            placeholder="I am going..."
          />
        </div>
        <div className="form-group">
          <button type="submit" className="form-control btn btn-primary">Add</button>
          </div>
      </form>
    );
  }
}