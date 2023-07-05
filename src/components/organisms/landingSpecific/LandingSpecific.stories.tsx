import { Meta, Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import LandingSpecific from "./LandingSpecific";

const meta: Meta = {
  title: "Organisms/LandingSpecific",
  component: LandingSpecific,
  tags: ["autodocs"],
};

export default meta;

const Template: Story = (args) => (
  <BrowserRouter>
    <LandingSpecific {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
    
};
