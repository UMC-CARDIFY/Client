import { colorMap } from "@styles/colorMap";

type Color = keyof typeof colorMap;

export interface MainFolderItemProps {
  folderId: number;
  folderName: string;
  createdAt: string;
  noteCount: number;
  folderColor: Color;
  markState?: boolean;
}
