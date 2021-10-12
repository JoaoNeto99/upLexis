import React from "react";
import Button from "../../Button/Button";
import style from "./SlideShowContent.scss";

function SlideShowContent(props) {
  return (
    <div className={style.slide}>
      <img src={props.background} />
      <div className={style.slide__container}>
        <img className={style.slide__logo} src={props.logo} />
        <span className={style.slide__pipeline}></span>
        <span className={style.slide__titulo}>{props.titulo}</span>
      </div>
      <div className={style.slide__texto}>
        <p>{props.texto}</p>
      </div>
      <Button 
        valor={props.preco}
        botao="Saiba mais"
      />
    </div>
  );
}

export default SlideShowContent;
