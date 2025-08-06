import { NewfolderMainImage } from "@images/index";
import { useState } from "react";
import { usePostFolders } from "../../hooks/use-archive-folder";
import { AddFolderModal } from "../modal/AddFolderModal/AddFolderModal";

const NewFolderMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate } = usePostFolders();

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (folderName: string, folderColor: string) => {
    mutate(
      { name: folderName, color: folderColor },
      {
        onSuccess: () => {
          setIsOpen(false);
        },
      },
    );
  };

  return (
    <>
      <img
        onClick={handleClick}
        src={NewfolderMainImage}
        alt="new folder"
        className="w-[11.75rem] h-[11.75rem] cursor-pointer"
      />
      {isOpen && <AddFolderModal isOpen={isOpen} onClose={handleClose} onSubmit={handleSubmit} />}{" "}
    </>
  );
};

export default NewFolderMain;
