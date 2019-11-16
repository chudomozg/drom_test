import React, { Component } from "react";
import { APPSTATE } from "../../initStore";
import css from "../../styles/OrderSbmtButton.css";

class OrderSbmtButton extends Component {
  render() {
    const isDisable =
      this.props.appState == APPSTATE.fild ? "" : "oreder-smbt-bttn-isdisable";
    return <input type="submit" value="Записаться" className={isDisable} />;
  }
}

export default OrderSbmtButton;
