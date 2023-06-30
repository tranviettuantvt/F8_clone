import React, { memo } from "react";
import Slider from "../../components/slider/Slider";
import Courses from "../../components/courses/Courses";
import Blogs from "../../components/blogs/Blogs";
import Videos from "../../components/videos/Videos";
import './Home.scss'

const Home: React.FC = () => {
  return (
    <div className="home" style={{ margin: "95px 2rem 0 4rem" }}>
      <Slider />
      <div className="home__content" style={{ margin: "3rem 2rem 0", display:'flex', flexDirection:'column', gap:'3rem' }}>
        <Courses />
        <Blogs />
        <Videos />
      </div>
    </div>
  );
};

export default memo(Home);
