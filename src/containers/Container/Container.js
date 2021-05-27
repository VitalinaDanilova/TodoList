import React from 'react';
import { Modal, TriggerButton } from '../../components/index.js';
import PropTypes from 'prop-types';
import { TodosContext } from '../../contexts/context.js'

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isShown: false, title: '' };
    }
    static propTypes = {
        triggerText: PropTypes.string.isRequired,
      };

      static contextType = TodosContext;

    onChange = (e) => {
          e.preventDefault();
          this.setState({ title: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const value = this.context;
        const { addTodoItem } = value;
        addTodoItem(this.state.title)
        this.setState({ title: '' });
    };

    showModal = () => {
        this.setState({ isShown: true }, () => {
            this.closeButton.focus();
        });
        this.toggleScrollLock();
    };
    closeModal = () => {
        this.setState({ isShown: false });
        this.TriggerButton.focus();
        this.toggleScrollLock();
    };
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
            <React.Fragment>
                <div>
                <TriggerButton
                  showModal={this.showModal}
                  buttonRef={(n) => (this.TriggerButton = n)}
                  triggerText={this.props.triggerText}
                  />
                  {this.state.isShown ? (
                      <Modal
                        modalRef={(n) => (this.modal = n)}
                        buttonRef={(n) => (this.closeButton = n)}
                        closeModal={this.closeModal}
                        onKeyDown={this.onKeyDown}
                        onClickOutside={this.onClickOutside}
                        onChange={this.onChange}
                        onSubmit={this.onSubmit}
                        />
                  ) : null}
                </div>
            </React.Fragment>
        );
    }
}