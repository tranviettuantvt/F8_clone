import React, { memo } from "react";
import "./Login.scss";

const Login: React.FC = () => {
  return (
    <div id="login">
      <div className="login__modal">
        <img
          className="login__f8"
          src="https://accounts.fullstack.edu.vn/assets/icon/f8_icon.png"
          alt=""
        />
        <h2>Chào mừng đến với F8</h2>
        <div className="login__btn">
          <img
            src="https://accounts.fullstack.edu.vn/assets/images/signin/personal-18px.svg"
            alt=""
          />
          <span>Sử dụng email / Số điện thoại</span>
        </div>
        <div className="login__btn">
          <img
            src="https://accounts.fullstack.edu.vn/assets/images/signin/google-18px.svg"
            alt=""
          />
          <span>Tiếp tục với Google</span>
        </div>
        <div className="login__btn">
          <img
            src="https://accounts.fullstack.edu.vn/assets/images/signin/facebook-18px.svg"
            alt=""
          />
          <span>Tiếp tục với Facebook</span>
        </div>
        <div className="login__btn">
          <img
            src="https://accounts.fullstack.edu.vn/assets/images/signin/github-18px.svg"
            alt=""
          />
          <span>Tiếp tục với Github</span>
        </div>
        <div>
          <h4>Bạn chưa có tài khoản? </h4>
          <span style={{ color: "#f05123" }}> Đăng ký</span>
        </div>

        <div className="login__footer">
          <p>
            Việc bạn tiếp tục sử dụng trang web này sẽ đồng nghĩa với việc bạn
            đồng ý với
          </p>
          <a href="">Điều khoản sử dụng  </a>
          <span>của chúng tôi</span>
        </div>
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
  );
};

export default memo(Login);
