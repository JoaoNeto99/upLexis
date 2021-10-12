import React from "react";
import style from "./Texto.scss";
import Button from "../../Button/Button.js";
import "../../Button/Button.scss";

export default function Texto(props) {
  return (
    <>
      <p className={style.texto}>{props.texto1}</p>
      <p className={style.texto}>{props.texto2}</p>
        <Button className={style.bottom__}
          valor={props.preco}
          botao="Habilitar"
          botton__style={style.mod}
        />
    </>
  );
}