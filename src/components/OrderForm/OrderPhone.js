import React, { Component } from "react";
import ImputMask from "react-input-mask";
import { VALIDATION_TYPE, VALIDSTATE } from "../../initStore";
import input_css from "../../styles/input/input.css";
import order_phone__input_css from "../../styles/order-phone/__input/order-phone__input.css";
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
    const isFailVisible =
      this.props.validState == VALIDSTATE.invalid
        ? "order-phone__fail_visible"
        : "";
    const isInvalid =
      this.props.validState == VALIDSTATE.invalid
        ? "order-form__order-name_invalid"
        : "";
    return (
      <div className="oreder-phone order-form__order-phone">
        <ImputMask
          mask="+7 (999) 999-99-99"
          // alwaysShowMask={true}
          placeholder="+7 (___) ___-__-__"
          maskPlaceholder={"_"}
          onBlur={this.BlurHandle}
          className={`order-phone__input input ${isInvalid}`}
        />
        <div className={"order-phone__fail " + isFailVisible}>
          {
            "Пожалуйста, введите корректный телефон, иначе наши специалисты не смогут связаться с вами"
          }
        </div>
      </div>
    );
  }
}

export default OrderPhone;
