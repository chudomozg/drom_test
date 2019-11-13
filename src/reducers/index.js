import { combineReducers } from "redux";
import { initStore, FETCH_TYPE } from "../initStore";
import changeAppState from "../reducers/changeAppState";
import {
  CHANGE_CITY,
  GET_CITY_LIST,
  APP_STATE,
  FETCH_SUCCES
} from "../actions/index";

const rootReducer = (state = initStore, action) => {
  switch (action.type) {
    case APP_STATE:
      //   return changeAppState(state, action);
      return Object.assign({}, state, {
        appState: action.payload
      });

    case FETCH_SUCCES:
      switch (action.payload.fetchType) {
        case FETCH_TYPE.getCityList:
          return Object.assign({}, state, {
            cityList: action.payload.response.cities
          });
      }

    case CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload
      });

    default:
      return state;
  }
};

export default rootReducer;
