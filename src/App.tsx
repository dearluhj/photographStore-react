import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { useRoutes } from "react-router-dom";
import elements from "./router/router";
import { App } from "antd";
import AntdMessage from "./store/antdMessage";

function ApptoReact() {
  const element = useRoutes(elements);

  return (
    <App message={{ maxCount: 3 }}>
      {/* {全局注册antd消息提醒组件} */}
      <AntdMessage />
      <div className="is-light">{element}</div>
    </App>
  );
}

export default ApptoReact;
