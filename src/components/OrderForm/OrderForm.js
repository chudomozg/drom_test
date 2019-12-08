import React, { Component } from "react";
import OrderDate from "./OrderDate";
import OrderTime from "./OrderTime";
import OrderPhone from "./OrderPhone";
import OrderName from "./OrderName";
import OrderSbmtButton from "./OrderSbmtButton";
import { connect } from "react-redux";
import { getDateTime } from "../../actions/getDateTime";
import { selectDate } from "../../actions/selectDate";
import { validate } from "../../actions/validate";
import { addBoking } from "../../actions/add";
import { changeInputValue } from "../../actions/changeInputValue";
import { FORM_STATE, VALIDSTATE, VALIDATION_TYPE } from "../../constants";
import "../../styles/order-form/order-form.css";
import "../../styles/order-form/__datetime-fail/order-form__datetime-fail.css";
import "../../styles/order-form/__order-date/order-form__order-date.css";
import "../../styles/order-form/__order-time/order-form__order-time.css";
import "../../styles/order-form/__order-phone/order-form__order-phone.css";
import "../../styles/order-form/__order-name/order-form__order-name.css";
import "../../styles/order-form/__sbmt-button/order-form__sbmt-button.css";
import "../../styles/order-form/__wrapper/order-form__wrapper.css";
import "../../styles/order-form/__order-date/_clear/order-form__order-date_clear.css";
import "../../styles/order-form/__order-time/_clear/order-form__order-time_clear.css";

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmitHandle = this.onSubmitHandle.bind(this);
  }

  onSubmitHandle(e) {
    e.preventDefault();
    if (this.props.appState == FORM_STATE.fild) {
      this.props.formSubmit({
        city: this.props.city,
        currentDate: this.props.currentDate,
        currentTime: this.props.currentTime.split(" ")[1],
        phone: this.props.phone,
        name: this.props.name
      });
    } else {
      this.props.validation(VALIDATION_TYPE.time, this.props.currentTime);
      this.props.validation(VALIDATION_TYPE.date, this.props.currentDate);
      this.props.validation(VALIDATION_TYPE.phone, this.props.phone);
      this.props.validation(VALIDATION_TYPE.name, this.props.name);
    }
  }

  componentDidMount() {
    this.props.getDateTime(this.props.city.id);
  }

  render() {
    let dateTimeFailContent = "";
    if (this.props.validState.isDateValid == VALIDSTATE.invalid)
      dateTimeFailContent = "дату";
    else if (this.props.validState.isTimeValid == VALIDSTATE.invalid)
      dateTimeFailContent = "время";

    return (
      <form onSubmit={this.onSubmitHandle}>
        <div className="order-form__wrapper ">
          <OrderDate
            dateTime={this.props.dateTime}
            changeSelectedDate={this.props.changeSelectedDate}
            currentDate={this.props.currentDate}
            validState={this.props.validState.isDateValid}
            validation={this.props.validation}
          />
          <OrderTime
            change={this.props.changeInputValue}
            timeList={this.props.timeList}
            currentDate={this.props.currentDate}
            validation={this.props.validation}
            validState={this.props.validState.isTimeValid}
          />
        </div>

        {(this.props.validState.isDateValid == VALIDSTATE.invalid ||
          this.props.validState.isTimeValid == VALIDSTATE.invalid) && (
          <div className="order-form__datetime-fail">
            {"Пожалуйста, выберите " + dateTimeFailContent}
          </div>
        )}

        <OrderPhone
          change={this.props.changeInputValue}
          validation={this.props.validation}
          validState={this.props.validState.isPhoneValid}
        />
        <OrderName
          val={this.props.name}
          validation={this.props.validation}
          change={this.props.changeInputValue}
          validState={this.props.validState.isNameValid}
        />
        <OrderSbmtButton appState={this.props.appState} />
      </form>
    );
  }
}

//Подключаем OrderForm к Store
const mapStateToProps = store => {
  return {
    dateTime: store.dateTime,
    city: store.city,
    currentDate: store.currentDate,
    timeList: store.timeList,
    appState: store.appState,
    validState: store.validState,
    currentTime: store.currentTime,
    phone: store.phone,
    name: store.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDateTime: cityId => dispatch(getDateTime(cityId)),
    changeSelectedDate: date => dispatch(selectDate(date)),
    changeInputValue: (inputType, value) =>
      dispatch(changeInputValue(inputType, value)),
    validation: (validationType, value) =>
      dispatch(validate(validationType, value)),
    formSubmit: values => dispatch(addBoking(values))
  };
};

//Оборачиваем App и отдаем
export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
