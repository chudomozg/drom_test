import React, { Component } from "react";
import { APPSTATE } from "../../initStore";

class OrderSbmtButton extends Component {
  render() {
    const isDisable = this.props.appState == APPSTATE.fild ? false : true;
    return <input type="submit" value="Записаться" disabled={isDisable} />;
  }
}

export default OrderSbmtButton;
