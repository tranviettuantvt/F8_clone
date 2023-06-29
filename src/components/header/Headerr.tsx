import { Button } from "antd";
import React, { memo } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./Header.scss";

const Headerr: React.FC = () => {
  return (
    <div className="header">
      <div>
        <Button className="header__btn-f8">F8</Button>
        <span style={{fontWeight:"bold", marginLeft:"1rem"}}>Học Lập Trình Để Đi Làm</span>
      </div>
      <Input
        className="header__search"
        prefix={<SearchOutlined />}
        placeholder="Tìm kiếm khóa học, bài viết, video, ..."
        allowClear
      />
      <Button className="header__btn-login">Đăng nhập</Button>
    </div>
  );
};

export default memo(Headerr);
