import React, { memo } from "react";
import { LandingContentProps } from "../../../constant/common";
import "./LandingContent.scss";
import "../../../constant/styles.scss";
import { Col, Row } from "antd";

const LandingContent: React.FC<LandingContentProps> = ({ landingMenu }) => {
  return (
    <div id="landingContent">
      <h1>Kiến thức đầy đủ và chi tiết nhất ✨</h1>
      <p>
        Với <strong className="hightlight">400+ bài học</strong>, bài tập và thử
        thách, đây sẽ là khóa học đầy đủ và chi tiết nhất bạn có thể tìm kiếm
        được ở trên Internet.
      </p>
      <Row>
        {landingMenu.map((menu) => (
          <Col lg={6} md={12} xs={24} sm={24}>
            <ul>
              {menu.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </Col>
        ))}
      </Row>
      <p className="landingContent__footer">
        * Ở đây chỉ bao gồm nội dung tiêu biểu. Nếu muốn, bạn có thể{" "}
        <strong className="hightlight">xem đầy đủ nội dung khóa học.</strong>
      </p>
    </div>
  );
};

export default memo(LandingContent);
