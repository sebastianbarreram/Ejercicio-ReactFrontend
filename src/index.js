import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Axios from 'axios'


Axios.defaults.baseURL='https://pokeapi.co/api/v2/'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

