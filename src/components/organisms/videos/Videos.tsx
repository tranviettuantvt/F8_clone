import React, { memo } from "react";
import { RightOutlined } from "@ant-design/icons";
import { Col, Row, Button } from "antd";
import Videoss from "../../../data/videos.json";
import "./Videos.scss";
import VideoCard from "../../molecules/videoCard/VideoCard";

const Videos: React.FC = () => {
  return (
    <div id="videos">
      <div className="videos__title">
        <a href="">Video nổi bật</a>
        <a href="https://www.youtube.com/c/F8VNOfficial/videos" target="_blank">
          Xem tất cả <RightOutlined />
        </a>
      </div>

      <div className="videos__list">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <div className="videos__list__slider">
            {Videoss.map((video) => (
              <VideoCard
                id={video.id}
                image={video.image}
                view={video.view}
                title={video.title}
                like={video.like}
                mess={video.mess}
              />
            ))}
          </div>
        </Row>
      </div>
    </div>
  );
};

export default memo(Videos);
