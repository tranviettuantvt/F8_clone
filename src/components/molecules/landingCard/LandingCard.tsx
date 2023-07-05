import { Col } from "antd";
import React, { memo } from "react";
import LandingSVG from "../../../assets/landingCard_svg.svg";

interface LandingCardProps {
  content: string;
  avatar: string;
  user: string;
  course: string;
}
const LandingCard: React.FC<LandingCardProps> = ({
  content,
  avatar,
  user,
  course,
}) => {
  return (
    <Col lg={12}>
      <div id="landingCard">
        <div>{LandingSVG}</div>
        <p>{content}</p>
        <div className="landingCard__user">
          <img src={avatar} alt="" />
          <div>
            <h4>{user}</h4>
            <p>{course}</p>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default memo(LandingCard);
