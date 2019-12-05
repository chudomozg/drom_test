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
import { FORM_STATE, VALIDSTATE, VALIDATION_TYPE } from "../../constants";
import "../../styles/order-form/order-form.css";
import "../../styles/order-form/__datetime-fail/order-form__datetime-fail.css";
import "../../styles/order-form/__datetime-fail/_visible/order-form__datetime-fail_visible.css";
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
    let OrderDateTimeFailClasses = ["order-form__datetime-fail"];
    if (
      this.props.validState.isDateValid == VALIDSTATE.invalid ||
      this.props.validState.isTimeValid == VALIDSTATE.invalid
    )
      OrderDateTimeFailClasses.push("order-form__datetime-fail_visible");

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

        <div className={OrderDateTimeFailClasses.join(" ")}>
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
