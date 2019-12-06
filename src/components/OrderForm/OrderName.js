import React, { Component } from "react";
import { VALIDATION_TYPE, VALIDSTATE } from "../../constants";
import "../../styles/order-name/__fail/order-name__fail.css";
import "../../styles/input/input.css";
import "../../styles/input/_invalid/input_invalid.css";
import "../../styles/order-name/__input/order-name__input.css";

class OrderName extends Component {
  constructor(props) {
    super(props);
    this.BlurHandle = this.BlurHandle.bind(this);
  }

  BlurHandle(e) {
    this.props.validation(VALIDATION_TYPE.name, e.target.value);
  }
  render() {
    let orderNameInputClasses = ["order-name__input", "input"];
    if (this.props.validState == VALIDSTATE.invalid)
      orderNameInputClasses.push("input_invalid");

    return (
      <div className="order-form__order-name">
        <input
          className={orderNameInputClasses.join(" ")}
          placeholder="Ваше Имя"
          onChange={this.BlurHandle}
        />
        {this.props.validState == VALIDSTATE.invalid && (
          <div className="order-name__fail">Пожалуйста, укажите имя</div>
        )}
      </div>
    );
  }
}

export default OrderName;
