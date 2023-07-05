import type { Meta, StoryObj } from "@storybook/react";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";
const meta = {
  title: "Page/Home",
  component: Home,
  tags: ["autodocs"],
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => (
  <BrowserRouter>
    <Home
    />
  </BrowserRouter>
);
