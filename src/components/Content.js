import React, { Component } from "react";
import CityServices from "./CityServices/CityServices";
import OrderForm from "./OrderForm/OrderForm";
import { connect } from "react-redux";
import "../styles/content/__preloader/content__preloader.css";

class Content extends Component {
  render() {
    return (
      <div className="content">
        {this.props.isLoading && <div className="content__preloader"></div>}
        <CityServices />
        <OrderForm />
      </div>
    );
  }
}

//Подключаем App к Store
const mapStateToProps = store => {
  return {
    isLoading: store.isLoading
  };
};

//Оборачиваем App и отдаем
export default connect(mapStateToProps)(Content);
