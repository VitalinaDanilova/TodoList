import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MyContext } from './contexts/context.js';

ReactDOM.render(
<MyContext>
  <App />
  </MyContext>,
  document.getElementById('root')
);
