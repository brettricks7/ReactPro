import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

document.body.style.margin = "auto";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
