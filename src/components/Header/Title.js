import React from "react";
import "../../styles/title/title.css";

export const Title = props => {
  return <h2 className="title header__title">{props.content}</h2>;
};
