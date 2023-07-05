import { Meta, Story } from "@storybook/react";
import LandingHero from "./LandingHero";
import { BrowserRouter } from "react-router-dom";

const meta: Meta = {
  title: "Molecules/LandingHero",
  component: LandingHero,
  tags: ["autodocs"],
};

export default meta;

const Template: Story = (args) => (
  <BrowserRouter>
    <LandingHero {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
    
};
