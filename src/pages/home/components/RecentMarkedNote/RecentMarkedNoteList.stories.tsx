import { Meta, StoryFn } from "@storybook/react";
import RecentMarkedNoteList from "./RecentMarkedNoteList";

export default {
  title: "Home/Components/RecentMarkedNoteList",
  component: RecentMarkedNoteList,
  decorators: [(Story) => <Story />],
  argTypes: {
    items: {
      control: { type: "object" },
      description: "학습 예정 아이템 리스트",
    },
  },
} as Meta<typeof RecentMarkedNoteList>;

const Template: StoryFn<typeof RecentMarkedNoteList> = (args) => <RecentMarkedNoteList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      noteId: 1,
      name: "데이터베이스 관리 시스템",
      folderId: 1,
      folderName: "폴더1 이름",
      folderColor: "plum",
      markState: true,
      viewAt: "25/02/24",
      editDate: "24/05/06",
      createdAt: "24/05/06",
      isDownload: false,
      isUpload: false,
      flashCardCount: 0,
      content:
        "1. 네트워크 DBMS 계층 DBMS 2. 관계 DBMS 3. 객체지향 DBMS 객체관계 DBMS 4. → 객체지향 DBMS만 주력으로 사용하지는 않고, 관계형 DBMS와 함께 사용 이유: 객체지향 DBMS를 주로 사용하려면, 엄청 설계를 잘해야 됨 5. NoSQL DBMS → 비정형 데이터 처리를 위해 나옴 NewSQL DBMS → 관계 DBMS를 주로 사용하고 객체지향 DBMS를 곁들여서 쓰는 것",
    },
    {
      noteId: 2,
      name: "1차에서 5차까지 오답 노트 총정리",
      folderId: 2,
      folderName: "폴더2 이름",
      folderColor: "sage",
      markState: true,
      viewAt: "25/02/24",
      editDate: "24/05/06",
      createdAt: "24/05/06",
      isDownload: false,
      isUpload: false,
      flashCardCount: 99,
      content:
        "Design systems are often the unsung heroes of the products we use every day—from mobile apps and websites to the interfaces on television screens and car dashboards. They serve as the DNA for product design, encoding the principles and elements that define the very experience users interact with. Colors and icons convey meaning. Buttons are implemented with a consistent size and shape. Language is clear and understandable. If your design system does its job well, your end users hopefully don't spend too much time thinking about it at all",
    },
    {
      noteId: 3,
      name: "데이터베이스 관리 시스템의 발전 과정",
      folderId: 3,
      folderName: "폴더3 이름",
      folderColor: "lavender",
      markState: true,
      viewAt: "25/02/24",
      editDate: "24/05/06",
      createdAt: "24/05/06",
      isDownload: false,
      isUpload: false,
      flashCardCount: 100,
      content:
        "비정형 데이터를 처리하는 데 적합하고 확장성이 뛰어남 안정성과 일관성을 유지하기 위해서 복잡한 기능은 포기함 데이터 구조를 미리 정해두지 않고 유연성을 가진다 (스키마 같은 것들이 엄격하게 정해져 있지 않다) 여러 대의 컴퓨터에 데이터를 분산하여 저장하고 처리하는 환경에서 주로 사용함 (분산 처리) e.g. 몽고디비(MongoDB), H베이스(HBase)",
    },
  ],
};

export const SingleItem = Template.bind({});
SingleItem.args = {
  items: [
    {
      noteId: 1,
      name: "데이터베이스 관리 시스템",
      folderId: 1,
      folderName: "폴더 이름",
      folderColor: "plum",
      markState: true,
      viewAt: "25/02/24",
      editDate: "24/05/06",
      createdAt: "24/05/06",
      isDownload: false,
      isUpload: false,
      flashCardCount: 0,
      content:
        "1. 네트워크 DBMS 계층 DBMS 2. 관계 DBMS 3. 객체지향 DBMS 객체관계 DBMS 4. → 객체지향 DBMS만 주력으로 사용하지는 않고, 관계형 DBMS와 함께 사용 이유: 객체지향 DBMS를 주로 사용하려면, 엄청 설계를 잘해야 됨 5. NoSQL DBMS → 비정형 데이터 처리를 위해 나옴 NewSQL DBMS → 관계 DBMS를 주로 사용하고 객체지향 DBMS를 곁들여서 쓰는 것",
    },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  items: [],
};
