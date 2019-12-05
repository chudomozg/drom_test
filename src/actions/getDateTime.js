import { fetchRequest } from "./fetchRequest";
import { FETCH_TYPE, DATE_TIME_URL } from "../constants";

export const getDateTime = cityId => {
  const dateTimeUrl = DATE_TIME_URL.replace("{ID}", cityId);
  return dispatch => {
    dispatch(fetchRequest(dateTimeUrl, FETCH_TYPE.getDateTime));
  };
};
