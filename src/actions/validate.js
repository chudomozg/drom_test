import { VALIDATE } from "./index";

export const changeCity = eventTarget => {
  return {
    type: VALIDATE,
    payload: eventTarget
  };
};
