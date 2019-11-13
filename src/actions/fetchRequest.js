import { fetchSuccess } from "./fetchSuccess";

export const fetchRequest = (url, fetchType) => {
  return dispatch => {
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
        console.log("Action fetchRequest", fetchType);
        dispatch(fetchSuccess(response, fetchType));
      });
  };
};
