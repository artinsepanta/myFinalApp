import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import App from './App';
import store from './reduxFile/store'
import * as serviceWorker from './serviceWorker';
 
const app = <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();

