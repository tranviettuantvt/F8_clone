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
  content_ps,
  btnText_ps,
}) => {
  return (
      <div id="landingSection">
        <h1>{title}</h1>
        <div>
          <p>{content}</p>
          {content_ps && <p style={{ marginTop: "1rem" }}>{content_ps}</p>}
        </div>
        <div className="section__btn" style={{display:"flex", gap:"1rem"}}>
          <Buttonn size="large" className="landing_btn">
            {btnText}
            <RightOutlined />
          </Buttonn>
          {btnText_ps && (
            <Buttonn size="large" className="landing_btn transparent">
              {btnText_ps}
              <RightOutlined />
            </Buttonn>
          )}
        </div>
      </div>
  );
};

export default memo(LandingSection);
