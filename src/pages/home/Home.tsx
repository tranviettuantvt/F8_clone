import React, { memo } from "react";
import Slider from "../../components/slider/Slider";
import Courses from "../../components/courses/Courses";
import Blogs from "../../components/blogs/Blogs";
import Videos from "../../components/videos/Videos";

const Home: React.FC = () => {
  return <div className="home" style={{margin:"95px 2rem 0"}}>
    <Slider/>
    <Courses/>
    <Blogs/>
    <Videos/>
  </div>;
};

export default memo(Home);
