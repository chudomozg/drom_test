import { fetchSuccess } from "./fetchSuccess";
import { appState } from "./appState";
import { FORM_STATE } from "../constants";

export const fetchRequest = (url, fetchType) => {
  return dispatch => {
    dispatch(appState(FORM_STATE.load));
    fetch(url) //Запрос на url
      .then(response => {
        //Проверим на ошибку
        if (!response.ok) {
          //Если ошибка, пробрасываем ошибку в консоль
          throw new Error(response.statusText);
        } //если нет, возвращаем response
        return response;
      })
      .then(response => response.json())
      .then(response => {
        dispatch(fetchSuccess(response, fetchType));
        dispatch(appState(FORM_STATE.norm));
      });
  };
};
