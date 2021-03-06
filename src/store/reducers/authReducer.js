import {
  LOGIN,
  LOGIN_CLEAR,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
} from "../actions/actionTypes";
import initialState from "./initialState";

export default function authReducer(state = initialState.auth, actions) {
  const { payload, type } = actions;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: null,

      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
        data: null,
      };
    case LOGIN:
      return {
        ...state,
        loading: true
      };
    case LOGIN_CLEAR:
      return {
        ...state,
        data: null,
        error: null
      };
    default:
      return state;
  }
}

export const UserSelector = (state) => state.user;