import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders add task button', () => {
  render(<App />);
  const addTaskButton = screen.getByText(/Create a task/i);
  expect(addTaskButton).toBeInTheDocument();
});
