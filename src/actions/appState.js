import { APP_STATE } from "./index";
import { store } from "../initStore";

export const appState = state => {
  console.log(store.getState());
  return {
    type: APP_STATE,
    payload: state
  };
};
