import React from 'react';
import PropTypes from 'prop-types';

export default class TriggerButton extends React.Component {
    propTypes = {
        triggerText: PropTypes.string.isRequired,
        buttonRef: PropTypes.string.isRequired,
        showModal: PropTypes.object.isRequired,
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