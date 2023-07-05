import React, { memo } from "react";
import { Link } from "react-router-dom";
import { LandingHeaderProps } from "../../../constant/common";
import './LandingHeader.scss'

const LandingHeader: React.FC<LandingHeaderProps> = ({
  logo,
  slogan,
  menu,
  textColor
}) => {
  return (
    <div id="landingHeader">
      <Link to="/" className="landing_logo" style={{color:`${textColor}`}}>
        <img src={logo} alt="" />
        <span style={{ fontWeight: "bold", marginLeft: "0.8rem",width:"135px" }}>{slogan}</span>
      </Link>
      <ul className="landing_menu">
        {menu.map((item) => (
          <li>
            <a style={{color:`${textColor}`}} href="">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(LandingHeader);
