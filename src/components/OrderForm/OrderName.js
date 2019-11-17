import React, { Component } from "react";
import { VALIDATION_TYPE, VALIDSTATE } from "../../initStore";
import "../../styles/order-name/__fail/order-name__fail.css";
import "../../styles/order-name/__fail/_visible/order-name__fail_visible.css";
import input_css from "../../styles/input/input.css";
import order_name__input_css from "../../styles/order-name/__input/order-name__input.css";

class OrderName extends Component {
  constructor(props) {
    super(props);
    this.BlurHandle = this.BlurHandle.bind(this);
  }

  BlurHandle(e) {
    this.props.validation(VALIDATION_TYPE.name, e.target.value);
  }
  render() {
    const isFailVisible =
      this.props.validState == VALIDSTATE.invalid
        ? "order-name__fail_visible"
        : "";
    const isInvalid =
      this.props.validState == VALIDSTATE.invalid
        ? "order-form__order-name_invalid"
        : "";
    return (
      <div className="order-form__order-name">
        <input
          className={`order-name__input input  ${isInvalid}`}
          placeholder="Ваше Имя"
          onBlur={this.BlurHandle}
        />
        <div className={`order-name__fail ${isFailVisible}`}>
          {"Пожалуйста, укажите имя"}
        </div>
      </div>
    );
  }
}

export default OrderName;
