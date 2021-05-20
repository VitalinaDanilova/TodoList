import { uniqueId } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';


class Item extends React.Component {
  propTypes = {
    task: PropTypes.string.isRequired,
    onRemove: PropTypes.object.isRequired,
  };
   render() {
      const { task, onRemove } = this.props;
      return (
        <div className="row">
          <div>
            <button type="button" className="btn btn-primary" onClick={onRemove}>-</button>
          </div>
          <div className="col-10">{task.text}</div>
        </div>
      );
    }
  }
 
export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', tasks: [] };
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

  renderForm = () => {
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

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <div className="mb-3"></div>
          {this.renderForm()}
        {tasks.map((task) => (
          <div key={task.id}>
            <Item task={task} onRemove={this.handleRemove(task.id)} />
            <hr />
          </div>
        ))}
      </div>
    );
  }
}