import React from 'react';
import { TodosContext } from '../../contexts/context.js';
import { ModalComponent } from '../../components/index.js';

export default class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShown: false, title: '', triggerText: 'Create a task' };
  }

  static contextType = TodosContext;

  onChange = (e) => {
    e.preventDefault();
    this.setState({ title: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const value = this.context;
    const { addTodoItem } = value;
    addTodoItem(this.state.title);
    this.setState({ title: '' });
  };
  showModal = () => {
    this.setState({ isShown: true }, () => {
      this.closeButton.focus();
    });
    this.toggleScrollLock();
  };
  closeModal = () => {
    console.log('it closed');
    this.setState({ isShown: false });
    this.TriggerButton.focus();
    this.toggleScrollLock();
  };

  buttonRef = (n) => (this.modal = n);
  modalRef = (n) => (this.closeButton = n);
  triggerRef = (n) => (this.TriggerButton = n);

  onKeyDown = (e) => {
    if (e.keyCode === 27) {
      this.closeModal();
    }
  };
  onClickOutside = (e) => {
    if (this.modal && this.modal.contains(e.target)) return;
    this.closeModal();
  };
  toggleScrollLock = () => {
    document.querySelector('html').classList.toggle('scroll-lock');
  };

  render() {
    return (
      <ModalComponent
        isShown={this.state.isShown}
        triggerText={this.state.triggerText}
        buttonRef={this.buttonRef}
        modalRef={this.modalRef}
        triggerRef={this.triggerRef}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        showModal={this.showModal}
        closeModal={this.closeModal}
        onKeyDown={this.onKeyDown}
        onClickOutside={this.onClickOutside}
      />
    );
  }
}
