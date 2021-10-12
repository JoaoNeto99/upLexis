import React from "react";
import SlideShow from "../SlideShow/SlideShow";
import style from "./Header.scss";

function Header(props) {
  return (
    <header className={style.header} style={props.style}>
      <div>
        <SlideShow
          data={props.data}
        />
      </div>
    </header>

  );
}

export default Header;