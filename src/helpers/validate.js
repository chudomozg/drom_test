import { VALIDSTATE } from "../constants";

//валидация телефона
export const getPhoneValidationState = (validState, value) => {
  //Проверяем телефон регуляркой
  const phoneValidRegexp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  const phoneValidState = phoneValidRegexp.test(value);
  //кладем в состояние
  const newValidState = Object.assign({}, validState, {
    isPhoneValid: phoneValidState ? VALIDSTATE.valid : VALIDSTATE.invalid
  });
  return {
    validState: newValidState
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
  return {
    validState: newValidState
  };
};

//Валидация даты (не дефолтное)
export const getDateValidationState = (validState, value) => {
  const newValidState = Object.assign({}, validState, {
    isDateValid: value != 0 ? VALIDSTATE.valid : VALIDSTATE.invalid
  });
  return {
    validState: newValidState
  };
};

//валидация времени (не дефолтное)
export const getTimeValidationState = (validState, value) => {
  const newValidState = Object.assign({}, validState, {
    isTimeValid: value != 0 ? VALIDSTATE.valid : VALIDSTATE.invalid
  });
  return {
    validState: newValidState
  };
};
