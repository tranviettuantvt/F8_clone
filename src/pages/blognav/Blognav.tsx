import React, { memo } from "react";
import Blognav_Item from "../../components/blognav_item/Blognav_Item";
import { Pagination } from "antd";
import './Blognav.scss'
import Mypagination from "../../components/pagination/Mypagination";

const Blognav: React.FC = () => {
  return (
    <div id="blognav" style={{ margin: "95px 2rem 0 3.8rem" }}>
      <div className="blognav__intro" style={{ marginBottom: "2.5rem" }}>
        <h1 style={{ marginBottom: "1rem" }}>Bài viết nổi bật</h1>
        <p>
          Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online
          và các kỹ thuật lập trình web.
        </p>
      </div>
      <div className="a">
        <Blognav_Item />
        <Blognav_Item />
        <Blognav_Item />
        <Blognav_Item />
        <Blognav_Item />
        <Blognav_Item />
        <Mypagination/>
      </div>
    </div>
  );
};

export default memo(Blognav);
