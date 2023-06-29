import React, { memo } from "react";
import { TabletOutlined, EllipsisOutlined } from "@ant-design/icons";
import "./Blognav_Item.scss";

const Blognav_Item: React.FC = () => {
  return (
    <div className="blognav__item">
      <div className="blognav__item__header">
        <div className="item__header__user">
          <img
            src="https://files.fullstack.edu.vn/f8-prod/user_photos/323800/6464902b20c91.jpg"
            alt=""
          />
          <span>Alan King</span>
        </div>
        <div className="item__header__icon">
          <TabletOutlined />
          <EllipsisOutlined />
        </div>
      </div>
      <div className="blognav__item__content">
        <div>
          <a href="" style={{color:"black"}}><h2>Cảm thấy khó khăn khi chuyển sang học một ngôn ngữ mới</h2></a>
          <p>
            Tôi làm chuyên môn về phân tích dữ liệu, chủ yếu là dùng phần mềm
            chuyên môn sâu và dùng rất nhiều SQL db, python. Hai món đó cũng...
          </p>
        </div>
        <img src="https://files.fullstack.edu.vn/f8-prod/blog_posts/7256/64448752c63c4.jpg" alt="" />
      </div>

      <div className="blognav__item__footer">
        <button>ReactJS</button>
        <span>một tháng trước</span>
        <span>2 phút đọc</span>
      </div>
    </div>
  );
};

export default memo(Blognav_Item);
