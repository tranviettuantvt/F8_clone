import React, { memo } from "react";
import { Layout, Row, Col } from "antd";
import "./Footer.scss";
const { Footer } = Layout;

interface FooterrProps {
  logo: string;
  slogan: string;
  email: string;
  phone: string;
  address: string;
  columns: Array<Array<string>>;
}
const Footerr: React.FC<FooterrProps> = ({
  logo,
  slogan,
  email,
  phone,
  address,
  columns,
}) => {
  console.log(columns, logo);

  return (
    <Footer id="footer" style={{ textAlign: "center" }}>
      <div className="container">
        <Row
          className="footer__first"
          gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}
          justify={"space-between"}
        >
          <Col lg={6} md={24} sm={24} xs={24}>
            <div className="footer_mb">
              <img src={logo} alt="" />
              <h3 style={{ color: "white" }}>{slogan}</h3>
            </div>
            <ul>
              <li>{phone}</li>
              <li>{email}</li>
              <li>{address}</li>
            </ul>
          </Col>
          {columns.map((col) => (
            <Col lg={4} md={8} sm={24} xs={24}>
              <h3 className="footer_mb">{col[0]}</h3>
              <ul>
                {col.slice(1).map((cl) => (
                  <li>
                    <a href="">{cl}</a>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
      </div>
      <div className="footer__container">
        <Row
          className="footer__second"
          justify={"space-between"}
          align={"middle"}
        >
          <Col lg={11} md={12} sm={24} xs={24} className="footer__second__text">
            © 2018 - 2023 F8. Nền tảng học lập trình hàng đầu Việt Nam
          </Col>
          <Col lg={11} md={12} sm={24} xs={24} className="footer__second__svg">
            <a href="">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="youtube-square"
                className="svg-inline--fa fa-youtube-square "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                style={{ color: "#eb2c3b" }}
              >
                <path
                  fill="currentColor"
                  d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z"
                ></path>
              </svg>
            </a>
            <a href="">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-square"
                className="svg-inline--fa fa-facebook-square "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                style={{ color: "#4867aa" }}
              >
                <path
                  fill="currentColor"
                  d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.3V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0 -48-48z"
                ></path>
              </svg>
            </a>
            <a href="">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="tiktok"
                className="svg-inline--fa fa-tiktok "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                style={{ color: "#ccc" }}
              >
                <path
                  fill="currentColor"
                  d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.25V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.2 121.2 0 0 0 1.86 22.17h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.14z"
                ></path>
              </svg>
            </a>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default memo(Footerr);

{
  /* <Col lg={4} md={8} sm={24} xs={24}>
          <h3 className="footer_mb">VỀ F8</h3>
          <ul>
            <li>
              <a href="">Giới thiệu</a>
            </li>
            <li>
              <a href="">Liên hệ</a>
            </li>
            <li>
              <a href="">Điều khoản</a>
            </li>
            <li>
              <a href="">Bảo mật</a>
            </li>
            <li>
              <a href="">Cơ hội việc làm</a>
            </li>
          </ul>
        </Col>
        <Col lg={4} md={8} sm={24} xs={24}>
          <h3 className="footer_mb">SẢN PHẨM</h3>
          <ul>
            <li>
              <a href="">Game Nester</a>
            </li>
            <li>
              <a href="">Game CSS Diner</a>
            </li>
            <li>
              <a href="">Game CSS Selectors</a>
            </li>
            <li>
              <a href="">Game Froggy</a>
            </li>
            <li>
              <a href="">Game Froggy Pro</a>
            </li>
          </ul>
        </Col>
        <Col lg={4} md={8} sm={24} xs={24}>
          <h3 className="footer_mb">CÔNG CỤ</h3>
          <ul>
            <li>
              <a href="">Tạo CV xin việc</a>
            </li>
            <li>
              <a href="">Rút gọn liên kết</a>
            </li>
            <li>
              <a href="">Clip-path maker</a>
            </li>
            <li>
              <a href="">Snippet generator</a>
            </li>
            <li>
              <a href="">Cảnh báo sờ tay lên mặt</a>
            </li>
          </ul>
        </Col>
        <Col lg={6} md={24} sm={24} xs={24}>
          <h3 className="footer_mb">CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC F8</h3>
          <ul>
            <li>
              <a href="">Mã số thuế: 0109922901</a>
            </li>
            <li>
              <a href="">Ngày thành lập: 04/03/2022</a>
            </li>
            <li>
              <a href="">Lĩnh vực: Công nghệ, giáo dục, lập trình.</a>
            </li>
            <li>
              <a href="">
                F8 xây dựng và phát triển những sản phẩm mang lại giá trị cho
                cộng đồng.
              </a>
            </li>
          </ul>
        </Col> */
}
