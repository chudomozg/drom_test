import React, { Component } from "react";
import { Link } from "react-router-dom";
import css from "../../styles/menu/menu.css";

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="menu header__menu">
        <Link to="/">Онлайн запись</Link>
        {" / "}
        <Link to="/schedule">Таблица записей</Link>
        {/* <Link to="/add">Add</Link> */}
      </div>
    );
  }
}
