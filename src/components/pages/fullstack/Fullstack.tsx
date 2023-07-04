import React, { memo } from "react";
import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";
import Headerr from "../../organisms/header/Headerr";
import Sidebar from "../../organisms/sidebar/Sidebar";
import Footer from "../../organisms/footer/Footer";


const Fullstack: React.FC= () => {
  return (
    <div>
    <Headerr logo="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png" slogan="Học Lập Trình Để Đi Làm" inputText="Tìm kiếm khóa học, bài viết, video, ..." loginBtn="Đăng nhập"/>
    <Row style={{ marginLeft: "0.5rem" }}>
      <Col lg={1} md={0} xs={0} sm={0}>
        <Sidebar />
      </Col>
      <Col lg={23} md={24} xs={24} sm={24}>
       <Outlet/>
      </Col>
    </Row>
    <Footer />
  </div>
  );
};

export default memo(Fullstack);
