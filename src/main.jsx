import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import {HashRouter, Route} from "react-router-dom";
import {MuiThemeProvider} from "material-ui";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";

import {Routes} from './routes';
import reducers from './reducers/index';
import './main.css';


const store = createStore(reducers, applyMiddleware(thunk));

document.write("<div id='root'></div>");

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <HashRouter>
        <Routes />
      </HashRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
