import React, { Fragment, useRef, useEffect, memo } from "react";
import { apihost } from "../../utils/config";
import loadding from "../../assets/images/loadding.jpg";

type Props = {
  src: string;
};

export default memo(function Lazyloadimg({
  src
}: Props) {
  const imgref = useRef<HTMLImageElement>(null);


  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 目标元素出现在 root 可视区，返回 true
        const $target: any = entry.target;
        const src = $target.dataset.src;

        if (src) {
          $target.setAttribute("src", src); // 加载图片
          $target.dataset.src = "";
        }
        observer.unobserve($target); // 解除观察
      }
    });
  });

  useEffect(() => {
    observer.observe(imgref.current as HTMLImageElement);
  }, []);

  return (
    <Fragment>
      <img ref={imgref} src={loadding} data-src={src} alt="" />
    </Fragment>
  );
});
