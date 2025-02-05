import FolderFilter from "@components/common/dropdown/FolderFilter";
import Kebab from "@components/common/dropdown/Kebab";
import NoteFilter from "@components/common/dropdown/NoteFilter";
import Sort from "@components/common/dropdown/Sort";
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

  const handleSortSelect = (value: string) => {
    console.log("정렬 기준 선택됨:", value);
  };

  const handleNoteFilterSelect = (value: string | null) => {
    console.log("노트 필터 적용됨:", value);
  };

  const handleFolderFilterSelect = (colors: string[]) => {
    console.log("폴더 필터 적용됨:", colors);
  };

  const handleKebabAction = (action: string) => {
    console.log("Kebab 메뉴 선택됨:", action);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[50rem] mt-[2.5rem] flex flex-col">
        {/* Breadcrumbs */}
        <div className="self-start">
          <Breadcrumbs username={username} pathSegments={pathSegments} />
        </div>

        {/* FolderNameHeader */}
        <div className="self-start">
          <FolderNameHeader folderName={folderName} color="sage" />
        </div>

        {/* InsideFolderList + SortDropdown + FolderFilterDropdown */}
        <div className="flex flex-col mt-[2.5rem] gap-[1rem]">
          <Text variant="sub_heading3" className="text-base-black ml-[0.5rem]">
            폴더
          </Text>
          <InsideFolderList />
        </div>
        <div className="flex gap-2">
          <FolderFilter onSelect={handleFolderFilterSelect} />
          <Sort onSelect={handleSortSelect} />
          <NoteFilter onSelect={handleNoteFilterSelect} />
          <Kebab onSelect={handleKebabAction} />
          <Kebab onSelect={handleKebabAction} withFolderMove />
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
