import React, { Component } from "react";

export default class PhoneList extends Component {
  constructor(props) {
    super(props);
  }

  phoneMask(phone) {
    let phoneArr = [];
    phoneArr.push(
      "+7 (",
      phone.substr(1, 3),
      ") ",
      phone.substr(4, 3),
      "-",
      phone.substr(7, 2),
      "-",
      phone.substr(9, 2)
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

    return <div className="service-phones">{list.join(", ")}</div>;
  }
}
