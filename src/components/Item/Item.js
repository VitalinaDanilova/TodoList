import React from 'react';
import PropTypes from 'prop-types';
import { Edit, Trash } from '../../assets/icons/index.js';
import { TodosConsumer } from '../../contexts/context';

const Item = (props) => {
  Item.propTypes = {
    task: PropTypes.object.isRequired,
  }

  const { id, title, openEditor } = props.task;

  return (
    <TodosConsumer>
      {(value) => {
        const { handleRemove } = value;
        return (
          <div className="task">
          <li>
           <div>
             <button type="button" className="btn-icon" onClick={handleRemove(id)}>
               <Trash />
             </button>
          </div>
          <div>
              <button type="button" className="btn-icon" onClick={openEditor}>
              <Edit />
              </button>
           </div>
          <span>{title}</span>
          </li>
         </div>
       )
      }}
    </TodosConsumer>
    );
  }

  export default Item;