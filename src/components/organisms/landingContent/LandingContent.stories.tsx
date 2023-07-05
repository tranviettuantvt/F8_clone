import { Meta, Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import LandingContent from "./LandingContent";
import { LandingContentProps } from "../../../constant/common";

const meta: Meta = {
  title: "Organisms/LandingContent",
  component: LandingContent,
  tags: ["autodocs"],
};

export default meta;

const Template: Story<LandingContentProps> = (args) => (
  <BrowserRouter>
    <LandingContent {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  landingMenu: [
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
  ],
};
