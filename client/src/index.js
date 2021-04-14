import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 

ReactDOM.render(
  <Router>
    <Route exact path="/page/:pageNumber" component={App} />
    <Route exact path="/" component={App} />
  </Router>,
  document.getElementById('root')
);

<App />
