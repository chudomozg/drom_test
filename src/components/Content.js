import React, { Component } from "react";
import CityServices from "./CityServices/CityServices";
import OrderForm from "./OrderForm/OrderForm";
import { FORM_STATE } from "../constants";
import { connect } from "react-redux";
import "../styles/content/__preloader/content__preloader.css";
import "../styles/content/__preloader/_active/content__preloader_active.css";

class Content extends Component {
  render() {
    let contentPreloaderClasses = ["content__preloader"];
    if (this.props.appState == FORM_STATE.load)
      contentPreloaderClasses.push("content__preloader_active");

    return (
      <div className="content">
        <div className={contentPreloaderClasses.join(" ")}></div>
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
