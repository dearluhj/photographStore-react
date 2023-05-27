import React, { useEffect, useState } from "react";
import { Image } from "antd";
import picturedetailcss from "./index.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import getPictureDetail from "../../utils/usePictureDetail/getPictureDetail";

export default function Picturedetail() {
  const { pid } = useParams();
  const [url, setUrl] = useState<string>();

  useEffect(() => {
    getPictureDetail(pid || "").then((val: any) => {
      setUrl(val);
    });
  }, [pid]);

  return (
    <div className={picturedetailcss.picturecontainer}>
      <Image src={`/from8081/proxy?url=${url}`} />
    </div>
  );
}
