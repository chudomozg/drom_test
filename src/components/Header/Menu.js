import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="menu">
        <Link to="/">Онлайн запись</Link>
        {" / "}
        <Link to="/schedule">Таблица записей</Link>
        {/* <Link to="/add">Add</Link> */}
      </div>
    );
  }
}
