export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export function login(credentials) {
  return (dispatch) => {
    dispatch({type: LOGIN_PENDING, username: credentials.username});

    return setTimeout(() => {
      dispatch({type: LOGIN_SUCCESS, data: {token: "hello token"}})
    }, 1000);
  }
}

export function logout(){
  return (dispatch) => {
    dispatch({type: LOGOUT_SUCCESS})
  }
}
