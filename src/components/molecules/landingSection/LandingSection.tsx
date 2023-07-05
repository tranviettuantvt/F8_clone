import React, { memo } from "react";
import "./LandingSection.scss";
import Buttonn from "../../atoms/button/Buttonn";
import { RightOutlined } from "@ant-design/icons";
import { LandingSectionProps } from "../../../constant/common";
import { Col } from "antd";

const LandingSection: React.FC<LandingSectionProps> = ({
  title,
  content,
  btnText,
}) => {
  return (
    <Col lg={12}>
      <div id="landingSection">
        <h1>{title}</h1>
        <p>{content}</p>
        <Buttonn size="large" className="landing_btn">
          {btnText}
          <RightOutlined />
        </Buttonn>
      </div>
    </Col>
  );
};

export default memo(LandingSection);
