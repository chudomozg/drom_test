import React, { Component } from "react";

export default class PhoneList extends Component {
  constructor(props) {
    super(props);
  }

  phoneMask(phone) {
    let phoneArr = [];
    phoneArr.push(
      "+7 (",
      phone.slice(1, 4),
      ") ",
      phone.slice(4, 7),
      "-",
      phone.slice(7, 9),
      "-",
      phone.slice(9, 11)
    );
    return phoneArr.join("");
  }

  render() {
    let list = this.props.list;
    //делаем маску для телефона
    list = list.map(item => {
      //если телефон из 11 символов и начинается с 7 - работаем,
      //иначе просто выведем, что есть
      if (item.length == 11 && item.startsWith("7")) {
        return this.phoneMask(item);
      }
      return item;
    });

    return <div className="services-content__phones">{list.join(", ")}</div>;
  }
}
