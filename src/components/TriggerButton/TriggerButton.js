import React from 'react';
import PropTypes from 'prop-types';

const TriggerButton = ({ triggerRef, showModal, triggerText }) => {
  return (
    <button className="btn modal-button" ref={triggerRef} onClick={showModal}>
      {triggerText}
    </button>
  );
};

TriggerButton.propTypes = {
  triggerText: PropTypes.string.isRequired,
  triggerRef: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default TriggerButton;
