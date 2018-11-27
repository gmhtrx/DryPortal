import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux'
import store from './config/store'

const app = <Provider store={store}>
<App/>
</Provider>
ReactDOM.render(app, document.getElementById("root"));

