import { combineReducers } from "redux";
import { initStore, FETCH_TYPE, VALIDATION_TYPE, APPSTATE } from "../initStore";
import changeAppState from "../reducers/changeAppState";
import {
  CHANGE_CITY,
  SELECT_DATE,
  GET_CITY_LIST,
  VALIDATE,
  APP_STATE,
  FETCH_SUCCES
} from "../actions/index";

const rootReducer = (state = initStore, action) => {
  switch (action.type) {
    case VALIDATE:
      switch (action.payload.validationType) {
        case VALIDATION_TYPE.phone:
          return Object.assign(
            {},
            state,
            getPhoneValidationState(state.validState, action.payload.value)
          );
        case VALIDATION_TYPE.name: {
          return Object.assign(
            {},
            state,
            getNameValidationState(state.validState, action.payload.value)
          );
        }
      }
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
      if (action.payload == 0) {
        return Object.assign({}, state, {
          currentDate: action.payload,
          timeList: {}
        });
      } else {
        return Object.assign({}, state, {
          currentDate: action.payload,
          timeList: state.dateTime[action.payload]
        });
      }

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
    // currentDate: Object.keys(filtredDateTimeObj)[0], //Это если без "дата" в списке дат (как было изначально)
    currentDate: 0,
    // timeList: filtredDateTimeObj[Object.keys(filtredDateTimeObj)[0]] /Это если без "Время" в списке времени (как было изначально)
    timeList: {}
  };
};

const getPhoneValidationState = (validState, value) => {
  //Проверяем телефонрегуляркой
  console.log("редуктор value из OrderPhone: ", value);
  const phoneValidRegexp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  const phoneValidState = phoneValidRegexp.test(value);
  //Ложим в состояние
  const newValidState = Object.assign({}, validState, {
    isPhoneValid: phoneValidState
  });
  //Если один из элементов validState == false, то appState = INVALID
  const appState = getAppStateFromValidState(newValidState);
  return {
    validState: newValidState,
    appState
  };
};

const getNameValidationState = (validState, value) => {
  //Проверяем телефонрегуляркой
  console.log("редуктор value из OrderName: ", value);
  //Ложим в состояние
  const newValidState = Object.assign({}, validState, {
    isNameValid: value.length > 0
  });
  //Если один из элементов validState == false, то appState = INVALID
  const appState = getAppStateFromValidState(newValidState);
  return {
    validState: newValidState,
    appState
  };
};

//Если один из элементов validState == false, то appState = INVALID
const getAppStateFromValidState = validState => {
  let validStateFalseArr = Object.values(validState).filter(item => {
    return !item;
  });
  return validStateFalseArr.length ? APPSTATE.inv : APPSTATE.fild;
};
