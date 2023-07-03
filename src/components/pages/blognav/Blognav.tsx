import React, { memo } from "react";
import { Row, Col } from "antd";
import "./Blognav.scss";
import Blognav_Item from "../../molecules/blognav_item/Blognav_Item";
import Mypagination from "../../atoms/pagination/Mypagination";

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
      <Row className="blognav__content">
        <Col lg={16} md={24} xs={24} sm={24}>
          <Blognav_Item />
          <Blognav_Item />
          <Blognav_Item />
          <Blognav_Item />
          <Blognav_Item />
          <Blognav_Item />
          <Mypagination currentPage={3} totalPages={50}/>
        </Col>
        <Col className="blog__nav__tags" lg={8} md={24} xs={24} sm={24}>
          <h3>CÁC CHỦ ĐỀ ĐƯỢC ĐỀ XUẤT</h3>

          <div className="blog__nav__tags__list">
            <button>Front-end / Mobile App</button>
            <button>Back-end / Devops</button>
            <button>Ux Ui / Design</button>
            <button>ReactJS</button>
            <button>Others</button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default memo(Blognav);
