import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/root";
import thunk from "redux-thunk";
import { FORM_STATE, VALIDSTATE, DEFAULT_CITY } from "./constants";

//Установка начального состояния приложения
export const initStore = {
  FORM_STATE: FORM_STATE.norm, //Общее состояние приложения
  validState: {
    //Состояние валидности данных в форме
    isCityValid: VALIDSTATE.clear,
    isDateValid: VALIDSTATE.clear,
    isTimeValid: VALIDSTATE.clear,
    isPhoneValid: VALIDSTATE.clear,
    isNameValid: VALIDSTATE.clear
  },
  city: DEFAULT_CITY,
  cityList: [DEFAULT_CITY], //список городов в селекте, подгружается позже.
  cityService: {
    // Информация о филиале, подгружается по выбору города
    address: null,
    phones: null,
    cost: null
  },
  dateTime: {}, //Общий массив даты и времени, подгружается с бэка
  timeList: [], // Список времени брони на выбранный день
  currentDate: 0, //выбранный день
  currentTime: 0, //Выбранное время
  phone: null,
  name: null,
  schedule: [] //таблица броней, заполняется по componentDidMount из Schedule
};

//создаем хранилище
export const store = createStore(rootReducer, applyMiddleware(thunk));
