import { APP_STATE } from "./index";

export const appState = state => {
  return {
    type: APP_STATE,
    payload: state
  };
};
