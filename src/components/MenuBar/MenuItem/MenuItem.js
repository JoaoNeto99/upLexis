import React from "react";
import style from "./MenuItem.scss";

function MenuItem(props) {
  return (
    <button
      onClick={() => props.onSelected(props.id)}
      className={
        props.select === true
          ? `${style.menuBar__box} ${style.selected}`
          : style.menuBar__box
      }>
      <props.icon className={style.box__icon} />
      <span
        className={
          props.select === true
            ? style.selected
            : ''
        }
      >{props.text}</span>
    </button>
  );
}

export default MenuItem;