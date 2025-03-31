import { MainFolderProps } from "@pages/archive/components/MainFolderList/MainFolderList";
import { FolderItem } from "@typedefs/folder-response";

export const mapToMainFolderProps = (folder: FolderItem): MainFolderProps => {
  return {
    folderId: folder.folderId,
    folderName: folder.name,
    createdAt: folder.createdAt,
    noteCount: folder.getNoteCount,
    folderColor: folder.color,
    markState: folder.markState === "ACTIVE",
  };
};
