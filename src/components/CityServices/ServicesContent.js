import React, { Component } from "react";
import PhoneList from "./PhoneList";

export default class SityServices extends Component {
  render() {
    const address = this.props.city.address;
    const phones = this.props.city.phones;
    const cost = this.props.city.price;
    return (
      <div>
        <div className="service-address">{address}</div>
        <PhoneList list={phones} />
        <div className="service-cost">{cost}</div>
      </div>
    );
  }
}
