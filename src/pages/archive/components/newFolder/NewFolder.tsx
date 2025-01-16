import { NewfolderImage } from "@images/index";
import React from "react";

const NewFolder = () => {
  return (
    <img src={NewfolderImage} alt="new folder" className="w-[11.75rem] h-[3rem] hover:bg-gray-50 cursor-pointer" />
  );
};

export default NewFolder;
