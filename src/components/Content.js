import React, { Component } from "react";
import CityServices from "./CityServices/CityServices";
import OrderForm from "./OrderForm/OrderForm";

export default class Content extends Component {
  render() {
    return (
      <div>
        <CityServices />
        <OrderForm />
      </div>
    );
  }
}
