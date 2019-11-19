import { GET_SCHEDULE } from "./index";

export const getSchedule = nameOfLocStObj => {
  return {
    type: GET_SCHEDULE,
    payload: JSON.parse(localStorage.getItem(nameOfLocStObj))
  };
};
