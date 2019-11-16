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
import css from "../../styles/OrderForm.css";
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
      //здесь по хорошей нужно вызвать валидацию всех полей
      //если успею. Проблема что в валидацию попадает VALIDSTATE.clear
    }
  }

  componentDidMount() {
    this.props.getDateTime(this.props.city.id);
  }

  render() {
    const isDateTimeFailVisible =
      this.props.validState.isDateValid == VALIDSTATE.invalid ||
      this.props.validState.isTimeValid == VALIDSTATE.invalid
        ? "order-datetime-fail-visible"
        : "";
    let dateTimeFailContent =
      this.props.validState.isDateValid == VALIDSTATE.invalid
        ? "дату"
        : this.props.validState.isTimeValid == VALIDSTATE.invalid
        ? "время"
        : "";

    console.log("validState: ", this.props.validState);
    return (
      <form onSubmit={this.onSubmitHandle}>
        <OrderDate
          dateTime={this.props.dateTime}
          changeSelectedDate={this.props.changeSelectedDate}
          currentDate={this.props.currentDate}
          validation={this.props.validation}
        />
        <OrderTime
          timeList={this.props.timeList}
          currentDate={this.props.currentDate}
          validation={this.props.validation}
        />
        <div className={"order-datetime-fail " + isDateTimeFailVisible}>
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
