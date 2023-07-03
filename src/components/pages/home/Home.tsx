import React, { memo } from "react";

import './Home.scss'
import Slider from "../../organisms/slider/Slider";
import Courses from "../../organisms/courses/Courses";
import Blogs from "../../organisms/blogs/Blogs";
import Videos from "../../organisms/videos/Videos";

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
