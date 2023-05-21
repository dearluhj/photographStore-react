import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { useRoutes } from "react-router-dom";
import elements from "./router/router";

function App() {
  const element = useRoutes(elements);
  return <Fragment>{element}</Fragment>;
}

export default App;
