import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
    propTypes = {
      onRemove: PropTypes.object.isRequired,
      task: PropTypes.string.isRequired,
    };
     render() {
        const { task, onRemove } = this.props;
        return (
          <div className="row">
            <div>
              <button type="button" className="btn btn-primary" onClick={onRemove}>-</button>
            </div>
            <div className="col-10">{task.text}</div>
          </div>
        );
      }
    }

export default class TodoBox extends React.Component {
    constructor(props) {
        super(props);
    }
    propTypes = {
        tasks: PropTypes.string.isRequired,
    }
    render() {
    const { tasks } = this.props;
    return (
    <div className="item">
      {tasks.map((task) => (
      <div key={task.id}>
        <Item task={task} onRemove={this.handleRemove} />
        <hr />
      </div>
      ))}
    </div>
    );
  }
}