import React, { memo } from "react";
import "./Auth.scss";
import { Link, Outlet } from "react-router-dom";

interface AuthProps {
  auth: number;
}

const Auth: React.FC<AuthProps> = ({ auth }) => {
  return (
    <div id="login">
      <div className="login__modal">
       
        <img
          className="login__f8"
          src="https://accounts.fullstack.edu.vn/assets/icon/f8_icon.png"
          alt=""
        />
        <h2>{auth === 0 ? "Chào mừng đến với F8" : "Đăng ký tài khoản F8"}</h2>
        <Outlet />
        {auth === 0 ? (
          <div>
            <h4>Bạn chưa có tài khoản? </h4>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <span style={{ color: "#f05123" }}> Đăng ký</span>
            </Link>
          </div>
        ) : (
          <div>
            <h4>Bạn đã có tài khoản? </h4>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span style={{ color: "#f05123" }}> Đăng nhập</span>
            </Link>
          </div>
        )}

        <div className="login__footer">
          <p>
            Việc bạn tiếp tục sử dụng trang web này sẽ đồng nghĩa với việc bạn
            đồng ý với <a href="">Điều khoản sử dụng </a>của chúng tôi
          </p>
        </div>
        <div className="login__ps">
          <span>
            <a href="">Giới thiệu về F8 | </a>
          </span>
          <span>
            <a href="">F8 trên youtube | </a>
          </span>
          <span>
            <a href="">F8 trên Facebook</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(Auth);
