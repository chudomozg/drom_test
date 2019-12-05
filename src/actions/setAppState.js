import { SET_APP_STATE } from "./index";

export const setAppState = state => {
  return {
    type: SET_APP_STATE,
    payload: state
  };
};
