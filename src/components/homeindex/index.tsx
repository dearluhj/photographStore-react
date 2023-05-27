import React from "react";
import homeindexcss from "./index.module.scss";
import background from "../../assets/images/homebackground.png";

export default function Homeindex() {
  return (
    <div className={homeindexcss.maincontainer}>
      <img src={background} alt="" />
    </div>
  );
}
