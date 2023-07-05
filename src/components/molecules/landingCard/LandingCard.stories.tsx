import { Meta, Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import LandingCard from "./LandingCard";
import { LandingCardProps, LandingSectionProps } from "../../../constant/common";

const meta: Meta = {
  title: "Molecules/LandingCard",
  component: LandingCard,
  tags: ["autodocs"],
};

export default meta;

const Template: Story<LandingCardProps> = (args) => (
  <BrowserRouter>
    <LandingCard {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
    avatar:"https://fullstack.edu.vn/landing/htmlcss/assets/avatars/feedback-1.jpg",
    content:"Kiến thức siêu đầy đủ, chi tiết (vì chi tiết quá nên đôi lúc các bạn cũng sẽ tự lướt qua mà không muốn xem ấy :v). Các features đi kèm cực kỳ xịn sò mà các trang như Udemy, Udacity không có",
    user:"Nam Thanh",
    course:"Người học khóa HTML CSS Pro"
};
