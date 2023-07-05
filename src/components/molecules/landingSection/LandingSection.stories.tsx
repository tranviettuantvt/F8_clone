import { Meta, Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import LandingSection from "./LandingSection";
import { LandingSectionProps } from "../../../constant/common";

const meta: Meta = {
  title: "Molecules/LandingSection",
  component: LandingSection,
  tags: ["autodocs"],
};

export default meta;

const Template: Story<LandingSectionProps> = (args) => (
  <BrowserRouter>
    <LandingSection {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
    title:"Thực hành 8 dự án với thiết kế trên Figma",
    content:"Figma là công cụ thiết kế UI/UX hàng đầu thế giới hiện nay. Với 8 dự án thực hành trên Figma, bạn có thể tự làm lại hầu hết mọi giao diện trang web mà bạn thấy.",
    btnText:"Học thử ngay"
};
