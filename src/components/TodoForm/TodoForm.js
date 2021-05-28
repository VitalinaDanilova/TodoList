import React from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="text">
          <strong>Create a task</strong>
        </label>
        <input
          type="text"
          title=""
          onChange={onChange}
          required
          className="form-control"
          id="text"
          name="title"
          placeholder="I am going..."
        />
      </div>
      <div className="form-group">
        <button type="submit" className="form-control btn btn-primary">
          Add
        </button>
      </div>
    </form>
  );
};

TodoForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default TodoForm;
