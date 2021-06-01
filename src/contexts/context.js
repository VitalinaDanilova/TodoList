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
    isShown: false,
  };

  addTodoItem = (title) => {
    const { tasks } = this.state;
    const newTask = {
      id: _.uniqueId(),
      title: title,
    };
    this.setState({ tasks: [newTask, ...tasks] });
  };

  removeTodoItem = (taskId) => {
    this.setState({
      tasks: this.state.tasks.filter(({ id }) => id !== taskId),
    });
  };

  render() {
    return (
      <TodosProvider
        value={{
          ...this.state,
          removeTodoItem: this.removeTodoItem,
          addTodoItem: this.addTodoItem,
        }}
      >
        {this.props.children}
      </TodosProvider>
    );
  }
}

export { TodosContext, MyContext, TodosConsumer };
