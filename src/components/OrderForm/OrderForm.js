import React, { Component } from "react";
import OrderDate from "./OrderDate";
import OrderTime from "./OrderTime";
import OrderPhone from "./OrderPhone";
import OrderName from "./OrderName";
import OrderSbmtButton from "./OrderSbmtButton";
import { connect } from "react-redux";
import { getDateTime } from "../../actions/getDateTime";
import { selectDate } from "../../actions/selectDate";

class OrderForm extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getDateTime(this.props.city.id);
  }

  render() {
    return (
      <form>
        <OrderDate
          dateTime={this.props.dateTime}
          changeSelectedDate={this.props.changeSelectedDate}
          currentDate={this.props.currentDate}
        />
        <OrderTime
          timeList={this.props.timeList}
          currentDate={this.props.currentDate}
        />
        <OrderPhone />
        <OrderName />
        <OrderSbmtButton />
      </form>
    );
  }
}

//Подключаем OrderForm к Store
const mapStateToProps = store => {
  return {
    dateTime: store.dateTime,
    city: store.city,
    currentDate: store.currentDate,
    timeList: store.timeList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDateTime: cityId => dispatch(getDateTime(cityId)),
    changeSelectedDate: date => dispatch(selectDate(date))
  };
};

//Оборачиваем App и отдаем
export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
