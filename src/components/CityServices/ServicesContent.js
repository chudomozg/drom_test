import React, { Component } from "react";
import PhoneList from "./PhoneList";
import services_content_css from "../../styles/services-content/services-content.css";
import service_content__cost_css from "../../styles/services-content/__cost/services-content__cost.css";
import service_content__phones_css from "../../styles/services-content/__phones/services-content__phones.css";
import city_services__services_content_css from "../../styles/city-services/__services-content/city-services__services-content.css";

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
