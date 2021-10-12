import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.scss";

function Card(props) {
  return (
    <div className={style.bodyContainer__card}>
      <div className={style.card__content}>
        <props.icon className={style.card__icon} />
        <span>{props.titulo}</span>
        <p>{props.texto}.</p>
      </div>
      <div className={style.card__botton}>
        <span>R$ {props.preco}</span>
        <Link to={props.url}>Saiba mais</Link>
      </div>
    </div>
  );
}

export default Card;