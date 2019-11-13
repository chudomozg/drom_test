import { FETCH_SUCCES } from "./index";

export const fetchSuccess = (response, fetchType) => {
  console.log("Action fetchSuccess: ", response, fetchType);
  return {
    type: FETCH_SUCCES,
    payload: { fetchType, response }
  };
};
