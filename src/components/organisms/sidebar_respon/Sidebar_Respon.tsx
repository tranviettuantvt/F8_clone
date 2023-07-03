import React, { memo, useState, useRef, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Homesvg from "../../../assets/home_svg.svg";
import Roapmapsvg from "../../../assets/roadmap_svg.svg";
import Studysvg from "../../../assets/study_svg.svg";
import Blogsvg from "../../../assets/blog_svg.svg";
import Backsvg from "../../../assets/back.svg";
import Introsvg from '../../../assets/intro_svg.svg';
import Peoplesvg from '../../../assets/people_svg.svg';
import Settingsvg from '../../../assets/setting_svg.svg';


import "./Sidebar_Respon.scss";
import { Divider } from "antd";
import { SidebarContex } from "../../../context";

const Sidebar_Respon: React.FC = () => {
  const { sbActive, setsbActive } = useContext(SidebarContex);
  const [activeItem, setActiveItem] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const file_svg = [
    { id: 0, link: "/", svg: Homesvg, name: "Trang chủ" },
    { id: 1, link: "/roadmap", svg: Roapmapsvg, name: "Lộ trình" },
    { id: 2, link: "/study", svg: Studysvg, name: "Học" },
    { id: 3, link: "/blogs", svg: Blogsvg, name: "Blogs" },
  ];

  const file_svg_2 = [
    { id: 4, link: "/", svg: Introsvg, name: "Giới thiệu" },
    { id: 5, link: "/", svg: Peoplesvg, name: "Cơ hội việc làm" },
    { id: 6, link: "/", svg: Settingsvg, name: "Cài đặt" },
  ];

  const handleItemClick = (itemId: number) => {
    setActiveItem(itemId);
  };

  return (
    <div
      id="sidebar__respon"
      style={{ display: sbActive ? "block" : "none" }}
      onClick={(e) => {
        if (e.target === containerRef.current) setsbActive(true);
        else setsbActive(false);
      }}
    >
      <div className="container" ref={containerRef}>
        <ul className="sidebar__list respon">
          <Link to="/login">
            <li>
              <img src={Backsvg} alt="" />
              <span>Đăng nhập</span>
            </li>
          </Link>
        </ul>

        <Divider plain />
        <ul className="sidebar__list respon">
          {file_svg.map((file) => (
            <Link to={file.link} key={file.id}>
              <li
                className={activeItem === file.id ? "active" : ""}
                onClick={() => handleItemClick(file.id)}
              >
                <img src={file.svg} alt={file.name} />
                <span>{file.name}</span>
              </li>
            </Link>
          ))}
        </ul>
        <Divider plain />

        <ul className="sidebar__list respon">
          {file_svg_2.map((file) => (
            <Link to={file.link} key={file.id}>
              <li
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
    </div>
  );
};

export default memo(Sidebar_Respon);
