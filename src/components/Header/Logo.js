import React, { Component } from "react";
import css from "../../styles/logo.css";

export default class Logo extends Component {
  render() {
    return <img className="logo" src={this.props.imgSrc} />;
  }
}
