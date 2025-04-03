import { NewfolderMainImage } from "@images/index";
import { useState } from "react";
import { AddFolderModal } from "../modal/AddFolderModal/AddFolderModal";

const NewFolderMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <img
        onClick={handleClick}
        src={NewfolderMainImage}
        alt="new folder"
        className="w-[11.75rem] h-[11.75rem] cursor-pointer"
      />
      {isOpen && <AddFolderModal onClose={handleClose} />}
    </>
  );
};

export default NewFolderMain;
