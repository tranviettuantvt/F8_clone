import React, { memo } from "react";
import "./LandingVideo.scss";
import '../../../constant/styles.scss'

const LandingVideo: React.FC = () => {
  return (
    <div id="landingVideo">
        <h3>Làm bài tập ngay trên trang web...|</h3>
        <video muted loop autoPlay playsInline className="challenge-screen" poster="" src="https://fullstack.edu.vn/landing/htmlcss/assets/video/dev-env.mp4?t=1"></video>
    </div>
  );
};

export default memo(LandingVideo);
