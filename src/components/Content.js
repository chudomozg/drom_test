import React, { Component } from "react";
import CityServices from "./CityServices/CityServices";
import OrderForm from "./OrderForm/OrderForm";
import { APPSTATE } from "../initStore";
import { connect } from "react-redux";
import css from "../styles/Content.css";

class Content extends Component {
  render() {
    const isPreloaderOn =
      this.props.appState == APPSTATE.load ? "preloader" : "preloaderoff";
    return (
      <div className="content">
        <div className={isPreloaderOn}></div>
        <CityServices />
        <OrderForm />
      </div>
    );
  }
}

//Подключаем App к Store
const mapStateToProps = store => {
  return {
    appState: store.appState
  };
};

//Оборачиваем App и отдаем
export default connect(mapStateToProps)(Content);
