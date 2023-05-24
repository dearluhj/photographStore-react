import React from "react";
import nav from "./navigation.module.scss";

type list = { id: number; name: string; url: string };
type Props = {
  list: list[];
  className?: string;
};

export default function Navigation({ list, className }: Props) {
  return (
    <div className={`${nav.navigation} ${className && nav[className]}`}>
      <ul className={nav.navList}>
        {list.map(item => (
          <li
            className={`${nav.navItem} ${item.id === 2 && nav.active}`}
            key={item.id}
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
