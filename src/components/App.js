import React, { Component } from "react";
import "../styles/app/app.css";
import "../styles/wrapper/wrapper.css";
import Header from "./Header/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Schedule from "../components/Schedule";
import "../styles/fonts/__verdana-pro/fonts__verdana-pro.css";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="app">
          <Header isLoading={this.props.isLoading} />
          <Route exact path="/" component={Content} />
          <Route exact path="/schedule" component={Schedule} />
          <Footer />
        </div>
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
export default connect(mapStateToProps)(App);
