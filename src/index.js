import React from 'react';
import ReactDOM from 'react-dom';

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import './index.css';

import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore'
import Root from "./root";

ReactDOM.render(
  <Root store={configureStore()}/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
