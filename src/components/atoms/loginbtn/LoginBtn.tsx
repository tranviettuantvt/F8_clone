import React, { memo} from "react";
import { styled } from "styled-components";

const StyledDiv = styled.div`
  margin: 1rem auto;
  background-color: white;
  border: 2px solid #e8e8e8;
  border-radius: 44px;
  height: 2.7rem;
  line-height: 2.7rem;
  padding-left: 16px;
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
`;

interface LoginBtnProps {
  imgalt?: string;
  className?: string;
  imglink: string;
  text: string;
}

const LoginBtn: React.FC<LoginBtnProps> = ({
  className,
  imglink,
  imgalt,
  text,
}) => {
  return (
    <StyledDiv className={className}>
      <img src={imglink} alt={imgalt} />
      <span>{text}</span>
    </StyledDiv>
  );
};

export default memo(LoginBtn);
