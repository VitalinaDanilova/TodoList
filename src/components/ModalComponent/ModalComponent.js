// import { PropTypes } from 'prop-types';
import React from 'react';
import { Modal, TriggerButton } from '../index.js';
import PropTypes from 'prop-types';

const ModalComponent = ({
  isShown,
  showModal,
  buttonRef,
  modalRef,
  triggerRef,
  triggerText,
  closeModal,
  onKeyDown,
  onClickOutside,
  onChange,
  onSubmit,
}) => {
  return (
    <React.Fragment>
      <div>
        <TriggerButton
          showModal={showModal}
          triggerRef={triggerRef}
          triggerText={triggerText}
        />
        {isShown ? (
          <Modal
            modalRef={modalRef}
            buttonRef={buttonRef}
            closeModal={closeModal}
            onKeyDown={onKeyDown}
            onClickOutside={onClickOutside}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        ) : null}
      </div>
    </React.Fragment>
  );
};

ModalComponent.propTypes = {
  isShown: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
  modalRef: PropTypes.func.isRequired,
  triggerText: PropTypes.string.isRequired,
  buttonRef: PropTypes.func.isRequired,
  triggerRef: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onClickOutside: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ModalComponent;
