import React from 'react';
import { Modal } from '../Modal';
import PropTypes from 'prop-types';
import TriggerButton from '../TriggerButton';

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isShown: false };
    }
    propTypes = {
        triggerText: PropTypes.string.isRequired,
        onSubmit: PropTypes.object.isRequired,
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
                <TriggerButton
                  showModal={this.showModal}
                  buttonRef={(n) => (this.TriggerButton = n)}
                  triggerText={this.props.triggerText}
                  />
                  {this.state.isShown ? (
                      <Modal
                        onSubmit={this.props.onSubmit}
                        modalRef={(n) => (this.modal = n)}
                        buttonRef={(n) => (this.closeButton = n)}
                        closeModal={this.closeModal}
                        onKeyDown={this.onKeyDown}
                        onClickOutside={this.onClickOutside}
                        />
                  ) : null}
            </React.Fragment>
        );
    }
}