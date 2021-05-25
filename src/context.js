import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const TodosContext = React.createContext();

const TodosProvider = TodosContext.Provider;
const TodosConsumer = TodosContext.Consumer;

class MyContext extends React.Component {
    static propTypes = {
        children: PropTypes.object.isRequired,
    }
    state = {
        tasks: []
    }
    handleChange = (id) => {
      this.setState({
        tasks: this.state.tasks.map((task) => {
          if (task.id === id) {
            task.active = !task.active;
          }
          return task;
        }),
      });
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
  
    handleRemove = (currentId) => (e) => {
        e.preventDefault();
        const { tasks } = this.state;
        this.setState({ tasks: tasks.filter(({ id }) => id !== currentId) });
    };
  
    addTodoItem = (title) => {
        const { tasks } = this.state;
        const newTask = {
        id: _.uniqueId(),
        title: title,
        active: false,
      };
      this.setState({ tasks: [newTask, ...tasks] });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.addTodoItem(this.state.title);
        this.setState({ title: '' });
    };

    render() {
        return (
            <TodosProvider
              value={{
                ...this.state,
                handleChange: this.handleChange,
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