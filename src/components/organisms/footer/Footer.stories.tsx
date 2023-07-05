import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Footerr from "./Footer";
const meta = {
  title: "Organisms/Footerr",
  component: Footerr,
  tags: ["autodocs"],
} satisfies Meta<typeof Footerr>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => (
  <BrowserRouter>
    <Footerr
      logo="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
      slogan="Học Lập Trình Để Đi Làm"
      email="Email: contact@fullstack.edu.vn"
      phone="Điện thoại: 0246.329.1102"
      address="Địa chỉ: Số 26 Dương Đình Nghệ, Phường Yên Hòa, Quận Cầu Giấy, TP.
              Hà Nội"
      columns={[
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
      ]}
    />
  </BrowserRouter>
);
