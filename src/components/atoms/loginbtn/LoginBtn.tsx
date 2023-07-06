import React, { memo } from "react";
import { styled } from "styled-components";

const StyledDiv = styled.div`
  margin: 1rem auto;
  background-color: white;
  border: 2px solid #e8e8e8;
  border-radius: 44px;
  height: 2.7rem;
  line-height: 2.7rem;
  padding-left: 20px;
  position: relative;
  text-align: center;
  width: 19rem;

  img {
    left: 16px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  span {
    opacity: 0.9;
    color: #292929;
    font-weight: bold;
  }
  &:hover {
    background-color: #dce0e3;
    cursor: pointer;
  }
  div {
    width: 40px;
    display: inline-block;
    height: 40px;
    background: #8957e5;
    border-radius: 50%;
  }
`;

interface LoginBtnProps {
  imgalt?: string;
  className?: string;
  imglink?: string;
  text: string;
  icon?: React.ReactNode;
}

const LoginBtn: React.FC<LoginBtnProps> = ({
  className,
  imglink,
  imgalt,
  text,
  icon,
}) => {
  console.log(icon);

  return (
    <StyledDiv className={className}>
      {imglink ? <img src={imglink} alt={imgalt} /> : icon && <div>{icon}</div>}
      <span>{text}</span>
    </StyledDiv>
  );
};

export default memo(LoginBtn);
