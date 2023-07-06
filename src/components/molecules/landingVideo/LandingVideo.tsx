import React, { memo } from "react";
import "./LandingVideo.scss";
import "../../../constant/styles.scss";

const LandingVideo: React.FC = () => {
  return (
    <div id="landingVideo" style={{ marginTop: "8rem" }}>
      <h3>Làm bài tập ngay trên trang web...|</h3>
      <div>
        <video
          muted
          loop
          autoPlay
          playsInline
          className="challenge-screen"
          poster=""
          src="https://fullstack.edu.vn/landing/htmlcss/assets/video/dev-env.mp4?t=1"
        ></video>
        <img
          className="img-decorator square"
          src="https://fullstack.edu.vn/landing/htmlcss/assets/img/hero-bg-square.svg"
          alt=""
        />
        <img
          className="img-decorator circle"
          src="https://fullstack.edu.vn/landing/htmlcss/assets/img/hero-bg-circle.svg"
          alt=""
        />
        <img
          className="light"
          src="https://fullstack.edu.vn/landing/htmlcss/assets/img/glow-new.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default memo(LandingVideo);
