import React, { Component } from "react";
import { VALIDATION_TYPE, VALIDSTATE, INPUT_TYPE } from "../../constants";
import "../../styles/select/_invalid/select_invalid.css";

class OrderTime extends Component {
  constructor(props) {
    super(props);
    this.blurHandle = this.blurHandle.bind(this);
    this.changeHandle = this.changeHandle.bind(this);
  }

  blurHandle(e) {
    this.props.validation(VALIDATION_TYPE.time, e.target.value);
  }

  changeHandle(e) {
    this.props.change(INPUT_TYPE.currentTime, e.target.value);
  }

  getOptions(timeList) {
    // формируем вывод
    let timeOptions = timeList.map(item => {
      return (
        <option key={item.date} value={item.date}>
          {item.begin}-{item.end}
        </option>
      );
    });

    //Добавляем дефолтное значение
    timeOptions.unshift(
      <option key={0} value={0}>
        Время
      </option>
    );

    return timeOptions;
  }

  render() {
    let OrderTimeSelectClasses = ["select", "order-form__order-time"];
    if (this.props.validState == VALIDSTATE.clear)
      OrderTimeSelectClasses.push("order-form__order-time_clear");

    if (this.props.validState == VALIDSTATE.invalid)
      OrderTimeSelectClasses.push("select_invalid");

    return (
      <select
        onChange={this.changeHandle}
        onBlur={this.blurHandle}
        className={OrderTimeSelectClasses.join(" ")}
      >
        {this.getOptions(this.props.timeList)}
      </select>
    );
  }
}

export default OrderTime;
