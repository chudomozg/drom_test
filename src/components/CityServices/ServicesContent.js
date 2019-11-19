import React, { Component } from "react";
import PhoneList from "./PhoneList";
import "../../styles/services-content/services-content.css";
import "../../styles/services-content/__cost/services-content__cost.css";
import "../../styles/services-content/__phones/services-content__phones.css";
import "../../styles/city-services/__services-content/city-services__services-content.css";

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
      <div className="city-services__services-content services-content">
        <div className="services-content__address">{address}</div>
        <PhoneList list={phones} />
        <div className="services-content__cost">
          {"Стоимость услуги " + this.costMask(cost)}
        </div>
      </div>
    );
  }
}
