import { APP_STATE } from "./index";

export const appState = state => {
  console.log("action appState - пришло состояние: ", state);
  return {
    type: APP_STATE,
    payload: state
  };
};
