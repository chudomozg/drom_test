import React, { Component } from "react";
import { connect } from "react-redux";
import { store } from "../initStore";
import { getSchedule } from "../actions/getSchedule";
import { linkDel } from "../actions/linkDel";
import ScheduleTable from "./ScheduleTable";
import "../styles/schedule/schedule.css";
import "../styles/schedule/__table/schedule__table.css";

class Schedule extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Schedule componentDidMount");
    this.props.getSchedule(`online-booking`);
  }

  render() {
    const local = JSON.stringify(this.props.schedule);
    console.log("store: ", store.getState());
    return (
      <div className="schedule">
        <ScheduleTable
          schedule={this.props.schedule}
          onLinkDel={this.props.onLinkDel}
        />
      </div>
    );
  }
}

//Подключаем App к Store
const mapStateToProps = store => {
  return {
    schedule: store.schedule
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSchedule: nameOfLocStObj => dispatch(getSchedule(nameOfLocStObj)),
    onLinkDel: id => dispatch(linkDel(id))
  };
};

//Оборачиваем App и отдаем
export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
