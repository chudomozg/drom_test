import { GET_SCHEDULE } from "./index";

export const getSchedule = nameOfLocStObj => {
  console.log(
    "action getSchedule: ",
    JSON.parse(localStorage.getItem(nameOfLocStObj))
  );
  return {
    type: GET_SCHEDULE,
    payload: JSON.parse(localStorage.getItem(nameOfLocStObj))
  };
};
