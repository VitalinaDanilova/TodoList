import React, { useContext } from 'react';
import { TodosContext } from '../../contexts/context.js';
import { ItemComponent } from '../index.js';
import _ from 'lodash';

const TodoBox = () => {
  const value = useContext(TodosContext);
  // const { isActive } = this.state;
  // Item onClick={openEditor};
  return (
    <div className="item">
      {value.tasks.map((task) => (
        <React.Fragment key={_.uniqueId()}>
          <div className="todo_item">
            <ItemComponent key={task.id} title={task} />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TodoBox;
