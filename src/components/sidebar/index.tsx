import React, { useState } from "react";
import sidebarcss from "./index.module.scss";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import avatar from "../../assets/images/avatar.png";

export default function Sidebar() {
  const [isShow, setIsShow] = useState(true);
  const username = sessionStorage.getItem("userName");
  function handleIsShow(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    setIsShow(!isShow);
  }

  return (
    <div
      className={`${sidebarcss.sidebarContainer} ${!isShow && sidebarcss.hide}`}
    >
      <div className={sidebarcss.topnav}>
        <p className={sidebarcss.title}>PictureStore</p>
        <div onClick={handleIsShow}>
          {isShow ? (
            <MenuFoldOutlined className={sidebarcss.menubtn} />
          ) : (
            <MenuUnfoldOutlined className={sidebarcss.menubtn} />
          )}
        </div>
      </div>
      <div className={sidebarcss.profiles}>
        <div className={sidebarcss.avatar}>
          <img src={avatar} alt="" />
        </div>
        <p className={sidebarcss.username}>{username}</p>
      </div>
    </div>
  );
}
