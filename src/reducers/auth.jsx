import {LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT_SUCCESS} from '../actions/auth';

export default function auth(state = {
  isFetching: false,
  isLoggedIn: false,
  username: "",
  token: "",
  lastChange: 0
}, action) {
  switch (action.type) {
    case LOGIN_PENDING:
      return Object.assign({}, state, {
        isFetching: true,
        username: action.username
      });
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.data.token);
      return Object.assign({}, state, {
        isFetching: false,
        isLoggedIn: true,
        token: action.data.token,
        lastChange: new Date().getTime()
      });
    case LOGIN_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
        isLoggedIn: false,
        username: '',
        token: ''
      });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isLoggedIn: false,
        username: '',
        token: ''
      });
    default:
      return state;
  }
}
