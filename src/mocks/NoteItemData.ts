interface NoteItemDataProps {
  noteId: number;
  name: string;
  folderId: number;
  folderName: string;
  folderColor: string;
  markState: boolean;
  viewAt: string;
  editDate: string;
  createdAt: string;
  isDownload: boolean;
  isUpload: boolean;
  flashCardCount: number;
}

const NoteItemData: NoteItemDataProps[] = [
  {
    noteId: 1,
    name: "1차에서 5차까지 오답 노트 총정리",
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
  },
  {
    noteId: 2,
    name: "1차에서 5차까지 오답 노트 총정리",
    folderId: 1,
    folderName: "폴더1",
    folderColor: "sage",
    markState: false,
    viewAt: "2024-08-20",
    editDate: "2024-08-20",
    createdAt: "2024-08-20",
    isDownload: false,
    isUpload: false,
    flashCardCount: 1,
  },
  {
    noteId: 3,
    name: "1차에서 5차까지 오답 노트 총정리",
    folderId: 1,
    folderName: "폴더1",
    folderColor: "sage",
    markState: false,
    viewAt: "2024-08-20",
    editDate: "2024-08-20",
    createdAt: "2024-08-20",
    isDownload: false,
    isUpload: false,
    flashCardCount: 50,
  },
  {
    noteId: 4,
    name: "1차에서 5차까지 오답 노트 총정리",
    folderId: 1,
    folderName: "폴더1",
    folderColor: "sage",
    markState: false,
    viewAt: "2024-08-20",
    editDate: "2024-08-20",
    createdAt: "2024-08-20",
    isDownload: false,
    isUpload: false,
    flashCardCount: 99,
  },
  {
    noteId: 5,
    name: "1차에서 5차까지 오답 노트 총정리",
    folderId: 1,
    folderName: "폴더1",
    folderColor: "sage",
    markState: false,
    viewAt: "2024-08-20",
    editDate: "2024-08-20",
    createdAt: "2024-08-20",
    isDownload: false,
    isUpload: false,
    flashCardCount: 100,
  },
];

export default NoteItemData;
