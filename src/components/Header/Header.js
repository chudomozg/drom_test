import React, { Component } from "react";
import Logo from "./Logo";
import Title from "./Title";
import Menu from "./Menu";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  getLogoFromStatus(state) {
    if (state == "LOADING") {
      return "../assets/logo_load.svg";
    }

    return "../assets/logo.svg";
  }

  render() {
    return (
      <div className="header">
        <Logo imgSrc={this.getLogoFromStatus(this.props.appState)} />
        <Menu />
        <Title content="Онлайн Запись" />
      </div>
    );
  }
}
