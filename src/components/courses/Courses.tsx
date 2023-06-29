import React, { memo } from "react";
import { RightOutlined, UsergroupDeleteOutlined } from "@ant-design/icons";
import { Col, Row, Button } from "antd";
import "./Courses.scss";
import FreeCourses from "../../data/freeCourse.json";

const Courses: React.FC = () => {
  return (
    <div id="courses" style={{ margin: "4rem 2rem 0" }}>
      <div className="courses__title">
        <a href="">Khóa học miễn phí</a>
        <a href="">
          Xem lộ trình <RightOutlined />
        </a>
      </div>
      <div className="courses__list">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {FreeCourses.map((course) => (
            <Col className="gutter-row" span={6} style={{marginTop:"2.5rem"}}>
              <div className="courses__list__items">
                <a href="">
                  <div className="courses__list__items__img">
                    <img
                      src={course.image}
                      alt=""
                    />
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
        </Row>
      </div>
    </div>
  );
};

export default memo(Courses);
