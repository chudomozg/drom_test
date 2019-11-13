import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

//Варианты состояния AppState
export const APPSTATE = {
  norm: "NORMAL",
  inv: "INVALID",
  fild: "FILLEDON",
  load: "LOADING"
};

export const FETCH_TYPE = {
  getCityList: "GET_CITYLIST"
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

//Установка начального состояния приложения
export const initStore = {
  appState: APPSTATE.norm, //Общее состояние приложения
  // city: checkDefaultCity(defaultCity, cityUrl),
  city: DEFAULT_CITY,
  cityList: [], //список городов в селекте, подгружается позже.
  cityService: {
    // Информация о филиале, подгружается по выбору города
    address: null,
    phones: null,
    cost: null
  },
  date: [
    //Дата, подгружается по выбору города
    "Дата"
  ],
  time: [
    //Время, подгружается по выбору города
    "Время"
  ],
  phone: null,
  name: null
};

//создаем хранилище
export const store = createStore(rootReducer, applyMiddleware(thunk));

//Проверяем есть ли предложенный нами город по умолчанию в списке городов.
//Если есть возвращаем его,
// если нет, вернем первый из списка городов
// async function checkDefaultCity(defaultCity, cityUrl) {
//   let response = await fetch(cityUrl);
//   if (response.ok) {
//     let json = await response.json();
//     console.log(json);
//     return defaultCity;
//   } else {
//     alert(`Ошибка запроса к списку городов: ${response.status}`);
//   }
// }
