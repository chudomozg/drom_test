import { combineReducers } from "redux";
import {
  initStore,
  FETCH_TYPE,
  VALIDATION_TYPE,
  APPSTATE,
  VALIDSTATE
} from "../initStore";
import {
  CHANGE_CITY,
  SELECT_DATE,
  ADD,
  VALIDATE,
  APP_STATE,
  FETCH_SUCCES,
  GET_SCHEDULE,
  LINK_DELETE,
  GET_CITYSELECT_VALIDSTATE
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
        case VALIDATION_TYPE.date: {
          return Object.assign(
            {},
            state,
            getDateValidationState(state.validState, action.payload.value)
          );
        }
        case VALIDATION_TYPE.time: {
          return Object.assign(
            {},
            state,
            getTimeValidationState(state.validState, action.payload.value)
          );
        }
        case VALIDATION_TYPE.city: {
          return Object.assign({}, state, {
            validState: Object.assign({}, state.validState, {
              isCityValid: action.payload
            })
          });
        }
      }
    case APP_STATE:
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
        city: action.payload,
        validState: Object.assign({}, state.validState, {
          isCityValid: VALIDSTATE.valid
        })
      });

    case SELECT_DATE:
      if (action.payload == 0) {
        return Object.assign({}, state, {
          currentDate: action.payload,
          currentTime: 0,
          timeList: {}
        });
      } else {
        return Object.assign({}, state, {
          currentDate: action.payload,
          timeList: state.dateTime[action.payload]
        });
      }

    case ADD: {
      if (localStorage.getItem(`online-booking`)) {
        localStorage.setItem(
          `online-booking`,
          JSON.stringify(
            JSON.parse(localStorage.getItem(`online-booking`)).concat(
              action.payload
            )
          )
        );
      } else {
        localStorage.setItem(
          `online-booking`,
          JSON.stringify([action.payload])
        );
      }

      alert(`Ваша бронь была добавлена.`);
      return Object.assign({}, state, initStore, {
        appState: APPSTATE.submitted
      });
    }

    case GET_SCHEDULE: {
      return Object.assign({}, state, {
        schedule: action.payload
      });
    }

    case LINK_DELETE: {
      localStorage.setItem(
        `online-booking`,
        JSON.stringify(
          JSON.parse(localStorage.getItem(`online-booking`)).filter(
            (item, index) => {
              return index != action.payload;
            }
          )
        )
      );
      const newSchedule = state.schedule.filter((item, index) => {
        return index != action.payload;
      });
      console.log(
        "reducer newSchedule: ",
        newSchedule,
        "schedule: ",
        state.schedule,
        "id: ",
        action.payload
      );
      return Object.assign({}, state, {
        schedule: newSchedule
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
  const phoneValidRegexp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  const phoneValidState = phoneValidRegexp.test(value);
  //кладем в состояние
  const newValidState = Object.assign({}, validState, {
    isPhoneValid: phoneValidState ? VALIDSTATE.valid : VALIDSTATE.invalid
  });
  //Если один из элементов validState == false, то appState = INVALID
  const appState = getAppStateFromValidState(newValidState);
  return {
    validState: newValidState,
    appState,
    phone: value
  };
};

const getNameValidationState = (validState, value) => {
  //кладем в состояние
  let isNameValid = VALIDSTATE.invalid;
  if (value != null) {
    if (value.length) {
      isNameValid = VALIDSTATE.valid;
    }
  }
  const newValidState = Object.assign({}, validState, {
    isNameValid: isNameValid
  });

  //Если один из элементов validState == false, то appState = INVALID
  const appState = getAppStateFromValidState(newValidState);
  return {
    validState: newValidState,
    appState,
    name: value
  };
};

const getDateValidationState = (validState, value) => {
  const newValidState = Object.assign({}, validState, {
    isDateValid: value != 0 ? VALIDSTATE.valid : VALIDSTATE.invalid
  });
  const appState = getAppStateFromValidState(newValidState);
  return {
    validState: newValidState,
    appState
  };
};

const getTimeValidationState = (validState, value) => {
  console.log("getTimeValidationState value: ", value);
  const newValidState = Object.assign({}, validState, {
    isTimeValid: value != 0 ? VALIDSTATE.valid : VALIDSTATE.invalid
  });
  const appState = getAppStateFromValidState(newValidState);
  return {
    validState: newValidState,
    appState,
    currentTime: value
  };
};

//Если один из элементов validState == false, то appState = INVALID
const getAppStateFromValidState = validState => {
  let newValidState = validState;
  newValidState.isCityValid = VALIDSTATE.valid; //костыль, потому что выбор города могут и не трогать - надо потом поправить
  let validStateInvalidArr = Object.values(newValidState).filter(item => {
    if (item == VALIDSTATE.invalid || item == VALIDSTATE.clear) return true;
  });
  return validStateInvalidArr.length ? APPSTATE.invalid : APPSTATE.fild;
};
