import React from "react";
import {AppBar} from 'material-ui';
import {connect} from "react-redux";
import {FlatButton} from 'material-ui';

import Login from './auth/login';
import SnackbarWrapper from './snackbar';
import {logout} from "../actions/auth";

export class Overview extends React.Component {
  render() {
    return (
      <div>
        <AppBar
          title="Government"
          iconElementRight={<FlatButton label={this.props.isLoggedIn ? this.props.username : 'Log in'}/>}
          onRightIconButtonTouchTap={() => this.props.logout()}/>
        <SnackbarWrapper />
        {this.props.isLoggedIn == false ?
          <Login /> :
          <div>
            {this.props.children}
          </div>
        }
      </div>
    )
  }
}

Overview.PropTypes = {
  isLoggedIn: React.PropTypes.bool,
  username: React.PropTypes.string,
  logout: React.PropTypes.func
};

export function mapStateToProps(state) {
  return state.auth;
}

export default connect(mapStateToProps, {
  logout
})(Overview)
