import React, { Component } from "react";
import { connect } from "react-redux";
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
    this.props.getSchedule(`online-booking`);
  }

  render() {
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

//Подключаем Schedule к Store
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

//Оборачиваем Schedule и отдаем
export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
