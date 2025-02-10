interface FolderItemDataProps {
  id: number;
  folderName: string;
  createdAt: string;
  noteCount: number;
  folderColor: string;
  markState?: boolean;
}

const FolderItemData: FolderItemDataProps[] = [
  {
    id: 1,
    folderName: "포근한 핫팩",
    createdAt: "24/08/20",
    noteCount: 10,
    folderColor: "blue",
    markState: false,
  },
  {
    id: 2,
    folderName: "휴먼미디어인터랙션디자인개론",
    createdAt: "24/08/20",
    noteCount: 100,
    folderColor: "sage",
    markState: true,
  },
  {
    id: 3,
    folderName: "웹 디자인 잘하는 방법",
    createdAt: "24/08/20",
    noteCount: 100,
    folderColor: "orange",
    markState: false,
  },
];

// 4번부터 80번까지 데이터 추가
for (let i = 4; i <= 100; i++) {
  FolderItemData.push({
    id: i,
    folderName: `폴더 ${i}`,
    createdAt: `24/08/${String(10 + (i % 20)).padStart(2, "0")}`, // 날짜 랜덤화
    noteCount: Math.floor(Math.random() * 120), // 노트 개수 랜덤화 (0~120)
    folderColor: ["blue", "sage", "orange", "rose", "mint", "gray", "plum"][Math.floor(Math.random() * 7)], // 랜덤 색상 선택
    markState: Math.random() > 0.5, // 50% 확률로 즐겨찾기 활성화
  });
}

export default FolderItemData;
