import React, { memo } from "react";
import "./LandingReason.scss";
import "../../../constant/styles.scss";
import { Col, Row } from "antd";
import {
  AlertOutlined,
  EditOutlined,
  RiseOutlined,
  UserOutlined,
} from "@ant-design/icons";

const landingReason = [
  {
    icon: <EditOutlined />,
    title: "Theo lộ trình bài bản",
    content:
      " Kiến thức được sắp xếp từ cơ bản tới nâng cao, phù hợp cho dù bạn là người mới bắt đầu. Sơn Đặng có trên 8 năm kinh nghiệm thực tế, những kiến thức anh chia sẻ đều sẽ giúp ích khi bạn đi làm tại doanh nghiệp.",
  },
  {
    icon: <AlertOutlined />,
    title: "Thực hành 8 dự án",
    content:
      " Kiến thức được sắp xếp từ cơ bản tới nâng cao, phù hợp cho dù bạn là người mới bắt đầu. Sơn Đặng có trên 8 năm kinh nghiệm thực tế, những kiến thức anh chia sẻ đều sẽ giúp ích khi bạn đi làm tại doanh nghiệp.",
  },
  {
    icon: <RiseOutlined />,
    title: "Học trên nền tảng hàng đầu",
    content:
      " Kiến thức được sắp xếp từ cơ bản tới nâng cao, phù hợp cho dù bạn là người mới bắt đầu. Sơn Đặng có trên 8 năm kinh nghiệm thực tế, những kiến thức anh chia sẻ đều sẽ giúp ích khi bạn đi làm tại doanh nghiệp.",
  },
  {
    icon: <UserOutlined />,
    title: "Người thầy tâm huyết",
    content:
      " Kiến thức được sắp xếp từ cơ bản tới nâng cao, phù hợp cho dù bạn là người mới bắt đầu. Sơn Đặng có trên 8 năm kinh nghiệm thực tế, những kiến thức anh chia sẻ đều sẽ giúp ích khi bạn đi làm tại doanh nghiệp.",
  },
];
const LandingReason: React.FC = () => {
  // <UserOutlined />
  // <AlertOutlined />
  return (
    <div id="landingReason">
      <div className="landing__container">
        <h1>Tại sao bạn nên sở hữu khóa học này?</h1>
        <p>Cách khóa học này giúp bạn thành thạo HTML CSS? </p>
        <Row style={{ marginTop: "1rem" }}  justify={"space-between"}>
          {landingReason.map((res) => (
            <Col lg={11} className="landingReason__item">
                <div>{res.icon}</div>
                <h3>{res.title}</h3>
                <p style={{ textAlign: "left" }}>{res.content}</p>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
export default memo(LandingReason);
