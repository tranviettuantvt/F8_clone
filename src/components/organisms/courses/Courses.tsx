import React, { memo } from "react";
import { RightOutlined, UsergroupDeleteOutlined } from "@ant-design/icons";
import { Col, Row, Button } from "antd";
import "./Courses.scss";
import { Link } from "react-router-dom";
import CourseCard from "../../molecules/courseCard/CourseCard";
import { CourseCardProps } from "../../../constant/common";

interface CoursesProps{
  title:string,
  coursesList: CourseCardProps[]
}

const Courses: React.FC<CoursesProps> = ({title, coursesList}) => {
  return (
    <div id="courses" style={{marginTop:"2rem"}}>
      <div className="courses__title">
        <a href="">{title}</a>
        <Link to='/roadmap'>
          Xem lộ trình <RightOutlined />
        </Link>
      </div>
      <div className="courses__list">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <div className="courses__list__slider">
            {coursesList.map((course) => (
              <CourseCard image={course.image} members={course.members} title={course.title}/>
            ))}
          </div>
        </Row>
      </div>
    </div>
  );
};

export default memo(Courses);
