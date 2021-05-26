/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { TodosContext, TodosConsumer } from '../context';

const Item = (props) => {
  const { id, title } = props.task;
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  }

  return (
    <TodosConsumer>
      {(value) => {
        const { handleRemove } = value;
        return (
        <div className={`todo_item ${isActive ? 'active' : ''}`}>
          <div className="task">
          <li>
            <div>
              <button type="button" className="btn btn-primary" onClick={handleToggle}>Edit</button>
           </div>
           <div>
             <button type="button" className="btn btn-primary" onClick={handleRemove(id)}>Delete</button>
          </div>
          <span>{title}</span>
          </li>
         </div>
        </div>
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

    render() {
      const value = this.context;
      return (
      <div className="item">
      {value.tasks.map((task) => (
        <Item key={task.id} task={task} />
      ))}
    </div>
    );
  }
}