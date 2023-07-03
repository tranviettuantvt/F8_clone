import React, { memo } from "react";
import { RightOutlined, UsergroupDeleteOutlined } from "@ant-design/icons";
import { Col, Row, Button } from "antd";
import "./Courses.scss";
import FreeCourses from "../../../data/freeCourse.json";
import { Link } from "react-router-dom";

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
              <Col
                className="gutter-row"
                lg={6}
                md={12}
                xs={12}
                sm={12}
                style={{ marginTop: "1.5rem" }}
              >
                <div className="courses__list__items">
                  <a href="">
                    <div className="courses__list__items__img">
                      <img src={course.image} alt="" />
                      <div className="courses__list__items__btn">
                        <Button shape="round">Xem khóa học</Button>
                      </div>
                    </div>
                    <h3>{course.title}</h3>
                    <span>
                      <UsergroupDeleteOutlined /> {course.members}
                    </span>
                  </a>
                </div>
              </Col>
            ))}
          </div>
        </Row>
      </div>
    </div>
  );
};

export default memo(Courses);
