import React, { Component } from "react";
import { FORM_STATE } from "../../constants";
import "../../styles/sbmt-button/sbmt-button.css";
import "../../styles/sbmt-button/__button/sbmt-button__button.css";
import "../../styles/sbmt-button/__button/_disable/sbmt-button__button_disable.css";

class OrderSbmtButton extends Component {
  render() {
    const isDisable =
      this.props.formState == FORM_STATE.fild
        ? ""
        : "sbmt-button__button_disable";
    return (
      <div className="order-form__sbmt-button sbmt-button">
        <input
          type="submit"
          value="Записаться"
          className={"sbmt-button__button " + isDisable}
        />
      </div>
    );
  }
}

export default OrderSbmtButton;
