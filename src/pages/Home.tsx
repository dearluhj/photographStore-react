import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Sidebar from "../components/sidebar";
import homecss from "../assets/styles/home/home.module.scss";
import Pictures from "../components/pictures/index";

export default function Home() {
  const navigateTo = useNavigate();
  const [homePaddingleft, setHomePaddingleft] = useState(0);
  const getWidth = (width: number) => {
    setHomePaddingleft(width);
  };

  return (
    <div
      className={homecss.maincontainer}
      style={{ paddingLeft: homePaddingleft }}
    >
      <Sidebar getWidth={getWidth} />
      <div className={homecss.picturecontainer}>
        <Pictures />
      </div>
    </div>
  );
}
