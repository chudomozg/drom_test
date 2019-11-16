import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

//Варианты состояния AppState
export const APPSTATE = {
  norm: "NORMAL",
  inv: "INVALID",
  fild: "FILLEDON",
  load: "LOADING",
  submitted: "SUBMITTED"
};

//варианты типов сетевых запросов
export const FETCH_TYPE = {
  getCityList: "GET_CITYLIST",
  getDateTime: "GET_DATE_TIME"
};

export const VALIDATION_TYPE = {
  date: "DATE",
  time: "TIME",
  phone: "PHONE",
  name: "NAME"
};

//Значение города по умолчанию
export const DEFAULT_CITY = {
  id: "5b3480ee3200009f28d1e421",
  name: "Владивосток",
  address: "ул. Первая 1, ст. 3",
  phones: ["79991233232", "79996667676"],
  price: 12000
};

//ссылка для получения списка городов
export const CITY_URL =
  "https://www.mocky.io/v2/5b34c0d82f00007400376066?mocky-delay=700ms";

export const DATE_TIME_URL = "https://www.mocky.io/v2/{ID}?mocky-delay=700ms";

export const VALIDSTATE = {
  clear: "CLEAR",
  valid: "VALID",
  invalid: "INVALID"
};

//Установка начального состояния приложения
export const initStore = {
  appState: APPSTATE.norm, //Общее состояние приложения
  validState: {
    //Состояние валидности данных в форме
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
  timeList: {}, // Список времени брони на выбранный день
  currentDate: 0, //выбранный день
  currentTime: 0, //Выбранное время
  phone: null,
  name: null,
  schedule: [] //таблица броней, заполняется по componentDidMount из Schedule
};

//создаем хранилище
export const store = createStore(rootReducer, applyMiddleware(thunk));
