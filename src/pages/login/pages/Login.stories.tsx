import { Meta, StoryFn } from "@storybook/react";
import Login from "./Login";

export default {
  title: "Pages/Login",
  component: Login,
} as Meta<typeof Login>;

const Template: StoryFn<typeof Login> = () => <Login />;

export const Default = Template.bind({});
