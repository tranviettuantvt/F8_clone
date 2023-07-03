import { Button, Divider } from "antd";
import React, { memo, useContext, useState } from "react";
import { Input } from "antd";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import "./Header.scss";
import { Link } from "react-router-dom";
import { SidebarContex } from "../../../context";

const Headerr: React.FC = () => {
  const { sbActive, setsbActive } = useContext(SidebarContex);
  const [open, setOpen]=useState(false)

  return (
    <div className="header">
      <div>
        <img
          src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
          alt=""
        />
        <span style={{ fontWeight: "bold", marginLeft: "1rem" }}>
          Học Lập Trình Để Đi Làm
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", position:"relative" }}>
        <MenuOutlined
          className="header_outline"
          onClick={() => setsbActive(true)}
        />
        <Input
          className="header__search"
          prefix={<SearchOutlined />}
          placeholder="Tìm kiếm khóa học, bài viết, video, ..."
          allowClear
          onChange={(e) => setOpen(e.target.value !== "")}
        />
        <div className="header__search__menu"  style={{ display: open ? "block" : "none" }}>
          <div><SearchOutlined /><span>Kết quả cho 'html'</span></div>
          <div className="search__menu__title">
            <h4>KHÓA HỌC</h4>
            <a href=""><span>Xem thêm</span></a>
          </div>
          <Divider plain style={{margin:"12px s0"}}/>
          <a className="search__menu__item" href="">
            <img src="https://files.fullstack.edu.vn/f8-prod/courses/6.png" alt="" />
            <span>Node ExpressJS</span>
          </a>
          <a className="search__menu__item" href="">
            <img src="https://files.fullstack.edu.vn/f8-prod/courses/6.png" alt="" />
            <span>Node ExpressJS</span>
          </a>
          <a className="search__menu__item" href="">
            <img src="https://files.fullstack.edu.vn/f8-prod/courses/6.png" alt="" />
            <span>Node ExpressJS</span>
          </a>

          <div className="search__menu__title">
            <h4>KHÓA HỌC</h4>
            <a href=""><span>Xem thêm</span></a>
          </div>
          <Divider plain style={{margin:"12px 0"}}/>
          <a className="search__menu__item" href="">
            <img src="https://files.fullstack.edu.vn/f8-prod/courses/6.png" alt="" />
            <span>Node ExpressJS</span>
          </a>
          <a className="search__menu__item" href="">
            <img src="https://files.fullstack.edu.vn/f8-prod/courses/6.png" alt="" />
            <span>Node ExpressJS</span>
          </a>
          <a className="search__menu__item" href="">
            <img src="https://files.fullstack.edu.vn/f8-prod/courses/6.png" alt="" />
            <span>Node ExpressJS</span>
          </a>
        </div>
      </div>
      <Link to="/login" style={{display:"flex", alignItems:"center", gap:"1rem"}}>
        <SearchOutlined className="header__search-icon"/>
        <Button className="header__btn-login">Đăng nhập</Button>
      </Link>
    </div>
  );
};

export default memo(Headerr);
