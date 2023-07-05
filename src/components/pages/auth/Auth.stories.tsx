import type { Meta, Story } from "@storybook/react";
import Auth from "./Auth";
import { BrowserRouter } from "react-router-dom";

const meta: Meta = {
  title: "Molecules/Auth",
  component: Auth,
  tags: ["autodocs"],
};

export default meta;

type AuthFormProps = React.ComponentProps<typeof Auth>;

const Template: Story<AuthFormProps> = (args) => (
  <BrowserRouter>
    <Auth {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  auth: 0,
};
