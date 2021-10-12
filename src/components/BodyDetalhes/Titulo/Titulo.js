import React from "react";
import { Link } from "react-router-dom";
import style from "./Titulo.scss";

export default function Titulo(props) {
  return (
    <div className={style.content__titulo}>
      <Link to="/"><span className={style.titulo}>{props.titulo}</span></Link>
    </div>
  );
}