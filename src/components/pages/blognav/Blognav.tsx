import React, { memo } from "react";
import { Row, Col } from "antd";
import "./Blognav.scss";
import Blognav_Item from "../../molecules/blognav_item/Blognav_Item";
import Mypagination from "../../atoms/pagination/Mypagination";

const Blognav: React.FC = () => {
  const Blognavs=[{
    avatar:"https://files.fullstack.edu.vn/f8-prod/user_photos/323800/6464902b20c91.jpg",
    user:"Alan King",
    title:"Cảm thấy khó khăn khi chuyển sang học một ngôn ngữ mới",
    content:" Tôi làm chuyên môn về phân tích dữ liệu, chủ yếu là dùng phần mềm chuyên môn sâu và dùng rất nhiều SQL db, python. Hai món đó cũng...",
    image:"https://files.fullstack.edu.vn/f8-prod/blog_posts/7256/64448752c63c4.jpg",
    tag:"ReactJs",
    publish: "một tháng trước",
    time:"2 phút đọc"
  },{
    avatar:"https://files.fullstack.edu.vn/f8-prod/user_photos/323800/6464902b20c91.jpg",
    user:"Alan King",
    title:"Cảm thấy khó khăn khi chuyển sang học một ngôn ngữ mới",
    content:" Tôi làm chuyên môn về phân tích dữ liệu, chủ yếu là dùng phần mềm chuyên môn sâu và dùng rất nhiều SQL db, python. Hai món đó cũng...",
    image:"https://files.fullstack.edu.vn/f8-prod/blog_posts/7256/64448752c63c4.jpg",
    tag:"ReactJs",
    publish: "một tháng trước",
    time:"2 phút đọc"
  },{
    avatar:"https://files.fullstack.edu.vn/f8-prod/user_photos/323800/6464902b20c91.jpg",
    user:"Alan King",
    title:"Cảm thấy khó khăn khi chuyển sang học một ngôn ngữ mới",
    content:" Tôi làm chuyên môn về phân tích dữ liệu, chủ yếu là dùng phần mềm chuyên môn sâu và dùng rất nhiều SQL db, python. Hai món đó cũng...",
    image:"https://files.fullstack.edu.vn/f8-prod/blog_posts/7256/64448752c63c4.jpg",
    tag:"ReactJs",
    publish: "một tháng trước",
    time:"2 phút đọc"
  },{
    avatar:"https://files.fullstack.edu.vn/f8-prod/user_photos/323800/6464902b20c91.jpg",
    user:"Alan King",
    title:"Cảm thấy khó khăn khi chuyển sang học một ngôn ngữ mới",
    content:" Tôi làm chuyên môn về phân tích dữ liệu, chủ yếu là dùng phần mềm chuyên môn sâu và dùng rất nhiều SQL db, python. Hai món đó cũng...",
    image:"https://files.fullstack.edu.vn/f8-prod/blog_posts/7256/64448752c63c4.jpg",
    tag:"ReactJs",
    publish: "một tháng trước",
    time:"2 phút đọc"
  },{
    avatar:"https://files.fullstack.edu.vn/f8-prod/user_photos/323800/6464902b20c91.jpg",
    user:"Alan King",
    title:"Cảm thấy khó khăn khi chuyển sang học một ngôn ngữ mới",
    content:" Tôi làm chuyên môn về phân tích dữ liệu, chủ yếu là dùng phần mềm chuyên môn sâu và dùng rất nhiều SQL db, python. Hai món đó cũng...",
    image:"https://files.fullstack.edu.vn/f8-prod/blog_posts/7256/64448752c63c4.jpg",
    tag:"ReactJs",
    publish: "một tháng trước",
    time:"2 phút đọc"
  }]
  return (
    <div id="blognav" style={{ margin: "95px 2rem 0 3.8rem" }}>
      <div className="blognav__intro" style={{ marginBottom: "2.5rem" }}>
        <h1 style={{ marginBottom: "1rem" }}>Bài viết nổi bật</h1>
        <p>
          Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online
          và các kỹ thuật lập trình web.
        </p>
      </div>
      <Row className="blognav__content">
        <Col lg={16} md={24} xs={24} sm={24}>
         {Blognavs.map(bl=> <Blognav_Item avatar={bl.avatar} user={bl.user} title={bl.title} content={bl.content} image={bl.image} tag={bl.tag} publish={bl.publish} time={bl.time}/>)}
          <Mypagination currentPage={3} totalPages={50}/>
        </Col>
        <Col className="blog__nav__tags" lg={8} md={24} xs={24} sm={24}>
          <h3>CÁC CHỦ ĐỀ ĐƯỢC ĐỀ XUẤT</h3>

          <div className="blog__nav__tags__list">
            <button>Front-end / Mobile App</button>
            <button>Back-end / Devops</button>
            <button>Ux Ui / Design</button>
            <button>ReactJS</button>
            <button>Others</button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default memo(Blognav);
