import React, { memo } from "react";
import "./Landing.scss";
import "../../../constant/styles.scss";

import LandingHeader from "../../organisms/landingHeader/LandingHeader";
import LandingHero from "../../molecules/landingHero/LandingHero";
import LandingVideo from "../../molecules/landingVideo/LandingVideo";
import LandingSection from "../../molecules/landingSection/LandingSection";
import { Col, Row } from "antd";
import LandingSpecific from "../../organisms/landingSpecific/LandingSpecific";
import LandingContent from "../../organisms/landingContent/LandingContent";
import LoginBtn from "../../atoms/loginbtn/LoginBtn";
import { CheckOutlined, RightOutlined } from "@ant-design/icons";
import LandingReason from "../../organisms/landingReason/LandingReason";
import LandingCard from "../../molecules/landingCard/LandingCard";
import Buttonn from "../../atoms/button/Buttonn";
import "../../molecules/landingHero/LandingHero.scss";
import Footer from "../../organisms/footer/Footer";

const landingContentMenu = [
  [
    "Cấu trúc file HTML",
    "Tìm hiểu các thẻ meta",
    "Thuộc tính trong HTML",
    "Sử dụng liên kết",
    "Sử dụng Emmet",
    "Tính thừa kế CSS",
    "Thẻ inline và block",
    "Đệm, viền, khoảng lề",
  ],
  [
    "Đơn vị trong CSS",
    "Làm việc với font chữ",
    "Làm việc với hình ảnh",
    "Làm việc với background",
    "Thuộc tính vị trí (position)",
    "Sử dụng biến trong CSS",
    "CSS selectors nâng cao",
    "Đặt tên class chuẩn BEM",
  ],
  [
    "Semantic trong HTML5",
    "Sử dụng Flexbox",
    "Sử dụng CSS Grid",
    "Forms và validations",
    "Responsive web design",
    "Grid system 12 columns",
    "Sử dụng Animations",
    "Hướng dẫn sử dụng Sass",
  ],
  [
    "Web accessibility",
    "Tìm hiểu về UI v UX",
    "Rèn luyện mắt thẩm mỹ",
    "Sử dụng Git, Githu",
    "Kiến thức SEO cơ bản",
    "Tra cứu thẻ HTML",
    "Tính hợp lệ của HTM",
    "Tìm hiểu pseudo-elements",
  ],
];

const differ_btn = [
  "Chuyên sâu và bài bản hơn",
  "Thực hành 8 dự án thực tế",
  "400+ bài học, 300+ bài tập",
  "200+ flashcards, 3+ games",
  "Đáp án cho mọi bài tập",
  "Kênh hỏi đáp riêng tư",
  "Tặng 20+ Figma bản Pro",
];

const landing_cmt = [
  {
    content:
      "Kiến thức siêu đầy đủ, chi tiết (vì chi tiết quá nên đôi lúc các bạn cũng sẽ tự lướt qua mà không muốn xem ấy :v). Các features đi kèm cực kỳ xịn sò mà các trang như Udemy, Udacity không có",
    avatar:
      "https://fullstack.edu.vn/landing/htmlcss/assets/avatars/feedback-1.jpg",
    user: "Nam Thanh",
    course: "Người học khóa HTML CSS Pro",
  },
  {
    content:
      "Flashcard ôn lại kiến thức lý thuyết cũng khá đầy đủ và bao quát, thoải mái sử dụng ( web , mobile ) đều được. Ghi chú : Note lại thoải mái luôn , cái note này là key của các anh chị đọc sách.",
    avatar:
      "https://fullstack.edu.vn/landing/htmlcss/assets/avatars/feedback-2.jpg",
    user: "Tuan Nguyen",
    course: "Người học khóa HTML CSS Pro",
  },
  {
    content:
      "Thích chỗ mỗi phần lý thuyết đều đi kèm 4-5 bài tập, bài nào làm không ra thì có 3-4 phương án gợi ý support luôn (từ gợi ý => gợi ý nhiều => so sánh => full đáp án). rất tiện lợi!",
    avatar:
      "https://fullstack.edu.vn/landing/htmlcss/assets/avatars/feedback-1.jpg",
    user: "Ngọc Đoàn",
    course: "Người học khóa HTML CSS Pro",
  },
  {
    content:
      "Quả thực không ngoa khi nói đây là khóa học đầy đủ và chi tiết nhất trên internet! Cảm ơn Anh Sơn và đội ngũ F8 đã nỗ lực tạo nên khóa học chất lượng như thế này ạ. Ngóng khóa JS Pro và React Pro ạ",
    avatar:
      "https://fullstack.edu.vn/landing/htmlcss/assets/avatars/feedback-2.jpg",
    user: "Khải Võ",
    course: "Người học khóa HTML CSS Pro",
  },
];

