import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route} from "react-router-dom";

import {Routes} from './routes';

document.write("<div id='root'></div>");

ReactDOM.render(
  <HashRouter>
    <Routes />
  </HashRouter>,
  document.getElementById('root')
);
