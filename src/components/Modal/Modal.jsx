import React from 'react';
import ReactDOM from 'react-dom';
import { TodoForm } from '../index.js';
import { Close } from '../../assets/icons/index.js';
import FocusTrap from 'focus-trap-react';

const Modal = ({
  onClickOutside,
  onKeyDown,
  modalRef,
  buttonRef,
  closeModal,
  onChange,
  onSubmit,
}) => {
  return ReactDOM.createPortal(
    <FocusTrap>
      <aside
        role="dialog"
        tabIndex={1}
        aria-modal="true"
        className="modal-cover"
        onClick={onClickOutside}
        onKeyDown={onKeyDown}
      >
        <div className="modal-area" ref={modalRef}>
          <button
            ref={buttonRef}
            aria-label="Close Modal"
            aria-labelledby="close-modal"
            className="modal_close"
            onClick={closeModal}
          >
            <span id="close-modal" className="_hide-visual">
              Close
            </span>
            <Close />
          </button>
          <div className="modal-body">
            <TodoForm onChange={onChange} onSubmit={onSubmit} />
          </div>
        </div>
      </aside>
    </FocusTrap>,
    document.body
  );
};

export default Modal;
