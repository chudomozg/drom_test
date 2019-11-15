import { VALIDATE } from "./index";

export const validate = (validationType, value) => {
  return {
    type: VALIDATE,
    payload: { validationType, value }
  };
};
