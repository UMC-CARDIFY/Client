import { colorMap } from "@styles/colorMap";

interface FolderItemDataProps {
  folderId: number;
  folderName: string;
  createdAt: string;
  noteCount: number;
  folderColor: keyof typeof colorMap;
  markState?: boolean;
}

const FolderItemData: FolderItemDataProps[] = [
  {
    folderId: 1,
    folderName: "포근한 핫팩",
    createdAt: "24/08/20",
    noteCount: 10,
    folderColor: "blue",
    markState: false,
  },
  {
    folderId: 2,
    folderName: "휴먼미디어인터랙션디자인개론",
    createdAt: "24/08/20",
    noteCount: 100,
    folderColor: "sage",
    markState: true,
  },
  {
    folderId: 3,
    folderName: "웹 디자인 잘하는 방법",
    createdAt: "24/08/20",
    noteCount: 100,
    folderColor: "orange",
    markState: false,
  },
];

// 80번까지 데이터 추가
for (let i = 4; i <= 100; i++) {
  FolderItemData.push({
    folderId: i,
    folderName: `폴더 ${i}`,
    createdAt: `24/08/${String(10 + (i % 20)).padStart(2, "0")}`,
    noteCount: Math.floor(Math.random() * 120),
    folderColor: ["blue", "ocean", "lavender", "mint", "sage", "gray", "orange", "coral", "rose", "plum"][
      Math.floor(Math.random() * 10)
    ] as keyof typeof colorMap,
    markState: Math.random() > 0.5,
  });
}

export default FolderItemData;
