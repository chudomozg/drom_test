import { SELECT_DATE } from "./index";
import { store } from "../initStore";

export const selectDate = selectedDate => {
  return {
    type: SELECT_DATE,
    payload: selectedDate
  };
};
