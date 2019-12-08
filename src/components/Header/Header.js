import React, { Component } from "react";
import Logo from "./Logo";
import { Title } from "./Title";
import Menu from "./Menu";
import { FORM_STATE } from "../../constants";
import "../../styles/header/header.css";
import "../../styles/header/__title/header__title.css";
import "../../styles/header/__navbar/header__navbar.css";
import "../../styles/header/__menu/header__menu.css";

export default class Header extends Component {
  getLogoFromStatus(isLoading) {
    if (isLoading) {
      return "../assets/logo_load.svg";
    }

    return "../assets/logo.svg";
  }

  render() {
    return (
      <div className="header">
        <div className="header__navbar navbar">
          <Logo imgSrc={this.getLogoFromStatus(this.props.isLoading)} />
          <Menu />
        </div>
        <Title content="Онлайн запись" />
      </div>
    );
  }
}
