import React, { Component } from "react";
import { VALIDATION_TYPE, VALIDSTATE } from "../../initStore";
import "../../styles/select/_invalid/select_invalid.css";

class OrderDate extends Component {
  constructor(props) {
    super(props);
    this.changeHandle = this.changeHandle.bind(this);
    this.BlurHandle = this.BlurHandle.bind(this);
  }

  changeHandle(e) {
    this.props.changeSelectedDate(e.target.value);
  }

  BlurHandle(e) {
    this.props.validation(VALIDATION_TYPE.date, e.target.value);
  }

  //Я не знал, можно ли использовать библиотеки упрощающие жизнь в тестовом задании.
  //Поэтому не стал подключать moment
  getFormatedDay(dayNum) {
    let day = dayNum == 0 ? 7 : dayNum;
    switch (day) {
      case 1:
        return "Понедельник";
      case 2:
        return "Вторник";
      case 3:
        return "Среда";
      case 4:
        return "Четверг";
      case 5:
        return "Пятница";
      case 6:
        return "Суббота";
      case 7:
        return "Воскресенье";
    }
  }

  getFormatedMonth(monthNum) {
    switch (monthNum) {
      case 0:
        return "Января";
      case 1:
        return "Февраля";
      case 2:
        return "Марта";
      case 3:
        return "Апреля";
      case 4:
        return "Мая";
      case 5:
        return "Июня";
      case 6:
        return "Июля";
      case 7:
        return "Августа";
      case 8:
        return "Сентября";
      case 9:
        return "Октября";
      case 10:
        return "Ноября";
      case 11:
        return "Декабря";
    }
  }

  //форматируем дату
  getFormatedDate(dateString) {
    const date = new Date(Date.parse(dateString));
    return `${this.getFormatedDay(
      date.getDay()
    )}, ${date.getDate()} ${this.getFormatedMonth(date.getMonth())}`;
  }

  getOptionsFromObject(dateTime) {
    let dateList = Object.keys(dateTime).map(day => {
      return (
        <option key={day} value={day}>
          {this.getFormatedDate(day)}
        </option>
      );
    });
    dateList.unshift(
      <option key={0} value={0}>
        {"Дата"}
      </option>
    );

    return dateList;
  }

  render() {
    let OrderDateSelectClasses = ["select", "order-form__order-date"];
    if (this.props.validState == VALIDSTATE.clear)
      OrderDateSelectClasses.push("order-form__order-date_clear");
    if (this.props.validState == VALIDSTATE.invalid)
      OrderDateSelectClasses.push("select_invalid");

    return (
      <select
        className={OrderDateSelectClasses.join(" ")}
        value={this.props.currentDate}
        onChange={this.changeHandle}
        onBlur={this.BlurHandle}
      >
        {this.getOptionsFromObject(this.props.dateTime)}
      </select>
    );
  }
}

export default OrderDate;
