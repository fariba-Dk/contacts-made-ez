import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// add for Fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// add bootstrap
//import '../node_modules/bootstrap/dist/css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

