import React, { memo } from "react";
import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";

import Headerr from "../../organisms/header/Headerr";
import Sidebar from "../../organisms/sidebar/Sidebar";
import Footer from "../../organisms/footer/Footer";
import Homesvg from "../../../assets/home_svg.svg";
import Roapmapsvg from "../../../assets/roadmap_svg.svg";
import Studysvg from "../../../assets/study_svg.svg";
import Blogsvg from "../../../assets/blog_svg.svg";

const Fullstack: React.FC = () => {
  const file_svg = [
    { id: 0, link: "/", svg: Homesvg, name: "Home" },
    { id: 1, link: "/roadmap", svg: Roapmapsvg, name: "Lộ trình" },
    { id: 2, link: "/study", svg: Studysvg, name: "Học" },
    { id: 3, link: "/blogs", svg: Blogsvg, name: "Blogs" },
  ];

  const columns = [
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

  return (
    <div>
      <Headerr
        logo="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
        slogan="Học Lập Trình Để Đi Làm"
        inputText="Tìm kiếm khóa học, bài viết, video, ..."
        loginBtn="Đăng nhập"
      />
      <Row style={{ marginLeft: "0.5rem" }}>
        <Col lg={1} md={0} xs={0} sm={0}>
          <Sidebar
            sidebarItem={file_svg}
            sidebarPopOver={
              <div className="sidebar_popOver">
                <EditOutlined /> <span>Viet Blog</span>
              </div>
            }
          />
        </Col>
        <Col lg={23} md={24} xs={24} sm={24}>
          <Outlet />
        </Col>
      </Row>
      <Footer
        logo="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
        slogan="Học Lập Trình Để Đi Làm"
        email="Email: contact@fullstack.edu.vn"
        phone="Điện thoại: 0246.329.1102"
        address="Địa chỉ: Số 26 Dương Đình Nghệ, Phường Yên Hòa, Quận Cầu Giấy, TP.
              Hà Nội"
        columns={columns}
      />
    </div>
  );
};

export default memo(Fullstack);
