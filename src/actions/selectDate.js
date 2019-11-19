import { SELECT_DATE } from "./index";

export const selectDate = selectedDate => {
  return {
    type: SELECT_DATE,
    payload: selectedDate
  };
};
