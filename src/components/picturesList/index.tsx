import React, { useEffect } from "react";
import picturescss from "./index.module.scss";
import usePictures from "../../utils/usePictures/usePictures";
import { useNavigate, useParams } from "react-router-dom";
import { SyncOutlined } from "@ant-design/icons";
import { apiProxyhost } from "../../utils/config";

export default function Pictures() {
  const { gid } = useParams();
  const navigateTo = useNavigate();
  const { loading, pictures, setPage, setGid, hasNot, loadingNextPage } =
    usePictures(gid);

  const handleGetPictures = () => {
    setPage(prevpage => prevpage + 1);
  };
  useEffect(() => {
    setGid(gid || "0");
    setPage(1);
  }, [gid]);

  return (
    <div className={picturescss.maincontainer}>
      <div className={picturescss.picturecontainer}>
        {loading ? (
          <div className={picturescss.loadding}>
            <SyncOutlined spin className={picturescss.loaddingicon} />
          </div>
        ) : (
          pictures.map((item: any) => (
            <div
              className={picturescss.pictureItem}
              key={item.pid}
              onClick={() => navigateTo(`/home/detail/${item.pid}`)}
            >
              <img src={`${apiProxyhost}/proxy?url=${item.url}`} alt="" />
            </div>
          ))
        )}
      </div>
      {loading || (
        <div className={picturescss.getMore}>
          {loadingNextPage ? (
            <div className={picturescss.loadding}>
              <SyncOutlined spin className={picturescss.nextpageloaddingicon} />
            </div>
          ) : hasNot ? (
            <div className={picturescss.text}>Has Not</div>
          ) : (
            <div
              className={`${picturescss.text} ${picturescss.hasmore}`}
              onClick={handleGetPictures}
            >
              GET More Pictures
            </div>
          )}
        </div>
      )}
    </div>
  );
}
