import React from "react";
import {Route} from "react-router-dom";

import {Overview} from "./components/overview";

export class Routes extends React.Component {
  render() {
    return (
      <div>
        <Route path='/' component={Overview}/>
      </div>
    )
  }
}
