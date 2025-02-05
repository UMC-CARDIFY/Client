import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import Pagination from "./Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    currentPage: {
      control: { type: "number" },
      description: "현재 페이지 번호",
    },
    totalPages: {
      control: { type: "number" },
      description: "총 페이지 수",
    },
    onPageChange: {
      action: "pageChanged",
      description: "페이지 변경 시 호출되는 콜백 함수",
    },
  },
} as Meta<typeof Pagination>;

const Template: StoryFn<typeof Pagination> = (args) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    args.onPageChange(page);
  };

  return <Pagination {...args} currentPage={currentPage} onPageChange={handlePageChange} />;
};

export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  totalPages: 10,
};

export const FewPages = Template.bind({});
FewPages.args = {
  currentPage: 1,
  totalPages: 3,
};

export const ManyPages = Template.bind({});
ManyPages.args = {
  currentPage: 5,
  totalPages: 20,
};

export const LastPage = Template.bind({});
LastPage.args = {
  currentPage: 10,
  totalPages: 10,
};
