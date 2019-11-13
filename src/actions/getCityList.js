import { GET_CITY_LIST } from "./index";
import { fetchRequest } from "./fetchRequest";
import { FETCH_TYPE } from "../initStore";

export const getCityList = cityUrl => {
  return dispatch => {
    dispatch(fetchRequest(cityUrl, FETCH_TYPE.getCityList));
  };
};
