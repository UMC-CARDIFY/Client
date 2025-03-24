import { MainFolderProps } from "@pages/archive/components/MainFolderList/MainFolderList";
import { FolderItem } from "../types/folder-response";

export const mapToMainFolderProps = (folder: FolderItem): MainFolderProps => {
  return {
    id: folder.folderId,
    folderName: folder.name,
    createdAt: folder.createdAt,
    noteCount: folder.getNoteCount,
    folderColor: folder.color,
    markState: folder.markState === "ACTIVE",
  };
};
