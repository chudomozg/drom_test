import { VALIDSTATE, FORM_STATE } from "../constants";

//Если один из элементов validState == false, то appState = INVALID
export const getAppStateFromValidState = validState => {
  let newValidState = { ...validState };
  //Селект города могут и не трогать, но по дефолту у него validState = clear
  //а что бы сделать общий FORM_STATE = fild надо сделать ему valid
  //В селекте города заведомо валидное значение (по ТЗ)
  newValidState.isCityValid = VALIDSTATE.valid;
  let validStateInvalidArr = Object.values(newValidState).filter(item => {
    if (item == VALIDSTATE.invalid || item == VALIDSTATE.clear) return true;
  });
  return validStateInvalidArr.length ? FORM_STATE.inv : FORM_STATE.fild;
};

//валидация телефона
export const getPhoneValidationState = (validState, value) => {
  //Проверяем телефон регуляркой
  const phoneValidRegexp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  const phoneValidState = phoneValidRegexp.test(value);
  //кладем в состояние
  const newValidState = Object.assign({}, validState, {
    isPhoneValid: phoneValidState ? VALIDSTATE.valid : VALIDSTATE.invalid
  });
  //Если один из элементов validState == false, то appState = INVALID
  const appState = getAppStateFromValidState(newValidState);
  return {
    validState: newValidState,
    appState,
    phone: value
  };
};

//валидация Имени (не пусто)
export const getNameValidationState = (validState, value) => {
  //кладем в состояние
  let isNameValid = VALIDSTATE.invalid;
  if (value != null) {
    if (value.length) {
      isNameValid = VALIDSTATE.valid;
    }
  }
  const newValidState = Object.assign({}, validState, {
    isNameValid: isNameValid
  });

  //Если один из элементов validState == false, то appState = INVALID
  const appState = getAppStateFromValidState(newValidState);
  return {
    validState: newValidState,
    appState,
    name: value
  };
};

//Валидация даты (не дефолтное)
export const getDateValidationState = (validState, value) => {
  const newValidState = Object.assign({}, validState, {
    isDateValid: value != 0 ? VALIDSTATE.valid : VALIDSTATE.invalid
  });
  const appState = getAppStateFromValidState(newValidState);
  return {
    validState: newValidState,
    appState
  };
};

//валидация времени (не дефолтное)
export const getTimeValidationState = (validState, value) => {
  const newValidState = Object.assign({}, validState, {
    isTimeValid: value != 0 ? VALIDSTATE.valid : VALIDSTATE.invalid
  });
  const appState = getAppStateFromValidState(newValidState);
  return {
    validState: newValidState,
    appState,
    currentTime: value
  };
};
