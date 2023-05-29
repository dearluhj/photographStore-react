import React, { useEffect, useState } from "react";
import picturescss from "./index.module.scss";
import usePictures from "../../utils/usePictures/usePictures";
import { useNavigate, useParams } from "react-router-dom";
import { SyncOutlined } from "@ant-design/icons";
import { apihost } from "../../utils/config";
import Lazyloadimg from "../../components/lazyloadimg";
import throttle from "lodash/throttle";
import { setBackPictureurl } from "../../store/redux/appstore";
import { useAppDispatch } from "../../store/redux/hooks";
import { forIn } from "lodash";

export default function Pictures() {
  const dispatch = useAppDispatch();
  const { gid } = useParams();
  const navigateTo = useNavigate();
  const { loading, pictures, setPage, setGid, hasNot, loadingNextPage } =
    usePictures(gid);

  const [activeImg, setActiveImg] = useState(0);

  let picturesItem: NodeListOf<HTMLDivElement>;

  //监听窗口滚动，同时实现节流
  const getCurrentvisualItem = throttle(e => {
    let visibleHeight: number = Math.round(window.innerHeight / 2);

    Object.values(picturesItem).forEach((item, index) => {
      let itemvisibleHeight: number = item.getBoundingClientRect().top;

      if (visibleHeight > itemvisibleHeight) {
        setActiveImg(index);
      }
    });
  }, 500);

  const handleGetPictures = () => {
    setPage(prevpage => prevpage + 1);
  };

  useEffect(() => {
    //设置背景图片
    dispatch(
      setBackPictureurl(`${apihost}/proxy?url=${pictures[activeImg]?.url}`)
    );
  }, [activeImg, pictures]);

  useEffect(() => {
    picturesItem = document.querySelectorAll("#pictureslistItem");
    window.addEventListener("scroll", getCurrentvisualItem);

    return () => window.removeEventListener("scroll", getCurrentvisualItem);
  }, [pictures]);

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
          pictures.map((item: any, index: number) => (
            <div
              className={`${picturescss.pictureItem} ${
                index === activeImg ? picturescss.active : ""
              }`}
              id="pictureslistItem"
              key={item.pid}
              onClick={() => navigateTo(`/home/detail/${item.pid}`)}
            >
              <Lazyloadimg src={`${apihost}/proxy?url=${item.url}`} />
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
