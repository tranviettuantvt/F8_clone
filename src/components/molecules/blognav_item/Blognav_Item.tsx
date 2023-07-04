import React, { memo } from "react";
import { TabletOutlined, EllipsisOutlined } from "@ant-design/icons";
import "./Blognav_Item.scss";

interface Blognav_ItemProps{
  avatar:string,
  user:string,
  title:string,
  content:string,
  image:string,
  tag:string,
  publish: string,
  time:string
}

const Blognav_Item: React.FC<Blognav_ItemProps> = ({avatar,
  user,
  title,
  content,
  image,
  tag,
  publish,
  time,}) => {
  return (
    <div className="blognav__item">
      <div className="blognav__item__header">
        <div className="item__header__user">
          <img
            src={avatar}
            alt=""
          />
          <span>{user}</span>
        </div>
        <div className="item__header__icon">
          <TabletOutlined />
          <EllipsisOutlined />
        </div>
      </div>
      <div className="blognav__item__content">
        <div>
          <a href="" style={{color:"black", textDecoration:"none"}}><h2>{title}</h2></a>
          <p>
           {content}
          </p>
        </div>
        <img src={image} alt="" />
      </div>

      <div className="blognav__item__footer">
        <button>{tag}</button>
        <span>{publish}</span>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default memo(Blognav_Item);
