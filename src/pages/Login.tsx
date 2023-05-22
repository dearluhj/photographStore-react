import React, { useState } from "react";
import loginPagecss from "../assets/styles/login/login.module.scss";
import Loginbox from "../components/loginbox/index";
import { useNavigate, Navigate } from "react-router-dom";
import { Alert } from "antd";

export default function Login() {
  const navigateTo = useNavigate();
  const [incorrect, setIncorrect] = useState(false);

  const token = sessionStorage.getItem("userName");
  if (token) {
    //如果已经登录了则跳转到首页
    return <Navigate to={"/home"} />;
  }

  const handleLogin = (
    username: string,
    password: string,
    callback: () => void
  ) => {
    if (password === "123456") {
      sessionStorage.setItem("userName", username);
      navigateTo("/home");
    } else {
      setIncorrect(true);
      //清空表单密码字段
      callback();
    }
  };

  return (
    <div className={loginPagecss.loginpage}>
      {incorrect && (
        <div className={loginPagecss.alertmsg}>
          <Alert
            className={loginPagecss.Alert}
            message="Incorrect Password!"
            closable
            showIcon
            type="error"
            afterClose={() => {
              setIncorrect(false);
            }}
          />
        </div>
      )}
      <Loginbox handelLogin={handleLogin} />
    </div>
  );
}
