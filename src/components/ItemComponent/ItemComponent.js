import React from 'react';
import PropTypes from 'prop-types';
import { Edit, Trash } from '../../assets/icons/index.js';

const ItemComponent = ({ id, title, openEditor, handleRemove }) => {
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
  );
};

ItemComponent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  openEditor: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default ItemComponent;
