import React, { memo } from "react";
import { RightOutlined, UsergroupDeleteOutlined } from "@ant-design/icons";
import { Col, Row, Button } from "antd";
import "./Courses.scss";
import FreeCourses from "../../../data/freeCourse.json";
import { Link } from "react-router-dom";
import CourseCard from "../../molecules/courseCard/CourseCard";

const Courses: React.FC = () => {
  return (
    <div id="courses" style={{marginTop:"2rem"}}>
      <div className="courses__title">
        <a href="">Khóa học miễn phí</a>
        <Link to='/roadmap'>
          Xem lộ trình <RightOutlined />
        </Link>
      </div>
      <div className="courses__list">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <div className="courses__list__slider">
            {FreeCourses.map((course) => (
              <CourseCard image={course.image} members={course.members} title={course.title}/>
            ))}
          </div>
        </Row>
      </div>
    </div>
  );
};

export default memo(Courses);
