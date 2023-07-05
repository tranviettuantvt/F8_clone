import React, { memo } from "react";
import { RightOutlined } from "@ant-design/icons";
import { Col, Row, Button } from "antd";
import "./Videos.scss";
import VideoCard from "../../molecules/videoCard/VideoCard";
import { VideoCardProps } from "../../../constant/common";

interface VideosProps{
  title:string,
  videoList: VideoCardProps[]
}

const Videos: React.FC<VideosProps> = ({title, videoList}) => {
  return (
    <div id="videos">
      <div className="videos__title">
        <a href="">{title}</a>
        <a href="https://www.youtube.com/c/F8VNOfficial/videos" target="_blank">
          Xem tất cả <RightOutlined />
        </a>
      </div>

      <div className="videos__list">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <div className="videos__list__slider">
            {videoList.map((video) => (
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
