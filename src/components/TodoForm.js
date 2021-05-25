import React, { useState, useContext } from 'react';
import { TodosContext } from '../context';


const TodoForm = () => {
  const value = useContext(TodosContext);
  const { addTodoItem } = value;

  const [inputText, setInputText] = useState({
    title: '',
  })

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoItem(inputText.title)
    setInputText({
      title: '',
    });
  };
  
  return (
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="text"><strong>Create a task</strong></label>
      <input
        type="text"
        onChange={onChange}
        value={inputText.title}
        required
        className="form-control"
        id="text"
        name="title"
        placeholder="I am going..."
        />
        </div>
        <div className="form-group">
          <button type="submit" className="form-control btn btn-primary">Add</button>
        </div>
  </form>
  );
}

export default TodoForm;