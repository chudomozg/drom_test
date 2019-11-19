import { ADD } from "./index";

export const addBoking = formValues => {
  return {
    type: ADD,
    payload: formValues
  };
};
