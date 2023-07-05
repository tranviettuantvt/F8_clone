import { Meta, Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import LandingVideo from "./LandingVideo";

const meta: Meta = {
  title: "Molecules/LandingVideo",
  component: LandingVideo,
  tags: ["autodocs"],
};

export default meta;

const Template: Story = (args) => (
  <BrowserRouter>
    <LandingVideo {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
    
};
