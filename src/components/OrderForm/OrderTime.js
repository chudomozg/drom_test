import React, { Component } from "react";

class OrderTime extends Component {
  constructor(props) {
    super(props);
    this.options = null;
  }

  getOptions(timeList) {
    console.log("timelist", timeList);
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
    return <select>{this.getOptions(this.props.timeList)}</select>;
  }
}

export default OrderTime;
