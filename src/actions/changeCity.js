import { CHANGE_CITY } from "./index";

export const changeCity = cityId => {
  return {
    type: CHANGE_CITY,
    payload: cityId
  };
};
