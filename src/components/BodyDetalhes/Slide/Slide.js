import React, { useRef } from "react";
import { Carousel } from "antd";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import style from "./Slide.scss";

import img1 from "../../../img/grafico.png";

export default function Slide() {
  const slider = useRef();
  return (
    <>
      <button
        className={`${style.slide__prev} ${style.arrows}`}
        onClick={() => slider.current.next()}
      >
        {<AiOutlineArrowLeft className={style.button__svg} />}
      </button>

      <div className={style.slide__atual}>
        <Carousel
          dots={false}
          ref={ref => { slider.current = ref; }}
        >
          <div className={style.slide__item}>
            <img src={img1} />
          </div>
          <div className={style.slide__item}>
            <img src={img1} />
          </div>
          <div className={style.slide__item}>
            <img src={img1} />
          </div>

        </Carousel>
      </div>

      <button
        className={`${style.slide__prev} ${style.arrows}`}
        onClick={() => slider.current.prev()}
      >
        {<AiOutlineArrowRight className={style.button__svg} />}
      </button>
    </>
  );
}