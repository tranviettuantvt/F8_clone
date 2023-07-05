import React, { memo } from "react";
import { Col } from "antd";
import {
  CaretRightOutlined,
  EyeOutlined,
  LikeOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import "./VideoCard.scss";
import Buttonn from "../../atoms/button/Buttonn";
import { VideoCardProps } from "../../../constant/common";


const VideoCard: React.FC<VideoCardProps> = ({
  id,
  image,
  view,
  title,
  like,
  mess,
}) => {
  return (
    <Col
      className="gutter-row"
      lg={6}
      md={12}
      xs={12}
      sm={12}
      style={{ marginTop: "2.5rem" }}
    >
      <div className="videos__list__items">
        <a href="">
          <div className="videos__list__items__img">
            <img src={image} alt="" />
            <div className="videos__list__items__btn">
              <Buttonn shape="round">Xem Video</Buttonn>
            </div>
            <div className="videos__list__items_icon">
              <div>
                <CaretRightOutlined />
              </div>
              <button>11:16</button>
            </div>
          </div>

          <h3>{title}</h3>

          <div className="videos__list__items__footer">
            <span>
              <EyeOutlined /> {view}
            </span>
            <span>
              <LikeOutlined /> {like}
            </span>
            <span>
              <MessageOutlined /> {mess}
            </span>
          </div>
        </a>
      </div>
    </Col>
  );
};

export default memo(VideoCard);
