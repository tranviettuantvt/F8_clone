import { Meta, Story } from "@storybook/react";
import LandingHeader from "./LandingHeader";
import { BrowserRouter } from "react-router-dom";
import { LandingHeaderProps } from "../../../constant/common";

const meta: Meta = {
  title: "Organisms/LandingHeader",
  component: LandingHeader,
  tags: ["autodocs"],
};

export default meta;

const Template: Story<LandingHeaderProps> = (args) => (
  <BrowserRouter>
    <LandingHeader {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
    textColor:"black",
  logo: "https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png",
  slogan: "HỌC LẬP TRÌNH ĐỂ ĐI LÀM",
  menu: [
    "Tổng quan",
    "Nội dung khóa học",
    "Điểm khác biệt",
    "Thông số kỹ thuật",
    "Liên hệ",
  ],
};
