import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Superheroes from './hw1_Superheroes';

ReactDOM.render(
  <React.StrictMode>
    <Superheroes />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
