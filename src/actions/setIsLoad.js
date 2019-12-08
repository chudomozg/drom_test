import { SET_IS_LOADING } from "./index";

export const setIsLoading = state => {
  return {
    type: SET_IS_LOADING,
    payload: state
  };
};
