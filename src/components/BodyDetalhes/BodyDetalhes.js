import React from "react";
import Titulo from "./Titulo/Titulo.js";
import Slide from "./Slide/Slide.js";
import Texto from "./Texto/Texto.js";
import style from "./BodyDetalhes.scss";

export default function BodyDetalhes(props) {
  return (
    <section className={style.container}>
      
      <div className={style.container__content}>
        <Titulo
          titulo={props.titulo}
        />
      </div>

      <div className={style.container__slide}>
        <Slide />
       </div>

      <div className={style.container__content}>
        <Texto 
          texto1={props.texto1}
          texto2={props.texto2}
          preco={props.preco}
        />
      </div>

    </section>
  );
}