const footerColumns = [
  [
    "VỀ F8",
    "Giới thiệu",
    "Liên hệ",
    "Điều khoản",
    "Bảo mật",
    "Cơ hội việc làm",
  ],
  [
    "SẢN PHẨM",
    "Game Nester",
    "Game CSS Dinner",
    "Game CSS Selectors",
    "Game Froggy",
    "Game Froggy",
  ],
  [
    "CÔNG CỤ",
    "Tạo CV xin việc",
    "Rút gọn liên kết",
    "Clip-path maker",
    "Snippet generator",
    "Cảnh báo sờ tay lên mặt",
  ],
  [
    "CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC F8",
    "Mã số thuế: 0109922901",
    "Ngày thành lập: 04/03/2022",
    "Lĩnh vực: Công nghệ, giáo dục, lập trình.",
    "  F8 xây dựng và phát triển những sản phẩm mang lại giá trị cho cộng đồng.",
  ],
];

const Landing: React.FC = () => {
  return (
    <div id="landing">
      <div className="landing__container">
        <LandingHeader
          textColor="#fff"
          logo="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
          slogan="HỌC LẬP TRÌNH ĐỂ ĐI LÀM"
          menu={[
            "Tổng quan",
            "Nội dung khóa học",
            "Điểm khác biệt",
            "Thông số kỹ thuật",
            "Liên hệ",
          ]}
        />
        <LandingHero />

        <LandingVideo />

        <Row className="section__project" justify={"space-between"} align={"middle"}>
          <Col lg={11} md={12} xs={24} sm={24}>
            {" "}
            <LandingSection
              title="Thực hành 8 dự án với thiết kế trên Figma"
              content="Figma là công cụ thiết kế UI/UX hàng đầu thế giới hiện nay. Với 8 dự án thực hành trên Figma, bạn có thể tự làm lại hầu hết mọi giao diện trang web mà bạn thấy."
              btnText="Học thử ngay"
            />
          </Col>

          <Col className="section__prj__img" lg={11} md={12} xs={24} sm={24}>
            <img
              src="https://fullstack.edu.vn/landing/htmlcss/assets/img/project-2.png"
              alt=""
            />
            <img
              className="img_second"
              src="https://fullstack.edu.vn/landing/htmlcss/assets/img/project-4.png"
              alt=""
            />
            <img
              src="https://fullstack.edu.vn/landing/htmlcss/assets/img/glow-new.png"
              alt=""
            />
          </Col>
        </Row>

        <Row className="section__mentor" justify={"space-between"} >
          <Col lg={11} md={12} xs={24} sm={24}>
            <LandingSection
              title="Khóa học được thiết kế bởi Sơn Đặng"
              content="Sơn Đặng là CEO - Founder của Cộng Đồng Học Lập Trình F8. Hiện tại, anh vẫn là một Fullstack developer với hơn 8 năm kinh nghiệm làm việc thực tế."
              btnText="Tìm hiểu thêm"
            />
          </Col>
          <Col lg={6} md={12} xs={24} sm={24}>
            <img
            className="avatar"
              src="https://fullstack.edu.vn/landing/htmlcss/assets/img/mentor.jpg"
              alt=""
            />
            <img
            className="light"
              src="https://fullstack.edu.vn/landing/htmlcss/assets/img/flashcard-light.png"
              alt=""
            />
          </Col>
        </Row>

        <LandingContent landingMenu={landingContentMenu} />

        <Row className="section__flashcard" justify={"space-between"}>
          <Col lg={12} style={{ textAlign: "center",position:"relative" }} >
            <img
              src="https://fullstack.edu.vn/landing/htmlcss/assets/img/flashcards.png"
              alt=""
            />
            <img className="light" src="https://fullstack.edu.vn/landing/htmlcss/assets/img/flashcard-light.png" alt="" />
          </Col>
          <Col lg={11}>
            <LandingSection
              title="Không quên kiến thức với ứng dụng Flashcards"
              content="Việc ghi nhớ giờ đây không còn là vấn đề nữa. Flashcards là phương pháp ghi nhớ thông qua việc lặp lại, kiến thức trong khóa học sẽ được bạn ghi nhớ trong dài hạn."
              content_ps="Chỉ với chiếc điện thoại thông minh, giờ đây bạn có thể ôn lại kiến thức ở mọi lúc, mọi nơi."
              btnText="Truy cập FlasCards"
            />
          </Col>
        </Row>

        <Row className="section__differ" justify={"space-between"}>
          <Col lg={12} style={{ textAlign: "center" }}>
            <div className="differ__content">
              {differ_btn.map((btn) => (
                <LoginBtn
                  className="differ__btn"
                  icon={<CheckOutlined style={{ color: "white" }} />}
                  text={btn}
                />
              ))}
            </div>
            <img className="light" src="https://fullstack.edu.vn/landing/htmlcss/assets/img/glow-new.png" alt="" />
          </Col>
          <Col lg={11}>
            <LandingSection
              title="Điểm khác biệt giữa khóa học Pro và Free?"
              content="Nội dung đa dạng, đầy đủ và chuyên sâu hơn. Học trên nền tảng Pro với nhiều tính năng chuyên nghiệp như: gợi ý cách làm, xem đáp án, so sánh code, chữa bài tập, ghi chú cá nhân, và nhiều tính năng Pro khác."
              content_ps="Bạn chưa cần mua ngay lúc này. Nhấn vào nút dưới đây để trải nghiệm miễn phí."
              btnText="Trải nghiệm miễn phí"
            />
          </Col>
        </Row>
      </div>

      <LandingReason />

      <div className="landing__container">
        <div className="landing__comment">
          <h1>Mọi người nói gì về khóa học này?</h1>
          <Row justify={"space-between"} gutter={[34, 34]}>
            {landing_cmt.map((cmt) => (
              <LandingCard
                avatar={cmt.avatar}
                user={cmt.user}
                content={cmt.content}
                course={cmt.course}
              />
            ))}
          </Row>
        </div>

        <Row justify={"center"} className="landingFree">
          <Col lg={16} style={{ textAlign: "center" }}>
            <LandingSection
              title="Trải nghiệm miễn phí ngay hôm nay"
              content="Bắt đầu hoàn toàn miễn phí mà vẫn đầy đủ các tính năng của tài khoản Pro. Bạn chỉ thực sự trả tiền khi mọi thứ là xứng đáng."
              btnText="Học thử miễn phí"
              btnText_ps="Mua khóa học"
            />
          </Col>
        </Row>

        <Row justify={"center"}>
          <LandingSpecific />
        </Row>

        <div className="landingEnd">
          <div id="landingHero">
            <h1>
              <strong className="hightlight">Bắt đầu</strong> trở thành nhà phát
              triển chuyên nghiệp?
            </h1>
            <p>
              Bắt tay vào làm không khó, khó ở chỗ bao giờ thì chúng ta bắt đầu?
            </p>
            <div>
              <Buttonn size="large" className="landing_btn">
                Bắt đầu ngay <RightOutlined />
              </Buttonn>
            </div>
          </div>
        </div>
      </div>
      <Footer
        logo="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
        slogan="Học Lập Trình Để Đi Làm"
        email="Email: contact@fullstack.edu.vn"
        phone="Điện thoại: 0246.329.1102"
        address="Địa chỉ: Số 26 Dương Đình Nghệ, Phường Yên Hòa, Quận Cầu Giấy, TP.
              Hà Nội"
        columns={footerColumns}
      />
    </div>
  );
};

export default memo(Landing);
