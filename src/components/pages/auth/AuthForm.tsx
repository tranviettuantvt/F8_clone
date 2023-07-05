import React, { memo } from "react";
import "./AuthForm.scss";
import { Input, Select, Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";

import { Link, useNavigate } from "react-router-dom";

interface AuthFormProps {
  auth: number;
}

const AuthForm: React.FC<AuthFormProps> = ({ auth }) => {
  const navigate = useNavigate();

  return (
    <div id="loginForm">
      <LeftOutlined
        className="login__modal__back"
        onClick={() => navigate(-1)}
      />
      {auth === 0 ? (
        <></>
      ) : (
        <div className="loginForm__name">
          <span className="loginForm__title">Tên của bạn?</span>
          <Input
            className="loginForm__input"
            placeholder="Họ và tên của bạn"
            allowClear
          />
        </div>
      )}
      <div className="loginForm__infor">
        <div className="loginForm__infor__title">
          <span className="loginForm__title">Số điện thoại</span>
          <span className="loginForm__title">Đăng nhập với email</span>
        </div>

        <div className="loginForm__infor__search">
          <Select
            defaultValue="VN +84"
            style={{ width: 120 }}
            optionLabelProp="value" // Use the 'value' property as the label
            options={[
              { value: "VN +84 ", label: "Viet Nam" },
              { value: "AF +93 ", label: "Afghanistan" },
              { value: "AM +374", label: "Armenia" },
              { value: "BS +124", label: "Bahamas" },
            ]}
          />
          <Input
            className="header__search"
            placeholder="Số điện thoại"
            allowClear
          />
        </div>
        <Input
          size="large"
          placeholder="Nhập mã xác nhận"
          allowClear
          addonAfter={
            <Button type="primary" shape="round" size="large">
              Gửi mã
            </Button>
          }
        />
        <Button
          size="large"
          type="primary"
          shape="round"
          style={{ marginTop: "1rem", backgroundColor: "#1dbfaf" }}
        >
          {auth === 0 ? "Đăng Nhập" : "Đăng ký"}
        </Button>
      </div>
    </div>
  );
};

export default memo(AuthForm);
