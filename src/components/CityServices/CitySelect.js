import React, { Component } from "react";
import { VALIDSTATE, VALIDATION_TYPE } from "../../initStore";
import select_css from "../../styles/select/select.css";
import city_services__select_css from "../../styles/city-services/__select/city-services__select.css";
import city_services__select_clear_css from "../../styles/city-services/__select/_clear/city-services__select_clear.css";

export default class CitySelect extends Component {
  constructor(props) {
    super(props);
    this.changeHandle = this.changeHandle.bind(this);
    this.validHandle = this.validHandle.bind(this);
  }

  validHandle(e) {
    this.props.validation(VALIDATION_TYPE.city, e.target.value);
  }

  changeHandle(e) {
    this.props.selectHandle(e.target.value);
    this.props.dateTimeHandle(e.target.value);
  }

  render() {
    let options = this.props.options;
    //Собираем <options></options>
    options = options.map(item => {
      return (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      );
    });
    const isClear =
      this.props.validState == VALIDSTATE.clear
        ? "city-services__select_clear"
        : "";
    return (
      <div>
        <select
          className={"select city-services__select " + isClear}
          value={this.props.city.id}
          onChange={this.changeHandle}
          onBlur={this.validHandle}
        >
          {options}
        </select>
      </div>
    );
  }
}
