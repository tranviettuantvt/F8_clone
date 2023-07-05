import type { Meta, StoryObj } from "@storybook/react";
import Courses from "./Courses";
import FreeCourses from '../../../data/freeCourse.json'

import { BrowserRouter } from "react-router-dom";
const meta = {
  title: "Organisms/Courses",
  component: Courses,
  tags: ["autodocs"],
} satisfies Meta<typeof Courses>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => (
  <BrowserRouter>
    <Courses
    title="Bài viết nổi bật"
    coursesList={FreeCourses}
    />
  </BrowserRouter>
);
