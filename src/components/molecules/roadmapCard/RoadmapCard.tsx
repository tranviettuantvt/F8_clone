import React, { memo } from "react";
import { Col } from "antd";
import "./RoadmapCard.scss";
import Buttonn from "../../atoms/button/Buttonn";

interface RoadmapCardProps {
  title: string;
  content: string;
  image: string;
  button?: React.ReactNode;
}

const RoadmapCard: React.FC<RoadmapCardProps> = ({
  title,
  content,
  image,
  button,
}) => {
  return (
      <div className="roadmap__content__card">
        <div>
          <h2>{title}</h2>
          <p>{content}</p>
          <a href="">
            <Buttonn size="large">Xem chi tiết</Buttonn>
          </a>
        </div>
        <div>
          <a href="">
            <img src={image} alt="" />
          </a>
        </div>
      </div>
  );
};

export default memo(RoadmapCard);
