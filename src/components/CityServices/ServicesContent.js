import React, { Component } from "react";
import PhoneList from "./PhoneList";

export default class SityServices extends Component {
  constructor(props) {
    super(props);
  }

  costMask(cost) {
    const re = /(\d)(?=(\d\d\d)+([^\d]|$))/g;
    return String(cost).replace(re, "$1 ") + " ₽";
  }

  render() {
    const address = this.props.city.address;
    const phones = this.props.city.phones;
    const cost = this.props.city.price;
    return (
      <div>
        <div className="service-address">{address}</div>
        <PhoneList list={phones} />
        <div className="service-cost">{this.costMask(cost)}</div>
      </div>
    );
  }
}
