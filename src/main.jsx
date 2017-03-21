import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route} from "react-router-dom";
import {MuiThemeProvider} from "material-ui";

import {Routes} from './routes';

import './main.css';

document.write("<div id='root'></div>");

ReactDOM.render(
  <MuiThemeProvider>
    <HashRouter>
      <Routes />
    </HashRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
);
