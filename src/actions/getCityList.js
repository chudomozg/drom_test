import { fetchRequest } from "./fetchRequest";
import { FETCH_TYPE } from "../constants";

export const getCityList = cityUrl =>
  fetchRequest(cityUrl, FETCH_TYPE.getCityList);
