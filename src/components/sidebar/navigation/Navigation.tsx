import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import nav from "./navigation.module.scss";

type list = { gid: number; name: string };
type Props = {
  list: list[];
  className?: string;
};

export default function Navigation({ list, className }: Props) {
  const { gid } = useParams();
  const navigateTo = useNavigate();

  const handlePushroutes = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    navigateTo(e.currentTarget.dataset.url || "");
  };

  return (
    <div className={`${nav.navigation} ${className && nav[className]}`}>
      <ul className={nav.navList}>
        {list.map(item => (
          <li
            className={`${nav.navItem} ${
              item.gid === parseInt(gid || "") && nav.active
            }`}
            key={item.gid}
            onClick={handlePushroutes}
            data-url={"styles/" + item.gid}
            data-gid={item.gid}
          >
            <div className={nav.navItem1}>
              <div className={nav.navItem2}>
                <div className={nav.text}>{item.name}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
