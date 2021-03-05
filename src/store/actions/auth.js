import {
   LOGIN,
   LOGIN_CLEAR,
   LOGIN_FAILURE,
   LOGIN_SUCCESS
  } from "./actionTypes";
  import * as Api from "../../api/Api";

  export function loginSuccess(result, searchType, searchText) {
    return { type: LOGIN_SUCCESS, payload:{result, searchType, searchText} };
  }
  export function loginFailure(error) {
    return { type: LOGIN_FAILURE, payload: error };
  }

  export function loginRequest() {
    return { type: LOGIN };
  }

  export function clearFetchedData () {
    return { type: LOGIN_CLEAR };
  }
  
  export function login(searchType, searchText) {
    return (dispatch) => {
      dispatch(loginRequest());
      return Api
        .login(`${searchType}?q=${searchText}`)
        .then(result => dispatch(loginSuccess(result,searchType, searchText)))
        .catch(error => {
          dispatch(loginFailure(error));
          throw error;
        });
    };
  }

