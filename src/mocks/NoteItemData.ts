import { NoteItemProps } from "@typedefs";

const NoteItemData: NoteItemProps[] = [
  {
    noteId: 1,
    name: "오답 노트 총정리 1",
    folderId: 1,
    folderName: "폴더1",
    folderColor: "sage",
    markState: "INACTIVE",
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
    markState: "ACTIVE",
    viewAt: "2024-08-19",
    editDate: "2024-08-19",
    createdAt: "2024-08-19",
    isDownload: true,
    isUpload: false,
    flashCardCount: 10,
    content: "노트 내용 2",
  },
];

export default NoteItemData;
