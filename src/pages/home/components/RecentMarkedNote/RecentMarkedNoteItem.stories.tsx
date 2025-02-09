import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import RecentMarkedNoteItem from "./RecentMarkedNoteItem";

export default {
  title: "Home/Components/RecentMarkedNoteItem",
  component: RecentMarkedNoteItem,
  argTypes: {
    name: {
      control: { type: "text" },
      description: "노트 이름",
    },
    content: {
      control: { type: "text" },
      description: "노트 내용",
    },
    folderColor: {
      control: { type: "text" },
      description: "폴더 색상",
    },
    editDate: {
      control: { type: "text" },
      description: "최근 수정일",
    },
    flashCardCount: {
      control: { type: "number" },
      description: "노트 내 플래시카드 개수",
    },
  },
} as Meta<typeof RecentMarkedNoteItem>;

const Template: StoryFn<typeof RecentMarkedNoteItem> = (args) => <RecentMarkedNoteItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "데이터베이스 관리 시스템",
  content:
    "1. 네트워크 DBMS 계층 DBMS 2. 관계 DBMS 3. 객체지향 DBMS 객체관계 DBMS 4. → 객체지향 DBMS만 주력으로 사용하지는 않고, 관계형 DBMS와 함께 사용 이유: 객체지향 DBMS를 주로 사용하려면, 엄청 설계를 잘해야 됨 5. NoSQL DBMS → 비정형 데이터 처리를 위해 나옴 NewSQL DBMS → 관계 DBMS를 주로 사용하고 객체지향 DBMS를 곁들여서 쓰는 것",
  folderColor: "plum",
  editDate: "24/05/06",
  flashCardCount: 0,
};
