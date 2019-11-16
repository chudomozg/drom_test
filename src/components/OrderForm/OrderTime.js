import React, { Component } from "react";
import { VALIDATION_TYPE } from "../../initStore";

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
    return (
      <select onBlur={this.BlurHandle}>
        {this.getOptions(this.props.timeList)}
      </select>
    );
  }
}

export default OrderTime;
