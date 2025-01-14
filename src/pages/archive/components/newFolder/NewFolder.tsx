import { NewFolderIcon, PlusIcon } from "@svgs/index";
import React from "react";

const NewFolder = () => {
  return (
    <div className="w-[188px] py-3 rounded-lg border border-dashed border-gray-300 flex flex-row justify-center items-center hover:bg-gray-50 cursor-pointer">
      <NewFolderIcon />
      <PlusIcon />
    </div>
  );
};

export default NewFolder;
