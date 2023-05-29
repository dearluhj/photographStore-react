import React, { useEffect, useState } from "react";
import { Image } from "antd";
import picturedetailcss from "./index.module.scss";
import { useParams } from "react-router-dom";
import getPictureDetail from "../../utils/usePictureDetail/getPictureDetail";
import { apiProxyhost } from "../../utils/config";
import { setBackPictureurl } from "../../store/redux/appstore";
import { useAppDispatch } from "../../store/redux/hooks";

export default function Picturedetail() {
  const { pid } = useParams();
  const dispatch = useAppDispatch();
  const [url, setUrl] = useState<string>();

  useEffect(() => {
    getPictureDetail(pid || "").then((val: any) => {
      setUrl(val);
    });
  }, [pid]);

  useEffect(() => {
    //设置背景图
    dispatch(setBackPictureurl(`${apiProxyhost}/proxy?url=${url}`));
  }, [url]);

  return (
    <div className={picturedetailcss.picturecontainer}>
      <Image src={`${apiProxyhost}/proxy?url=${url}`} />
    </div>
  );
}
