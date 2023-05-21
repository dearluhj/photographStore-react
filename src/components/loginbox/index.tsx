import React from "react";
import loginmodalcss from "./index.module.scss";
import {
  UserOutlined,
  EditOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone
} from "@ant-design/icons";
import { Input,Button } from "antd";

export default function index() {
  return (
    <div className={loginmodalcss.logincontainer}>
      <div className={loginmodalcss.title}>
        <p>Sign In Store</p>
      </div>
      <div className={loginmodalcss.signinput}>
        <Input
          className={loginmodalcss.username}
          prefix={<UserOutlined style={{ color: "rgb(0, 195, 255)" }} />}
        />
        <br />
        <br />
        <Input.Password
          prefix={<EditOutlined style={{ color: "rgb(0, 195, 255)" }} />}
          iconRender={v => (v ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
        <br />
        <br />
        <Button className={loginmodalcss.enterbtn} type="primary">Enter</Button>
      </div>
    </div>
  );
}
