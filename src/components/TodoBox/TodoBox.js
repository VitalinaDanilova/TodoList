import React from 'react';
import { ItemComponent } from '../index.js';
import PropTypes from 'prop-types';
import _ from 'lodash';

const TodoBox = ({ tasks, handleRemove }) => {
  return (
    <div className="item">
      {tasks.map((task) => (
        <React.Fragment key={_.uniqueId()}>
          <div className="todo_item">
            <ItemComponent
              key={task.id}
              title={task.title}
              handleRemove={handleRemove(task.id)}
            />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

TodoBox.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default TodoBox;
