import { CHANGE_INPUT_VALUE } from "./index";

export const changeInputValue = (inputType, value) => {
  return {
    type: CHANGE_INPUT_VALUE,
    payload: { inputType, value }
  };
};
