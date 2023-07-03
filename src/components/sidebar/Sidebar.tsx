import React, { memo, useState } from "react";
import { PlusOutlined, EditOutlined, CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { Popover } from "antd";
import Homesvg from "../../assets/home_svg.svg";
import Roapmapsvg from "../../assets/roadmap_svg.svg";
import Studysvg from "../../assets/study_svg.svg";
import Blogsvg from "../../assets/blog_svg.svg";

const content = (
  <div className="sidebar_popOver">
    <EditOutlined /> <span>Viet Blog</span>
  </div>
);

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [rotate, setRotate] = useState(false);
  const file_svg = [
    { id: 0, link: "/", svg: Homesvg, name: "Home" },
    { id: 1, link: "/roadmap", svg: Roapmapsvg, name: "Lộ trình" },
    { id: 2, link: "/study", svg: Studysvg, name: "Học" },
    { id: 3, link: "/blogs", svg: Blogsvg, name: "Blogs" },
  ];

  const handleItemClick = (itemId: number) => {
    setActiveItem(itemId);
  };
  const handleClick = () => {
    setRotate(!rotate);
  };

  return (
    <div className="sidebar">
     <Popover placement="bottomLeft" content={content} trigger="click">
      <div
        className={`sidebar__icon ${rotate ? 'rotate' : ''}`}
        onClick={handleClick}
      >
        <PlusOutlined className={`close-icon ${rotate ? 'rotate' : ''}`} />
      </div>
    </Popover>

      <ul className="sidebar__list">
        {file_svg.map((file) => (
          <Link to={file.link}>
            <li
              key={file.id}
              className={activeItem === file.id ? "active" : ""}
              onClick={() => handleItemClick(file.id)}
            >
              <img src={file.svg} alt={file.name} />
              <span>{file.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default memo(Sidebar);
