
import get from "lodash/get"

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
        isLoading: false,
        data: [...state.data, {
          searchType: payload.searchType,
          searchText: payload.searchText,
          data: get(payload.result, 'items', [])
        }],

      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    case LOGIN:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_CLEAR:
      return {
        ...state,
        data: []
      };
    default:
      return state;
  }
}

export const UserSelector = (state) => state.user;