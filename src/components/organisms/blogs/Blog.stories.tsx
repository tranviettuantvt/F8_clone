import type { Meta, StoryObj } from "@storybook/react";
import Blogs from "./Blogs";
import Blogss from '../../../data/blogs.json'

import { BrowserRouter } from "react-router-dom";
const meta = {
  title: "Organisms/Blogs",
  component: Blogs,
  tags: ["autodocs"],
} satisfies Meta<typeof Blogs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => (
  <BrowserRouter>
    <Blogs
    title="Bài viết nổi bật"
    blogCardList={Blogss}
    />
  </BrowserRouter>
);
