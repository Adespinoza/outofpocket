import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route } from 'react-router';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
