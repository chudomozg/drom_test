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
import order_form_css from "../../styles/order-form/order-form.css";
import "../../styles/order-form/__datetime-fail/order-form__datetime-fail.css";
import "../../styles/order-form/__datetime-fail/_visible/order-form__datetime-fail_visible.css";
import "../../styles/order-form/__order-time/_invalid/order-form__order-time_invalid.css";
import "../../styles/order-form/__order-date/_invalid/order-form__order-date_invalid.css";
import order_form__order_date_css from "../../styles/order-form/__order-date/order-form__order-date.css";
import order_form__order_time_css from "../../styles/order-form/__order-time/order-form__order-time.css";
import order_form__order_phone_css from "../../styles/order-form/__order-phone/order-form__order-phone.css";
import order_form__order_name_css from "../../styles/order-form/__order-name/order-form__order-name.css";
import "../../styles/order-form/__order-name/_invalid/order-form__order-name_invalid.css";
import "../../styles/order-form/__order-phone/_invalid/order-form__order-phone_invalid.css";
import order_form__sbmt_buttone_css from "../../styles/order-form/__sbmt-button/order-form__sbmt-button.css";
import order_form__wrapper_css from "../../styles/order-form/__wrapper/order-form__wrapper.css";
import order_form__order_date_clear_css from "../../styles/order-form/__order-date/_clear/order-form__order-date_clear.css";
import order_form__order_time_clear_css from "../../styles/order-form/__order-time/_clear/order-form__order-time_clear.css";
import { APPSTATE, VALIDSTATE, VALIDATION_TYPE } from "../../initStore";

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmitHandle = this.onSubmitHandle.bind(this);
  }

  onSubmitHandle(e) {
    e.preventDefault();
    if (this.props.appState == APPSTATE.fild) {
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
    const isDateTimeFailVisible =
      this.props.validState.isDateValid == VALIDSTATE.invalid ||
      this.props.validState.isTimeValid == VALIDSTATE.invalid
        ? "order-form__datetime-fail_visible"
        : "";
    let dateTimeFailContent =
      this.props.validState.isDateValid == VALIDSTATE.invalid
        ? "дату"
        : this.props.validState.isTimeValid == VALIDSTATE.invalid
        ? "время"
        : "";

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
            timeList={this.props.timeList}
            currentDate={this.props.currentDate}
            validation={this.props.validation}
            validState={this.props.validState.isTimeValid}
          />
        </div>

        <div className={"order-form__datetime-fail " + isDateTimeFailVisible}>
          {"Пожалуйста, выберите " + dateTimeFailContent}
        </div>

        <OrderPhone
          validation={this.props.validation}
          validState={this.props.validState.isPhoneValid}
        />
        <OrderName
          validation={this.props.validation}
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
    validation: (validationType, value) =>
      dispatch(validate(validationType, value)),
    formSubmit: values => dispatch(addBoking(values))
  };
};

//Оборачиваем App и отдаем
export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
