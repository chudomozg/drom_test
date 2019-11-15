import React, { Component } from "react";
import ImputMask from "react-input-mask";
import { VALIDATION_TYPE } from "../../initStore";
import css from "../../styles/OrderPhone.css";

class OrderPhone extends Component {
  constructor(props) {
    super(props);
    this.BlurHandle = this.BlurHandle.bind(this);
  }

  BlurHandle(e) {
    this.props.validation(VALIDATION_TYPE.phone, e.target.value);
  }

  render() {
    const isFailVisible = this.props.validState
      ? ""
      : "order-phone-fail-visible";
    return (
      <div className="oreder-phone">
        <ImputMask
          mask="+7 (999) 999-99-99"
          alwaysShowMask={true}
          maskPlaceholder={"_"}
          onBlur={this.BlurHandle}
        />
        <div className={"order-phone-fail " + isFailVisible}>
          {
            "Пожалуйста, введите корректный телефон, иначе наши специалисты не смогут связаться с вами"
          }
        </div>
      </div>
    );
  }
}

export default OrderPhone;
