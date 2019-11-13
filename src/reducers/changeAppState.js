const changeAppState = (state, action) => {
  console.log(action);
  return Object.assign({}, state, {
    appState: action.payload
  });
};
