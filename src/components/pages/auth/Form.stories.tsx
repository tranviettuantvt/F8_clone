import type { Meta, StoryObj } from "@storybook/react";
import Form from "./Form";
import { BrowserRouter } from "react-router-dom";
const meta = {
  title: "Molecules/Form",
  component: Form,
  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => (
  <BrowserRouter>
    <Form auth={0}
    />
  </BrowserRouter>
);
