import { combineReducers } from "redux";
import {
  FETCH_TYPE,
  VALIDATION_TYPE,
  FORM_STATE,
  VALIDSTATE
} from "../constants";
import { initStore } from "../initStore";
import {
  CHANGE_CITY,
  SELECT_DATE,
  ADD,
  VALIDATE,
  SET_APP_STATE,
  FETCH_SUCCES,
  GET_SCHEDULE,
  LINK_DELETE,
  CHANGE_INPUT_VALUE,
  CHANGE_TIME
} from "../actions/index";
import { getFiltredDateTime, getFiltredTimeList } from "../helpers/filter";
import {
  getPhoneValidationState,
  getNameValidationState,
  getDateValidationState,
  getTimeValidationState
} from "../helpers/validate";

//Сам главный редьюсер я не стал разносить по разным функциям и файлам (исп. combineReducers)
//Во-первых, он не большой
//Во-вторых, есть зависимости
//отделил только валидацию и фильтрацию

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
    case SET_APP_STATE:
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
          return Object.assign({}, state, {
            dateTime: getFiltredDateTime(action.payload.response.data),
            currentDate: 0,
            timeList: []
          });
      }

    case CHANGE_CITY:
      return Object.assign({}, state, {
        city: state.cityList.find(item => item.id == action.payload),
        validState: Object.assign({}, state.validState, {
          isCityValid: VALIDSTATE.valid
        })
      });

    case SELECT_DATE:
      if (action.payload == 0) {
        return Object.assign({}, state, {
          currentDate: action.payload,
          currentTime: 0,
          timeList: []
        });
      } else {
        return Object.assign({}, state, {
          currentDate: action.payload,
          timeList: getFiltredTimeList(state.dateTime[action.payload])
        });
      }

    case CHANGE_INPUT_VALUE:
      return Object.assign({}, state, {
        [action.payload.inputType]: action.payload.value
      });

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
        appState: FORM_STATE.submitted
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

      return Object.assign({}, state, {
        schedule: newSchedule
      });
    }

    default:
      return state;
  }
};

export default rootReducer;
