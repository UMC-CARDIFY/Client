import { Text } from "@components/typography/Text";
import React, { useState } from "react";
import NoteList from "../components/NoteList/NoteList";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import FolderNameHeader from "../components/folderNameHeader/FolderNameHeader";
import InsideFolderList from "../components/insideFolderList/InsideFolderList";

const NotesInsideFolderPage = () => {
  const [username, setUsername] = useState("사용자");
  const [pathSegments, setPathSegments] = useState(["INSIDE ENGLISH4"]);
  const [folderName, setFolderName] = useState("INSIDE ENGLISH4");

  return (
    <div className=" w-full flex justify-center">
      <div className="w-[50rem] mt-[2.5rem] flex flex-col">
        {/* Breadcrumbs */}
        <div className="self-start">
          <Breadcrumbs username={username} pathSegments={pathSegments} />
        </div>

        {/* FolderNameHeader */}
        <div className="self-start">
          <FolderNameHeader folderName={folderName} color="sage" />
        </div>

        {/* InsideFolderList */}
        <div className="flex flex-col mt-[2.5rem] gap-[1rem]">
          <Text variant="sub_heading3" className="text-base-black ml-[0.5rem]">
            폴더
          </Text>
          <InsideFolderList />
        </div>

        {/* NoteList */}
        <div className="flex flex-col mt-[4rem] gap-[1rem]">
          <Text variant="sub_heading3" className="text-base-black ml-[0.5rem]">
            노트
          </Text>
          <NoteList />
        </div>
      </div>
    </div>
  );
};

export default NotesInsideFolderPage;
