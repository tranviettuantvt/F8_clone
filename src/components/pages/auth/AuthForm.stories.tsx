import type { Meta, Story } from "@storybook/react";
import AuthForm from "./AuthForm";
import { BrowserRouter } from "react-router-dom";

const meta: Meta = {
  title: "Molecules/AuthForm",
  component: AuthForm,
  tags: ["autodocs"],
};

export default meta;

type AuthFormProps = React.ComponentProps<typeof AuthForm>;

const Template: Story<AuthFormProps> = (args) => (
  <BrowserRouter>
    <AuthForm {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  auth: 0,
};
