import React, { Component } from "react";
import OrderDate from "./OrderDate";
import OrderTime from "./OrderTime";
import OrderPhone from "./OrderPhone";
import OrderName from "./OrderName";
import OrderSbmtButton from "./OrderSbmtButton";

export default class OrderForm extends Component {
  constructor(props) {
    super(props);
    // this.dateOptions = this.props.state.date;
    // this.timeOptions = this.props.state.time;
  }
  render() {
    return (
      <form>
        <OrderDate />
        <OrderTime />
        <OrderPhone />
        <OrderName />
        <OrderSbmtButton />
      </form>
    );
  }
}
