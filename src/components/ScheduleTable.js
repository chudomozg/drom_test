import React, { Component } from "react";

export default class ScheduleTable extends Component {
  constructor(props) {
    super(props);
    this.onLinkClick = this.onLinkClick.bind(this);
  }

  onLinkClick(e) {
    e.preventDefault();
    //из ссылки //домен.ру/index берем только index
    const delId = e.target.href
      .split("?")[1]
      .split("&")[0]
      .split("=")[1];
    this.props.onLinkDel(delId);
  }

  getTdfromObject(scheduleObj) {
    return scheduleObj.map((item, index) => {
      return (
        <tr>
          <td>
            <div className="index">{index}</div>
            <div className="delete-link">
              <a href={"?del=" + index} onClick={this.onLinkClick}>
                Удалить
              </a>
            </div>
          </td>
          <td>{item.city.name}</td>
          <td>
            {item.currentDate}
            <br />
            {item.currentTime}
          </td>
          <td>
            {item.name}
            <br />
            {item.phone}
          </td>
        </tr>
      );
    });
  }

  render() {
    if (this.props.schedule.length) {
      return (
        <table className="schedule__table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Город</th>
              <th>Дата и время</th>
              <th>Имя и телефон</th>
            </tr>
            {this.getTdfromObject(this.props.schedule)}
          </thead>
        </table>
      );
    } else {
      return (
        <div className="schedule-empty">
          <b>Онлайн брони отсутствуют</b>
        </div>
      );
    }
  }
}
