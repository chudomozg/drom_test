import React, { Component } from "react";
import { APPSTATE } from "../../initStore";
import sbmt_button_css from "../../styles/sbmt-button/sbmt-button.css";
import bmt_button_button_css from "../../styles/sbmt-button/__button/sbmt-button__button.css";
import sbmt_button_disable_css from "../../styles/sbmt-button/__button/_disable/sbmt-button__button_disable.css";

class OrderSbmtButton extends Component {
  render() {
    const isDisable =
      this.props.appState == APPSTATE.fild ? "" : "sbmt-button__button_disable";
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
