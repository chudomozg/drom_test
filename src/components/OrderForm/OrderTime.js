import React, { Component } from "react";

class OrderTime extends Component {
  constructor(props) {
    super(props);
    this.options = null;
  }

  getOptions(timeList) {
    //фильтруем только не занятое время
    return Object.values(timeList)
      .filter(item => {
        if (item.is_not_free == false) return true;
        // !item.is_not_free; почему-то не работает О_о
      })
      .map(item => {
        // формируем вывод
        return (
          <option key={item.date} value={item.date}>
            {item.begin}-{item.end}
          </option>
        );
      });
  }

  render() {
    console.log("render OrderTime: timeList: ", this.props.timeList);
    console.log(
      "render OrderTime: getOptions(this.props.timeList): ",
      this.getOptions(this.props.timeList)
    );
    console.log(
      "render OrderTime: this.props.currentDate: ",
      this.props.currentDate
    );
    return <select>{this.getOptions(this.props.timeList)}</select>;
  }
}

export default OrderTime;
