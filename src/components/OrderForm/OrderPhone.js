import React, { Component } from "react";
import ImputMask from "react-input-mask";

class OrderPhone extends Component {
  render() {
    return (
      <ImputMask mask="+7 (999) 999-99-99" placeholder="+7 (___) ___-__-__" />
    );
  }
}

export default OrderPhone;
