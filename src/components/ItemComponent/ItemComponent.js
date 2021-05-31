import React from 'react';
import PropTypes from 'prop-types';
import { Edit, Trash } from '../../assets/icons/index.js';

const ItemComponent = ({ title, handleRemove }) => {
  return (
    <div className="task">
      <li>
        <div>
          <button type="button" className="btn-icon" onClick={handleRemove}>
            <Trash />
          </button>
        </div>
        <div>
          <button type="button" className="btn-icon">
            <Edit />
          </button>
        </div>
        <span>{title}</span>
      </li>
    </div>
  );
};

ItemComponent.propTypes = {
  title: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default ItemComponent;
