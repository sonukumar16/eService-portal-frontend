import {
   LOGIN,
   LOGIN_CLEAR,
   LOGIN_FAILURE,
   LOGIN_SUCCESS
  } from "./actionTypes";
  import * as Api from "../../api/Api";

  export function loginSuccess(payload) {
    return { type: LOGIN_SUCCESS, payload };
  }
  export function loginFailure(error) {
    return { type: LOGIN_FAILURE, payload: error };
  }

  export function loginRequest() {
    return { type: LOGIN };
  }

  export function clearLoginData () {
    return { type: LOGIN_CLEAR };
  }
  
  export function login(data) {
    return (dispatch) => {
      dispatch(loginRequest());
      return Api
        .login(data)
        .then(result => dispatch(loginSuccess(result.data)))
        .catch(error => {
          dispatch(loginFailure(error));
          throw error;
        });
    };
  }

