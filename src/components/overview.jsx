import React from "react";

export class Overview extends React.Component {
  render() {
    return (
      <div>
        <h1>Dit is een overview</h1>
        {this.props.children}
      </div>
    )
  }
}
