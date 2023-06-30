import React, { memo } from "react";
import Headerr from "../../components/header/Headerr";
import { Col, Row } from "antd";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";


const Fullstack: React.FC= () => {
  return (
    <div>
    <Headerr />
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
