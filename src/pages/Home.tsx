import { useState, useCallback } from "react";
import { Outlet, Link } from "react-router-dom";
import Sidebar from "../components/sidebar";
import homecss from "../assets/styles/home/home.module.scss";
import {useAppSelector} from "../store/redux/hooks";
import { storeBackPicture } from "../store/redux/appstore";

export default function Home() {
  const [homePaddingleft, setHomePaddingleft] = useState(0);
  
  const backgroundUrl=useAppSelector(storeBackPicture)

  const getWidth = useCallback((width: number) => {
    setHomePaddingleft(width);
  }, []);

  return (
    <div
      className={homecss.maincontainer}
      style={{ paddingLeft: homePaddingleft}}
    >
      <Sidebar getWidth={getWidth} />
      <div className={homecss.picturecontainer}>
        <div>
          <Link to={"/home"} className={homecss.title}>
            Picture Store
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
