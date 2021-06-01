import React from 'react';
import { Close } from '../../assets/icons/index.js';
import PropTypes from 'prop-types';

const ConfirmComponent = ({
  isShown,
  title,
  message,
  handleCancel,
  handleConfirm,
}) => {
  return (
    <div className={isShown ? 'confirm' : 'confirm-active'}>
      <div className="confirm-background" />
      <div className="modal-area">
        <header className="confirm-modal-header">
          <label className="confirm-modal-title">
            <strong>{title}</strong>
          </label>
          <button
            className="modal_close"
            aria-label="close"
            onClick={handleCancel}
          >
            <span id="close-modal" className="_hide-visual">
              Close
            </span>
            <Close />
          </button>
        </header>
        <section className="form-group">
          <p>{message}</p>
        </section>
        <footer className="confirm-modal-footer">
          <button className="button-delete" onClick={handleConfirm}>
            YES
          </button>
          <button className="button-cancel" onClick={handleCancel}>
            NO
          </button>
        </footer>
      </div>
    </div>
  );
};

ConfirmComponent.propTypes = {
  isShown: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
};

export default ConfirmComponent;
