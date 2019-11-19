import React, { Component } from "react";
import "../styles/app/app.css";
import "../styles/wrapper/wrapper.css";
import Header from "./Header/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Schedule from "../components/Schedule";
import { APPSTATE } from "../initStore";
import "../styles/fonts/__verdana-pro/fonts__verdana-pro.css";

class App extends Component {
  render() {
    const appState = this.props.appState;
    //Если только что отправили форму
    if (appState == APPSTATE.submitted) {
      window.location.reload(true);
    }
    return (
      <div className="wrapper">
        <div className="app">
          <Header appState={appState} />
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
    appState: store.appState
  };
};

//Оборачиваем App и отдаем
export default connect(mapStateToProps)(App);
