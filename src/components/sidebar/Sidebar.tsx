import React, { memo, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

import Homesvg from "../../assets/home_svg.svg";
import Roapmapsvg from "../../assets/roadmap_svg.svg";
import Studysvg from "../../assets/study_svg.svg";
import Blogsvg from "../../assets/blog_svg.svg";

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);

  const file_svg = [
    { id: 0, link: "/", svg: Homesvg, name: "Home" },
    { id: 1, link: "/roadmap", svg: Roapmapsvg, name: "Lộ trình" },
    { id: 2, link: "/study", svg: Studysvg, name: "Học" },
    { id: 3, link: "/blogs", svg: Blogsvg, name: "Blogs" },
  ];

  const handleItemClick = (itemId: number) => {
    setActiveItem(itemId);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__icon">
        <PlusOutlined />
      </div>

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
