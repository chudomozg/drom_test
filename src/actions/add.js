import { ADD } from "./index";
import { store } from "../initStore";

export const addBoking = formValues => {
  console.log(store.getState());
  console.log("formValues: ", formValues);
  return {
    type: ADD,
    payload: formValues
  };
};
