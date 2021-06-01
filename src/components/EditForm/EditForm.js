import React from 'react';
import PropTypes from 'prop-types';

const EditForm = ({ onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="text">
          <strong>Edit a task</strong>
        </label>
        <input
          type="text"
          title=""
          onChange={onChange}
          required
          className="form-control"
          id="text"
          name="title"
          placeholder="Type your text"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="form-control btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
};

EditForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default EditForm;
