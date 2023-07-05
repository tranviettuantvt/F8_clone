import React, { memo } from "react";
import { RightOutlined } from "@ant-design/icons";
import { Row } from "antd";
import "./Blogs.scss";
import { Link } from "react-router-dom";
import BlogCard from "../../molecules/blogCard/BlogCard";
import { BlogCardProps } from "../../../constant/common";

interface BlogsProps{
  title:string,
  blogCardList: BlogCardProps[]
}

const Blogs: React.FC<BlogsProps> = ({title, blogCardList}) => {
  return (
    <div id="blogs">
      <div className="blogs__title">
        <a href="">{title}</a>
        <Link to="/blogs">
          Xem tất cả <RightOutlined />
        </Link>
      </div>
      <div className="blogs__list">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <div className="blogs__list__slider">
            {blogCardList.map((blog) => (
              <BlogCard
                id={blog.id}
                image={blog.image}
                title={blog.title}
                time={blog.time}
                avatar={blog.avatar}
                user={blog.user}
              />
            ))}
          </div>
        </Row>
      </div>
    </div>
  );
};

export default memo(Blogs);
