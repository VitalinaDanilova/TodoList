/* eslint-disable react/prop-types */
import React from 'react';
import { TodosContext, TodosConsumer } from '../context';

const Item = (props) => {
  const { id, title } = props.task;
  return (
    <TodosConsumer>
      {(value) => {
        const { handleRemove } = value;
        return (
        <li className="todo-item">
          <div>
            <button type="button" className="btn btn-primary" onClick={handleRemove(id)}>-</button>
          </div>
            <span>{title}</span>
       </li>
       )
      }}
    </TodosConsumer>
    );
  }

export default class TodoBox extends React.Component {
    constructor(props) {
        super(props);
    }

    static contextType = TodosContext;

    handleRemove = (id) => {
      this.setState({
        tasks: [
          ...this.state.tasks.filter((task) => {
            return task.id !== id;
          }),
        ],
      });
    };

    render() {
      const value = this.context;
      return (
      <div className="item">
      {value.tasks.map((task) => (
      <div key={task.id}>
        <Item key={task.id} task={task} />
        <hr />
      </div>
      ))}
    </div>
    );
  }
}