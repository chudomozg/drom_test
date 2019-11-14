import { combineReducers } from "redux";
import { initStore, FETCH_TYPE } from "../initStore";
import changeAppState from "../reducers/changeAppState";
import {
  CHANGE_CITY,
  SELECT_DATE,
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
        case FETCH_TYPE.getDateTime:
          return Object.assign(
            {},
            state,
            getFiltredDateTime(action.payload.response.data)
          );
      }

    case CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload
      });

    case SELECT_DATE:
      return Object.assign({}, state, {
        currentDate: action.payload,
        timeList: state.dateTime[action.payload]
      });

    default:
      return state;
  }
};

export default rootReducer;

//Фильтруем dateTime от is_not_free: true
const getFiltredDateTime = dateTime => {
  let filtredDateTimeObj = [];
  if (Object.keys(dateTime).length) {
    //Фильтруем только дни со свободным временем
    for (let day of Object.keys(dateTime)) {
      let isDayDisable = true;
      for (let time of Object.values(dateTime[day])) {
        if (!time.is_not_free) isDayDisable = false;
      }
      //формируем вывод данных
      if (!isDayDisable) {
        filtredDateTimeObj[day] = dateTime[day];
      }
    }
  }
  return {
    dateTime: filtredDateTimeObj,
    currentDate: Object.keys(filtredDateTimeObj)[0],
    timeList: filtredDateTimeObj[Object.keys(filtredDateTimeObj)[0]]
  };
};
