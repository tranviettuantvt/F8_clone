import type { Meta, StoryObj } from "@storybook/react";
import Headerr from "./Headerr";
import { BrowserRouter } from "react-router-dom";
const meta = {
  title: "Organisms/Headerr",
  component: Headerr,
  tags: ["autodocs"],
} satisfies Meta<typeof Headerr>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default= ()=><BrowserRouter><Headerr logo="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png" slogan="Học Lập Trình Để Đi Làm" inputText="Tìm kiếm khóa học, bài viết, video, ..." loginBtn="Đăng nhập"/></BrowserRouter>
