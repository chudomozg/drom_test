import React, { Component } from "react";
import "../styles/App.css";
import Header from "./Header/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Schedule from "../components/Schedule";
import Add from "../components/Add";

class App extends Component {
  render() {
    const appState = this.props.appState;

    return (
      <div className="app-wrapper">
        <div className="app">
          <Header appState={appState} />
          <Route exact path="/" component={Content} />
          <Route exact path="/schedule" component={Schedule} />
          <Route exact path="/add" component={Add} />
          {/* <Content appState={appState} /> */}
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
