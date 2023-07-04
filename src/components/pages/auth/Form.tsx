import React, { memo } from "react";
import "./Auth.scss";
import { Link } from "react-router-dom";
import LoginBtn from "../../atoms/loginbtn/LoginBtn";

interface FormProps {
  auth: number;
}

const Form: React.FC<FormProps> = ({ auth }) => {
  const login_btn = [
    {
      img: "https://accounts.fullstack.edu.vn/assets/images/signin/google-18px.svg",
      text: "Tiếp tục với Google",
    },
    {
      img: "https://accounts.fullstack.edu.vn/assets/images/signin/facebook-18px.svg",
      text: "Tiếp tục với Facebook",
    },
    {
      img: "https://accounts.fullstack.edu.vn/assets/images/signin/github-18px.svg",
      text: "Tiếp tục với Github",
    },
  ];
  return (
    <>
      <Link
        to={`${auth === 0 ? "/login/loginForm" : "/signup/signupForm"}`}
        style={{ textDecoration: "none" }}
      >
        <LoginBtn className="login__btn" imglink="https://accounts.fullstack.edu.vn/assets/images/signin/personal-18px.svg" text="Sử dụng email / Số điện thoại" />
      
      </Link>
      {login_btn.map((lb) => (
        <LoginBtn className="login__btn" imglink={lb.img} text={lb.text} />
      ))}
    </>
  );
};

export default memo(Form);
