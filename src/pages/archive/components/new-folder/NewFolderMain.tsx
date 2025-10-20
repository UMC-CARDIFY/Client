import { NewfolderMainImage } from "@images/index";
import { isFolderLimitError } from "@utils/errors";
import { useState } from "react";
import { usePostFolders } from "../../hooks/use-archive-folder";
import { AddFolderModal } from "../modal/AddFolderModal/AddFolderModal";

type NewFolderMainProps = {
  onLimitReached?: () => void;
};

const NewFolderMain: React.FC<NewFolderMainProps> = ({ onLimitReached }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate } = usePostFolders();

  const handleClick = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSubmit = (folderName: string, folderColor: string) => {
    mutate(
      { name: folderName, color: folderColor },
      {
        onSuccess: () => {
          setIsOpen(false);
        },
        onError: (err) => {
          setIsOpen(false);
          if (isFolderLimitError(err)) {
            onLimitReached?.();
          } else {
          }
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
      {isOpen && <AddFolderModal isOpen={isOpen} onClose={handleClose} onSubmit={handleSubmit} />}
    </>
  );
};

export default NewFolderMain;
