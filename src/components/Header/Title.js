import React, { Component } from "react";
import css from "../../styles/title/title.css";

export default class Title extends Component {
  render() {
    return <h2 className="title header__title">{this.props.content}</h2>;
  }
}
