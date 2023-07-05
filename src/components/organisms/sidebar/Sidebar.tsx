import React, { memo, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { Popover } from "antd";

interface SidebarItemProps {
  id: number;
  link: string;
  svg: string;
  name: string;
}

interface SidebarProps {
  sidebarItem: SidebarItemProps[];
  sidebarPopOver: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarItem, sidebarPopOver }) => {
  const [activeItem, setActiveItem] = useState(0);
  const [rotate, setRotate] = useState(false);

  const handleItemClick = (itemId: number) => {
    setActiveItem(itemId);
  };
  const handleClick = () => {
    setRotate(!rotate);
  };

  return (
    <div className="sidebar">
      <Popover placement="bottomLeft" content={sidebarPopOver} trigger="click">
        <div
          className={`sidebar__icon ${rotate ? "rotate" : ""}`}
          onClick={handleClick}
        >
          <PlusOutlined className={`close-icon ${rotate ? "rotate" : ""}`} />
        </div>
      </Popover>

      <ul className="sidebar__list">
        {sidebarItem.map((file) => (
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
