import React, { Component } from "react";
import ImputMask from "react-input-mask";
import { VALIDATION_TYPE, VALIDSTATE } from "../../constants";
import "../../styles/input/input.css";
import "../../styles/input/_invalid/input_invalid.css";
import "../../styles/order-phone/__input/order-phone__input.css";
import "../../styles/order-phone/__fail/order-phone__fail.css";
import "../../styles/order-phone/__fail/_visible/order-phone__fail_visible.css";

class OrderPhone extends Component {
  constructor(props) {
    super(props);
    this.BlurHandle = this.BlurHandle.bind(this);
  }

  BlurHandle(e) {
    this.props.validation(VALIDATION_TYPE.phone, e.target.value);
  }

  render() {
    let OrderPhoneDivClasses = ["oreder-phone", "order-form__order-phone"];

    let OrderPhoneSelectClasses = ["order-phone__input", "input"];
    if (this.props.validState == VALIDSTATE.invalid)
      OrderPhoneSelectClasses.push("input_invalid");

    let OrderPhoneFailClasses = ["order-phone__fail"];
    if (this.props.validState == VALIDSTATE.invalid)
      OrderPhoneFailClasses.push("order-phone__fail_visible");

    return (
      <div className={OrderPhoneDivClasses.join(" ")}>
        <ImputMask
          mask="+7 (999) 999-99-99"
          placeholder="+7 (___) ___-__-__"
          maskPlaceholder={"_"}
          onBlur={this.BlurHandle}
          className={OrderPhoneSelectClasses.join(" ")}
        />
        <div className={OrderPhoneFailClasses.join(" ")}>
          {
            "Пожалуйста, введите корректный телефон, иначе наши специалисты не смогут связаться с вами"
          }
        </div>
      </div>
    );
  }
}

export default OrderPhone;
