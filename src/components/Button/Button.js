import React from "react";
import style from "./Button.scss";


export default function Button(props) {
  return (
    <div className={`${style.slide_preco} ${props.botton__style}`}>
      <p className={style.preco__p}>{props.valor}</p>
       <button className={style.preco__button}>{props.botao}</button>
    </div>
  );
}