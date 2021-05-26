import React from 'react';
import PropTypes from 'prop-types';

export default class TriggerButton extends React.Component {
    static propTypes = {
        triggerText: PropTypes.string.isRequired,
        buttonRef: PropTypes.func.isRequired,
        showModal: PropTypes.func.isRequired,
    };
    render() {
        const { triggerText, buttonRef, showModal } = this.props;
        return (
        <button
         className="btn modal-button"
         ref={buttonRef}
         onClick={showModal}
    >
        {triggerText}
        </button>
        );
    }
}