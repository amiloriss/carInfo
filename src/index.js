import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { CarProvider } from './context/context';

ReactDOM.render(
  <CarProvider>
    <Router>
      <App />
    </Router>
  </CarProvider>,
  document.getElementById('root')
);
