import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Sort from "@components/common/dropdown/Sort";
import { PATHS } from "@routes/paths";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import FolderNameHeader from "../components/folderNameHeader/FolderNameHeader";
import InsideFolderList from "../components/insideFolderList/InsideFolderList";
import { useFolderList } from "../hooks/use-archive-folder";

const AllFolders = () => {
  const navigate = useNavigate();
  const { id: paramFolderId } = useParams();
  const parentFolderId = Number(paramFolderId);
  const isValidId = !Number.isNaN(parentFolderId);

  const [folderOrder, setFolderOrder] = useState<"edit-newest" | "edit-oldest" | "asc" | "desc">("edit-newest");

  const handleFolderSortSelect = (value: "edit-newest" | "edit-oldest" | "asc" | "desc") => setFolderOrder(value);

  const { folderTitle, folderColor, folderMarkState, foldersList } = useFolderList(
    isValidId ? { parentFolderId, order: folderOrder } : undefined,
  );

  const crumbs = [
    { label: "사용자의 아카이브", to: PATHS.ARCHIVE },
    { label: folderTitle || "" },
    { label: "전체 폴더" },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="w-[50rem] mt-[2.5rem] flex flex-col">
        <div className="self-start">
          <Breadcrumbs items={crumbs} />
        </div>

        <FolderNameHeader
          folderId={parentFolderId}
          folderName={folderTitle}
          color={folderColor}
          markState={folderMarkState}
          onDeleted={() => navigate(PATHS.ARCHIVE)}
        />

        <div className="flex flex-col mt-10 gap-4">
          <div className="z-10">
            <Sort selected={folderOrder} onSelect={handleFolderSortSelect} />
          </div>
          <InsideFolderList
            folders={foldersList.map((folder) => ({
              folderId: folder.folderId,
              folderName: folder.name,
              color: folder.color,
            }))}
            parentFolderId={parentFolderId}
            isAllFoldersView={true}
          />
        </div>
      </div>
    </div>
  );
};

export default AllFolders;
