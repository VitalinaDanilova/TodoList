import React from 'react';
import PropTypes from 'prop-types';

const TriggerButton = ({triggerText, buttonRef, showModal}) => {
    TriggerButton.propTypes = {
        triggerText: PropTypes.string.isRequired,
        buttonRef: PropTypes.func.isRequired,
        showModal: PropTypes.func.isRequired,
    };
    return (
      <button
      className="btn modal-button"
      ref={buttonRef}
      onClick={showModal}
      >
      {triggerText}
      </button>
      );
    };

export default TriggerButton;