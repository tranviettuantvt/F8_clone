import type { Meta, StoryObj } from "@storybook/react";
import Videos from "./Videos";
import Videoss from '../../../data/videos.json'

import { BrowserRouter } from "react-router-dom";
const meta = {
  title: "Organisms/Videos",
  component: Videos,
  tags: ["autodocs"],
} satisfies Meta<typeof Videos>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => (
  <BrowserRouter>
    <Videos
    title="Video nổi bật"
    videoList={Videoss}
    />
  </BrowserRouter>
);
