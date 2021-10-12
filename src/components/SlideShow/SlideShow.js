import React from "react";
import { Carousel } from "antd";
import SlideShowContent from "./SlideShowContent/SlideShowContent";

function SlideShow(props) {
  return (
    <Carousel autoplay dots={false}>
     {props.data.map(slide => (
       <SlideShowContent 
       key={slide.id}
        background={slide.background}
        logo={slide.logo}
        titulo={slide.titulo}
        texto={slide.texto}
        preco={slide.preco}
       />
     ))}
    </Carousel>
  );
}

export default SlideShow;