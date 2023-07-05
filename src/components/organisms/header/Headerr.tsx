import { Button, Divider } from "antd";
import React, { memo, useContext, useState } from "react";
import { Input } from "antd";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import { SidebarContex } from "../../../context";
import Buttonn from "../../atoms/button/Buttonn";
import Search from "../../atoms/search/Search";
import { HeaderrProps } from "../../../constant/common";



const Headerr: React.FC<HeaderrProps> = ({logo,
  slogan,
  inputText,
  loginBtn}) => {
  const { sbActive, setsbActive } = useContext(SidebarContex);
  const [open, setOpen]=useState(false)

  return (
    <div className="header">
      <div>
        <img
          src={logo}
          alt=""
        />
        <span style={{ fontWeight: "bold", marginLeft: "1rem" }}>
          {slogan}
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", position:"relative" }}>
        <MenuOutlined
          className="header_outline"
          onClick={() => setsbActive(true)}
        />
        <Search
          className="header__search"
          prefix={<SearchOutlined />}
          placeholder={inputText}
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
        <Buttonn  className="header__btn-login">{loginBtn}</Buttonn>
      </Link>
    </div>
  );
};

export default memo(Headerr);
