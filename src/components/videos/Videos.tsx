import React, { memo } from "react";
import {
  RightOutlined,
  CaretRightOutlined,
  EyeOutlined,
  LikeOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Col, Row, Button } from "antd";
import Videoss from "../../data/videos.json";
import "./Videos.scss";

const Videos: React.FC = () => {
  return (
    <div id="videos" >
      <div className="videos__title">
        <a href="">Video nổi bật</a>
        <a href="">
          Xem tất cả <RightOutlined />
        </a>
      </div>
      
      <div className="videos__list">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {Videoss.map((video) => (
            <Col
              className="gutter-row"
              span={6}
              style={{ marginTop: "2.5rem" }}
            >
              <div className="videos__list__items">
                <a href="">

                  <div className="videos__list__items__img">
                    <img src={video.image} alt="" />
                    <div className="videos__list__items__btn">
                      <Button shape="round">Xem Video</Button>
                    </div>
                    <div className="videos__list__items_icon">
                      <div>
                        <CaretRightOutlined />
                      </div>
                      <button>11:16</button>
                    </div>
                  </div>

                  <h3>{video.title}</h3>

                  <div className="videos__list__items__footer">
                    <span>
                      <EyeOutlined /> {video.view}
                    </span>
                    <span>
                      <LikeOutlined /> {video.like}
                    </span>
                    <span>
                      <MessageOutlined /> {video.mess}
                    </span>
                  </div>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default memo(Videos);
