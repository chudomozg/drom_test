import React, { Component } from "react";
import CityServices from "./CityServices/CityServices";
import OrderForm from "./OrderForm/OrderForm";
import { APPSTATE } from "../initStore";
import { connect } from "react-redux";
import "../styles/content/__preloader/content__preloader.css";
import "../styles/content/__preloader/_active/content__preloader_active.css";

class Content extends Component {
  render() {
    const isPreloaderOn =
      this.props.appState == APPSTATE.load ? "content__preloader_active" : "";

    return (
      <div className="content">
        <div className={"content__preloader " + isPreloaderOn}></div>
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
