import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Sidebar from "../components/sidebar";
import homecss from "../assets/styles/home/home.module.scss";

export default function Home() {
  const navigateTo = useNavigate();

  return (
    <div className={homecss.maincontainer}>
      <Sidebar/>
    </div>
  );
}
