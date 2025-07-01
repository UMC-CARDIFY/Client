import { NoteItemProps } from "@typedefs";

const NoteItemData: NoteItemProps[] = [
  {
    noteId: 1,
    name: "오답 노트 총정리 1",
    folderId: 1,
    folderName: "폴더1",
    folderColor: "sage",
    markState: false,
    viewAt: "2024-08-20",
    editDate: "2024-08-20",
    createdAt: "2024-08-20",
    isDownload: false,
    isUpload: false,
    flashCardCount: 0,
    content: "노트 내용 1",
  },
  {
    noteId: 2,
    name: "오답 노트 총정리 2",
    folderId: 2,
    folderName: "폴더1",
    folderColor: "sage",
    markState: true,
    viewAt: "2024-08-19",
    editDate: "2024-08-19",
    createdAt: "2024-08-19",
    isDownload: true,
    isUpload: false,
    flashCardCount: 10,
    content: "노트 내용 2",
  },
];

// 90개 이상의 노트 추가
for (let i = 3; i <= 95; i++) {
  NoteItemData.push({
    noteId: i,
    name: `오답 노트 총정리 ${i}`,
    folderId: (i % 10) + 1,
    folderName: `폴더1`,
    folderColor: "sage",
    markState: i % 2 === 0,
    viewAt: `2024-08-${(i % 30) + 1}`,
    editDate: `2024-08-${(i % 30) + 1}`,
    createdAt: `2024-08-${(i % 30) + 1}`,
    isDownload: i % 3 === 0,
    isUpload: i % 4 === 0,
    flashCardCount: Math.min(i * 2, 99),
    content: `노트 내용 ${i}`,
  });
}

export default NoteItemData;
