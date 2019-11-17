import React, { Component } from "react";
import "../../styles/header/__logo/header__logo.css";

export default class Logo extends Component {
  render() {
    return <img className="header__logo" src={this.props.imgSrc} />;
  }
}
