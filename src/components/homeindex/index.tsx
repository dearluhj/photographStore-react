import React, { useEffect } from "react";
import homeindexcss from "./index.module.scss";
import background from "../../assets/images/homebackground.png";
import { useAppDispatch } from "../../store/redux/hooks";
import { setBackPictureurl } from "../../store/redux/appstore";

export default function Homeindex() {
  const dispatch = useAppDispatch();

  //设置背景图
  useEffect(() => {
    dispatch(setBackPictureurl(background));
  }, []);

  return (
    <div className={homeindexcss.maincontainer}>
      <img src={background} alt="" />
    </div>
  );
}
