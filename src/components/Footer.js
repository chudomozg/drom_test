import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        Нажимая "Записаться", я выражаю свое согласие с обработкой моих
        персональных данных в соответствии с принятой{" "}
        <a href="#" className="link">
          политикой конфеденциальности
        </a>{" "}
        и принимаю{" "}
        <a href="#" className="link">
          пользовательское соглашение
        </a>
      </div>
    );
  }
}
