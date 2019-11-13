import React, { Component } from "react";
import "../styles/App.css";
import Header from "./Header/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { appState } from "../actions/appState";

class App extends Component {
  render() {
    const { store, changeAppState, appState } = this.props;
    // changeAppState("LOADING");
    return (
      <div className="app-wrapper">
        <div className="app">
          <Header appState={appState} />
          <Content />
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

const mapDispatchToProps = dispatch => {
  return {
    changeAppState: bindActionCreators(appState, dispatch)
  };
};

//Оборачиваем App и отдаем
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
