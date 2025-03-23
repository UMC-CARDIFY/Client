import { colorMap } from "@styles/colorMap";

export interface FolderItemDataProps {
  folderId: number;
  folderName: string;
  createdAt: string;
  noteCount: number;
  folderColor: keyof typeof colorMap;
  markState?: boolean;
}

export const mockFolderResults: FolderItemDataProps[] = [];

for (let i = 1; i <= 32; i++) {
  mockFolderResults.push({
    folderId: i,
    folderName: `디자인 관련 폴더 ${i}`,
    createdAt: `24/08/${String(3 + (i % 28)).padStart(2, "0")}`,
    noteCount: Math.floor(Math.random() * 120),
    folderColor: ["blue", "ocean", "lavender", "mint", "sage", "gray", "orange", "coral", "rose", "plum"][
      Math.floor(Math.random() * 10)
    ] as keyof typeof colorMap,
    markState: Math.random() > 0.5,
  });
}

export interface SearchNoteItem {
  noteId: number;
  name: string;
  folderId: number;
  folderName: string;
  folderColor: keyof typeof colorMap;
  markState: boolean;
  viewAt: string;
  editDate: string;
  createdAt: string;
  isDownload: boolean;
  isUpload: boolean;
  flashCardCount: number;
  content: string;
}

export const mockNoteResults: SearchNoteItem[] = [];

for (let i = 1; i <= 30; i++) {
  mockNoteResults.push({
    noteId: i,
    name: `디자인 노트 ${i}`,
    folderId: (i % 10) + 1,
    folderName: `디자인 폴더 ${(i % 10) + 1}`,
    folderColor: ["blue", "ocean", "lavender", "mint", "sage", "gray", "orange", "coral", "rose", "plum"][
      Math.floor(Math.random() * 10)
    ] as keyof typeof colorMap,
    markState: i % 2 === 0,
    viewAt: `25/02/${String((i % 28) + 1).padStart(2, "0")}`,
    editDate: `24/05/06`,
    createdAt: `24/05/06`,
    isDownload: i % 3 === 0,
    isUpload: i % 4 === 0,
    flashCardCount: Math.min(i * 3, 99),
    content:
      "웹디자인은 사용자 경험(UX)과 사용자 인터페이스(UI)를 최적화하여 웹사이트를 효과적으로 설계하는 과정입니다. 첫째, 사용자 중심의 디자인 원칙을 이해하고, 접근성 및 반응형 디자인을 고려해야 합니다. 둘째, 색상, 타이포그래피, 레이아웃 등 시각적 요소를 조화롭게 배치하여 시각적 일관성을 유지합니다. 셋째, 와이어프레임과 프로토타입 제작을 통해 초기 구상을 구체화하고, 개발자와 협업을 원활히 진행합니다. 마지막으로, 디자인의 결과물이 사용자 만족과 비즈니스 목표를 모두 충족하는지 지속적으로 테스트하고 개선해야 합니다.",
  });
}
