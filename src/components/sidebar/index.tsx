import React, { useState, useRef, useEffect } from "react";
import sidebarcss from "./index.module.scss";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import avatar from "../../assets/images/avatar.png";
import Option from "./option/Option";
import Navigation from "./navigation/Navigation";
import navlist from "../../utils/navList";

type Props = {
  getWidth: (width: number) => void;
};

export default function Sidebar({ getWidth }: Props) {
  const [isShow, setIsShow] = useState(true);
  const username = sessionStorage.getItem("userName");
  const sidebarref = useRef<HTMLDivElement>(null);

  const handleIsShow = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsShow(!isShow);
    //动画结束后将sidebar宽度传给home组件，动画执行时间在css设置为了500ms
    setTimeout(() => getWidth(sidebarref.current?.clientWidth as number), 600);
  };

  useEffect(() => {
    //页面初次渲染时将宽度传给home
    getWidth(sidebarref.current?.clientWidth as number);
  }, []);

  return (
    <div
      ref={sidebarref}
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
      <div className={sidebarcss.option}>
        <Option className={!isShow ? "hide" : ""} />
      </div>
      <div className={sidebarcss.navgition}>
        <Navigation list={navlist} className={!isShow ? "hide" : ""} />
      </div>
    </div>
  );
}
