interface NoteItemDataProps {
  id: number;
  title: string;
  createdDate: string;
  modifiedDate: string;
  flashcardNum: number;
  color: string;
}

const NoteItemData: NoteItemDataProps[] = [
  {
    id: 1,
    title: "1차에서 5차까지 오답 노트 총정리",
    createdDate: "2024-08-20",
    modifiedDate: "2024-08-20",
    flashcardNum: 0,
    color: "sage",
  },
  {
    id: 2,
    title: "1차에서 5차까지 오답 노트 총정리",
    createdDate: "2024-08-20",
    modifiedDate: "2024-08-20",
    flashcardNum: 5,
    color: "sage",
  },
  {
    id: 3,
    title: "1차에서 5차까지 오답 노트 총정리",
    createdDate: "2024-08-20",
    modifiedDate: "2024-08-20",
    flashcardNum: 50,
    color: "sage",
  },
  {
    id: 4,
    title: "1차에서 5차까지 오답 노트 총정리",
    createdDate: "2024-08-20",
    modifiedDate: "2024-08-20",
    flashcardNum: 99,
    color: "sage",
  },
  {
    id: 5,
    title: "1차에서 5차까지 오답 노트 총정리",
    createdDate: "2024-08-20",
    modifiedDate: "2024-08-20",
    flashcardNum: 100,
    color: "sage",
  },
];

export default NoteItemData;
