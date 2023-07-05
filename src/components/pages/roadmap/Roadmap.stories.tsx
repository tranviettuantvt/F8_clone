import type { Meta, StoryObj } from "@storybook/react";
import Roadmap from "./RoadMap";
import { BrowserRouter } from "react-router-dom";
const meta = {
  title: "Page/Roadmap",
  component: Roadmap,
  tags: ["autodocs"],
} satisfies Meta<typeof Roadmap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => (
  <BrowserRouter>
    <Roadmap
    />
  </BrowserRouter>
);
