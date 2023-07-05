import type { Meta, StoryObj } from "@storybook/react";
import Study from "./Study";
import { BrowserRouter } from "react-router-dom";
const meta = {
  title: "Page/Study",
  component: Study,
  tags: ["autodocs"],
} satisfies Meta<typeof Study>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => (
  <BrowserRouter>
    <Study
    />
  </BrowserRouter>
);
