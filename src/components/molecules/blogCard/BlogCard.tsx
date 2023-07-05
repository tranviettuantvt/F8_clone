import React, { memo} from "react";
import {Col} from 'antd';
import './BlogCard.scss'
import Buttonn from "../../atoms/button/Buttonn";
import { BlogCardProps } from "../../../constant/common";




const BlogCard: React.FC<BlogCardProps> = ({id,
    image,
    title,avatar,user, time
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
    <div className="blogs__list__items">
      <a href="">
        <div className="blogs__list__items__img">
          <img src={image} alt="" />
          <div className="blogs__list__items__btn">
            <Buttonn shape="round">Xem bài viết</Buttonn>
          </div>
        </div>
        <h3>{title}</h3>
        <div className="blogs__list__items__user">
          <img src={avatar} alt="" />
          <h5>{user}</h5>
          <span>{time}</span>
        </div>
      </a>
    </div>
  </Col>
  );
};

export default memo(BlogCard);
