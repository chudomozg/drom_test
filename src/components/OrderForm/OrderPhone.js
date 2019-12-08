import React, { Component } from "react";
import ImputMask from "react-input-mask";
import { VALIDATION_TYPE, VALIDSTATE, INPUT_TYPE } from "../../constants";
import "../../styles/input/input.css";
import "../../styles/input/_invalid/input_invalid.css";
import "../../styles/order-phone/__input/order-phone__input.css";
import "../../styles/order-phone/__fail/order-phone__fail.css";

class OrderPhone extends Component {
  constructor(props) {
    super(props);
    this.blurHandle = this.blurHandle.bind(this);
    this.changeHandle = this.changeHandle.bind(this);
  }

  blurHandle(e) {
    this.props.validation(VALIDATION_TYPE.phone, e.target.value);
  }

  changeHandle(e) {
    this.props.change(INPUT_TYPE.phone, e.target.value);
  }

  render() {
    let OrderPhoneDivClasses = ["oreder-phone", "order-form__order-phone"];

    let OrderPhoneSelectClasses = ["order-phone__input", "input"];
    if (this.props.validState == VALIDSTATE.invalid)
      OrderPhoneSelectClasses.push("input_invalid");
    return (
      <div className={OrderPhoneDivClasses.join(" ")}>
        <ImputMask
          mask="+7 (999) 999-99-99"
          placeholder="+7 (___) ___-__-__"
          maskPlaceholder={"_"}
          onBlur={this.blurHandle}
          onChange={this.changeHandle}
          className={OrderPhoneSelectClasses.join(" ")}
        />
        {this.props.validState == VALIDSTATE.invalid && (
          <div className="order-phone__fail">
            Пожалуйста, введите корректный телефон, иначе наши специалисты не
            смогут связаться с вами
          </div>
        )}
      </div>
    );
  }
}

export default OrderPhone;
