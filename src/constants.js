//Варианты состояния FORM_STATE
export const FORM_STATE = {
  norm: "NORMAL", //состояние при первом запуске приложения
  inv: "INVALID", //состояние, когда не прошла валидация
  fild: "FILLEDON", // состояние, когда все поля заполнены верно (валидация ок)
  load: "LOADING", //состояние, когда загружаются данные с бэкенда
  submitted: "SUBMITTED" //состояние, когда форма была отправлена
};

//варианты типов сетевых запросов
export const FETCH_TYPE = {
  getCityList: "GET_CITYLIST",
  getDateTime: "GET_DATE_TIME"
};

export const VALIDATION_TYPE = {
  city: "CITY",
  date: "DATE",
  time: "TIME",
  phone: "PHONE",
  name: "NAME"
};

export const INPUT_TYPE = {
  phone: "phone",
  name: "name",
  currentDate: "currentDate",
  currentTime: "currentTime"
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
