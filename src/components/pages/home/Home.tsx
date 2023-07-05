import React, { memo } from "react";
import './Home.scss'
import Slider from "../../organisms/slider/Slider";
import Courses from "../../organisms/courses/Courses";
import Blogs from "../../organisms/blogs/Blogs";
import Videos from "../../organisms/videos/Videos";
import SliderData from '../../../data/slider.json'

import Blogss from "../../../data/blogs.json";
import FreeCourses from '../../../data/freeCourse.json'
import Videoss from "../../../data/videos.json";

const Home: React.FC = () => {
  return (
    <div className="home" style={{ margin: "95px 2rem 0 4rem" }}>
      <Slider SliderData={SliderData}/>
      <div className="home__content" style={{ margin: "3rem 2rem 0", display:'flex', flexDirection:'column', gap:'3rem' }}>
        <Courses title="Khóa học miễn phí" coursesList={FreeCourses}/>
        <Blogs title="Bài viết nổi bật" blogCardList={Blogss}/>
        <Videos title="Video nổi bật" videoList={Videoss}/>
      </div>
    </div>
  );
};

export default memo(Home);
