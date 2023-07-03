import React, { memo } from "react";
import "./Auth.scss";
import { Link } from "react-router-dom";

interface FormProps{
    auth:number
}

const Form: React.FC<FormProps> = ({auth}) => {
  return (
    <>
    <Link to={`${auth === 0?'/login/loginForm':'/signup/signupForm'}`} style={{textDecoration:'none'}}>
      <div className="login__btn">
        <img
          src="https://accounts.fullstack.edu.vn/assets/images/signin/personal-18px.svg"
          alt=""
        />
        <span>Sử dụng email / Số điện thoại</span>
      </div></Link>
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
    </>
  );
};

export default memo(Form);
