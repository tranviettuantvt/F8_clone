import { Button } from "antd";
import React, { memo, useContext } from "react";
import { Input } from "antd";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import "./Header.scss";
import { Link } from "react-router-dom";
import { SidebarContex } from "../../context";

const Headerr: React.FC = () => {
  const { sbActive, setsbActive } = useContext(SidebarContex);

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
      <div style={{ display: "flex", alignItems: "center" }}>
        <MenuOutlined
          className="header_outline"
          onClick={() => setsbActive(true)}
        />
        <Input
          className="header__search"
          prefix={<SearchOutlined />}
          placeholder="Tìm kiếm khóa học, bài viết, video, ..."
          allowClear
        />
      </div>
      <Link to="/login" style={{display:"flex", alignItems:"center", gap:"1rem"}}>
        <SearchOutlined className="header__search-icon"/>
        <Button className="header__btn-login">Đăng nhập</Button>
      </Link>
    </div>
  );
};

export default memo(Headerr);
