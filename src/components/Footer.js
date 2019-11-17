import React, { Component } from "react";
import footer_css from "../styles/footer/footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
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
