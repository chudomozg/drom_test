import React, { Component } from "react";
import { store, DEFAULT_CITY } from "../../initStore";

export default class CitySelect extends Component {
  constructor(props) {
    super(props);
    this.changeHandle = this.changeHandle.bind(this);
  }

  changeHandle(e) {
    console.log(
      "changeHandle target.value: ",
      e.target.value,
      "props.selectHandle: ",
      this.props.selectHandle
    );
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
    return (
      <div>
        <select value={this.props.city.id} onChange={this.changeHandle}>
          {options}
        </select>
      </div>
    );
  }
}
