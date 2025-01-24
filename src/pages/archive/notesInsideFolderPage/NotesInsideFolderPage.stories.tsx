import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import NotesInsideFolderPage from "./NotesInsideFolderPage";

export default {
  title: "Archive/Pages/NotesInsideFolderPage",
  component: NotesInsideFolderPage,
} as Meta<typeof NotesInsideFolderPage>;

const Template: StoryFn<typeof NotesInsideFolderPage> = () => <NotesInsideFolderPage />;

export const Default = Template.bind({});
Default.args = {};
