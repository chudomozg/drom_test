import { CHANGE_CITY } from "./index";
import { store } from "../initStore";

export const changeCity = cityId => {
  const city = store.getState().cityList.find(item => item.id == cityId);
  return {
    type: CHANGE_CITY,
    payload: city
  };
};
