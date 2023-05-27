import React, { Suspense } from "react";
import "./App.scss";
import { useRoutes } from "react-router-dom";
import elements from "./router/router";
import { App } from "antd";
import AntdMessage from "./store/antdMessage";
import PageLoadding from "./components/pageLoadding";
import { storeCurrentMode } from "./store/redux/appstore";
import { useAppSelector } from "./store/redux/hooks";

function ApptoReact() {
  const element = useRoutes(elements);
  const currentMode = useAppSelector(storeCurrentMode);

  return (
    <App message={{ maxCount: 3 }}>
      {/* {全局注册antd消息提醒组件} */}
      <AntdMessage />
      <div className={currentMode ? "is-light" : "is-dark"}>
        <Suspense fallback={<PageLoadding />}>{element}</Suspense>
      </div>
    </App>
  );
}

export default ApptoReact;
