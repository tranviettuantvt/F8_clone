import type { Meta, StoryObj } from "@storybook/react";
import Blognav from "./Blognav";
import { BrowserRouter } from "react-router-dom";
const meta = {
  title: "Page/Blognav",
  component: Blognav,
  tags: ["autodocs"],
} satisfies Meta<typeof Blognav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => (
  <BrowserRouter>
    <Blognav
    />
  </BrowserRouter>
);
