import { GET_SCHEDULE } from "./index";

export const getSchedule = () => {
  return {
    type: GET_SCHEDULE,
    payload: JSON.parse(localStorage.getItem(`online-booking`))
  };
};
