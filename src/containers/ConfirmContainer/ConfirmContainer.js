import React from 'react';
import { ConfirmComponent } from '../../components';

let resolve;

export default class ConfirmContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShown: false, title: 'Delete task' };
  }

  handleCancel = () => {
    this.setState({ isShown: false });
    resolve(false);
  };
  handleConfirm = () => {
    this.setState({ isShown: true });
    resolve(true);
  };
  showConfirmModal = (title = 'Delete this task?') => {
    this.setState({
      isShown: true,
      title: title,
    });
    return new Promise((res) => {
      resolve = res;
    });
  };

  render() {
    const { isShown, title } = this.state;
    return (
      <ConfirmComponent
        isShown={isShown}
        title={title}
        handleCancel={this.handleCancel}
        handleConfirm={this.handleConfirm}
      />
    );
  }
}
