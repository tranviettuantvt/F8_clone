import React, { memo } from "react";
import { RightOutlined, UsergroupDeleteOutlined } from "@ant-design/icons";
import { Col, Divider, Row, Button } from "antd";
import Blogss from "../../data/blogs.json";
import "./Blogs.scss";

const Blogs: React.FC = () => {
  return (
    <div id="blogs" style={{ margin: "3rem 2rem 0" }}>
      <div className="blogs__title">
        <a href="">Bài viết nổi bật</a>
        <a href="">
          Xem tất cả <RightOutlined />
        </a>
      </div>
      <div className="blogs__list">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {Blogss.map((blog) => (
            <Col
              className="gutter-row"
              span={6}
              style={{ marginTop: "2.5rem" }}
            >
              <div className="blogs__list__items">
                <a href="">
                  <div className="blogs__list__items__img">
                    <img src={blog.image} alt="" />
                    <div className="blogs__list__items__btn">
                      <Button shape="round">Xem bài viết</Button>
                    </div>
                  </div>
                  <h3>{blog.title}</h3>
                  <div className="blogs__list__items__user">
                    <img src={blog.avatar} alt="" />
                    <h5>{blog.user}</h5>
                    <span>{blog.time}</span>
                  </div>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default memo(Blogs);
