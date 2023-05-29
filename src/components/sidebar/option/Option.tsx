import React, { useState, useEffect } from "react";
import optioncss from "./option.module.scss";
import {
  ExportOutlined,
  BulbOutlined,
  ExclamationCircleOutlined
} from "@ant-design/icons";
import { Switch } from "antd";
import { modal } from "../../../store/antdMessage";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/redux/hooks";
import { setMode, setUsername } from "../../../store/redux/appstore";

type Props = {
  className?: string;
};
export default function Option({ className }: Props) {
  const [darkSwitch, setDarkSwitch] = useState(false);
  const dispatch = useAppDispatch();
  const navigateTo = useNavigate();
  const handleLogout = () => {
    modal.confirm({
      title: "You will about to LogOut",
      content: "退出登录后将跳转到登录页面",
      okText: "Yes",
      cancelText: "cancel",
      icon: <ExclamationCircleOutlined />,
      onOk() {
        sessionStorage.clear();
        dispatch(setUsername(null));
        navigateTo("/");
      }
    });
  };

  useEffect(() => {
    dispatch(setMode(!darkSwitch));
  }, [darkSwitch]);

  return (
    <div className={`${optioncss.nav} ${className && optioncss[className]}`}>
      <div className={optioncss.shadow}>
        <Switch
          onClick={() => {
            setDarkSwitch(!darkSwitch);
          }}
          className={`${optioncss.switch} ${darkSwitch && optioncss.dark}`}
          checkedChildren={<BulbOutlined />}
          unCheckedChildren={<BulbOutlined />}
        ></Switch>
        <p className={optioncss.mode}>{darkSwitch ? "Dark" : "Light"}</p>
      </div>
      <div className={optioncss.logout} onClick={handleLogout}>
        <p className={optioncss.text}>LogOut</p>
        <ExportOutlined className={optioncss.logouticon} />
      </div>
    </div>
  );
}
