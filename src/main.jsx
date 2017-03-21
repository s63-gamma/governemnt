import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import persistState from 'redux-localstorage';
import injectTapEventPlugin from "react-tap-event-plugin";
import {MuiThemeProvider} from "material-ui";
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from "redux";
import {Router, hashHistory} from 'react-router';


import routes from './routes';
import reducers from './reducers/index';
import './main.css';

const logger = createLogger();
const store = createStore(
  reducers,
  applyMiddleware(thunk, promise, logger),
  compose(persistState())
);

injectTapEventPlugin();

document.write("<div id='root'></div>");

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router
        history={hashHistory}
        routes={routes}/>
    </MuiThemeProvider>
  </Provider>
  ,
  document.getElementById('root')
);
