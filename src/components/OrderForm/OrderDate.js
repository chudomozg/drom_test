import React, { Component } from "react";

class OrderDate extends Component {
  constructor(props) {
    super(props);
    this.changeHandle = this.changeHandle.bind(this);
  }

  componentDidMount() {
    console.log("OrderDate componentDidMount");
  }

  changeHandle(e) {
    console.log(
      "changeHandle OrderDate target.value: ",
      e.target.value,
      "props.changeSelectedDate: ",
      this.props.changeSelectedDate
    );
    this.props.changeSelectedDate(e.target.value);
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
    return Object.keys(dateTime).map(day => {
      return (
        <option key={day} value={day}>
          {this.getFormatedDate(day)}
        </option>
      );
    });
  }

  render() {
    console.log("render в OrderDate: ", this.props.dateTime);
    return (
      <select value={this.props.currentDate} onChange={this.changeHandle}>
        {this.getOptionsFromObject(this.props.dateTime)}
      </select>
    );
  }
}

export default OrderDate;
