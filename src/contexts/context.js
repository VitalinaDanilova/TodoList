import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const TodosContext = React.createContext(null);

const TodosProvider = TodosContext.Provider;
const TodosConsumer = TodosContext.Consumer;

class MyContext extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };
  state = {
    tasks: [],
  };

  handleRemove = (currentId) => (e) => {
    e.preventDefault();
    console.log('its removed!');
    const { tasks } = this.state;
    this.setState({ tasks: tasks.filter(({ id }) => id !== currentId) });
  };

  addTodoItem = (title) => {
    const { tasks } = this.state;
    const newTask = {
      id: _.uniqueId(),
      title: title,
    };
    this.setState({ tasks: [newTask, ...tasks] });
  };

  /*
    openEditor = () => {
      some logic here {...}
      this.setState({ isActive: !this.state.isActive });
    }
  */

  render() {
    return (
      <TodosProvider
        value={{
          ...this.state,
          handleRemove: this.handleRemove,
          addTodoItem: this.addTodoItem,
        }}
      >
        {this.props.children}
      </TodosProvider>
    );
  }
}

export { TodosContext, MyContext, TodosConsumer };
