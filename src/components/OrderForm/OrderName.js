import React, { Component } from "react";
import { VALIDATION_TYPE } from "../../initStore";
import css from "../../styles/OrderName.css";

class OrderName extends Component {
  constructor(props) {
    super(props);
    this.BlurHandle = this.BlurHandle.bind(this);
  }

  BlurHandle(e) {
    this.props.validation(VALIDATION_TYPE.name, e.target.value);
  }
  render() {
    const isFailVisible = this.props.validState
      ? ""
      : "order-phone-fail-visible";
    return (
      <div>
        <input placeholder="Ваше Имя" onBlur={this.BlurHandle} />
        <div className={"order-name-fail " + isFailVisible}>
          {"Пожалуйста, укажите имя"}
        </div>
      </div>
    );
  }
}

export default OrderName;
