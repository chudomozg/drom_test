import React, { Component } from "react";
import { VALIDATION_TYPE, VALIDSTATE } from "../../initStore";

class OrderTime extends Component {
  constructor(props) {
    super(props);
    this.BlurHandle = this.BlurHandle.bind(this);
  }

  BlurHandle(e) {
    this.props.validation(VALIDATION_TYPE.time, e.target.value);
  }

  getOptions(timeList) {
    //фильтруем только не занятое время
    let timeOptions = Object.values(timeList)
      .filter(item => {
        return !item.is_not_free;
      })
      .map(item => {
        // формируем вывод
        return (
          <option key={item.date} value={item.date}>
            {item.begin}-{item.end}
          </option>
        );
      });

    timeOptions.unshift(
      <option key={0} value={0}>
        {"Время"}
      </option>
    );

    return timeOptions;
  }

  render() {
    const isClear =
      this.props.validState == VALIDSTATE.clear
        ? "order-form__order-time_clear"
        : "";
    const isInvalid =
      this.props.validState == VALIDSTATE.invalid
        ? "order-form__order-time_invalid"
        : "";
    return (
      <select
        onBlur={this.BlurHandle}
        className={"select order-form__order-time " + isClear + isInvalid}
      >
        {this.getOptions(this.props.timeList)}
      </select>
    );
  }
}

export default OrderTime;
