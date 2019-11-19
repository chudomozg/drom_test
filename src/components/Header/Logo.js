import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/header/__logo/header__logo.css";

export default class Logo extends Component {
  render() {
    return (
      <Link to="/">
        <img className="header__logo" src={this.props.imgSrc} />
      </Link>
    );
  }
}
