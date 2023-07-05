import React, { memo} from "react";
import {Col} from 'antd';
import {  UsergroupDeleteOutlined } from "@ant-design/icons";
import './CourseCard.scss'
import Buttonn from "../../atoms/button/Buttonn";
import { CourseCardProps } from "../../../constant/common";

const CourseCard: React.FC<CourseCardProps> = ({id,
    image,
    members,
    title
}) => {
  return (
    <Col
    className="gutter-row"
    lg={6}
    md={12}
    xs={12}
    sm={12}
    style={{ marginTop: "1.5rem" }}
    key={id}
  >
    <div className="courses__list__items">
      <a href="">
        <div className="courses__list__items__img">
          <img src={image} alt="" />
          <div className="courses__list__items__btn">
            <Buttonn shape="round">Xem khóa học</Buttonn>
          </div>
        </div>
        <h3>{title}</h3>
        <span>
          <UsergroupDeleteOutlined /> {members}
        </span>
      </a>
    </div>
  </Col>
  );
};

export default memo(CourseCard);
