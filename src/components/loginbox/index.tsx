import React, { useState } from "react";
import loginmodalcss from "./index.module.scss";
import {
  UserOutlined,
  EditOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone
} from "@ant-design/icons";
import { Input, Button, Tooltip } from "antd";

type Props = {
  handelLogin: (
    username: string,
    password: string,
    callback: () => void
  ) => void;
};
export default function Loginbox({ handelLogin }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [tooltipOpen, setTooltipOpen] = useState({ un: false, pw: false });

  const setUsernameHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const setPasswordHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const submitcallback = (
    e: React.MouseEvent<HTMLAnchorElement & HTMLButtonElement>
  ) => {
    setTooltipOpen({ un: username === "", pw: password === "" });
    if (username && password) {
      handelLogin(username, password, () => {
        //清空表单的回调
        setPassword("");
      });
    }
  };

  return (
    <div className={loginmodalcss.logincontainer}>
      <div className={loginmodalcss.title}>
        <p>Sign In Store</p>
      </div>
      <div className={loginmodalcss.signinput}>
        <p>Username:</p>
        <Tooltip
          title="Please fill in"
          placement="bottomRight"
          overlayStyle={{ fontFamily: "mycustomfont" }}
          color="#61dafb"
          open={tooltipOpen.un}
        >
          <Input
            className={loginmodalcss.username}
            prefix={<UserOutlined style={{ color: "rgb(0, 195, 255)" }} />}
            placeholder="enter your username"
            size="large"
            value={username}
            onChange={setUsernameHandle}
          />
        </Tooltip>
        <br />
        <br />
        <p>Password:</p>
        <Tooltip
          title="Please fill in"
          placement="bottomRight"
          overlayStyle={{ fontFamily: "mycustomfont" }}
          color="#61dafb"
          open={tooltipOpen.pw}
        >
          <Input.Password
            className={loginmodalcss.password}
            prefix={<EditOutlined style={{ color: "rgb(0, 195, 255)" }} />}
            iconRender={v => (v ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            placeholder="enter your password"
            size="large"
            value={password}
            onChange={setPasswordHandle}
          />
        </Tooltip>
        <br />
        <br />
        <Button
          className={loginmodalcss.enterbtn}
          type="primary"
          onClick={submitcallback}
        >
          Enter
        </Button>
      </div>
    </div>
  );
}
