import NoteFilter from "@components/common/dropdown/NoteFilter";
import Sort from "@components/common/dropdown/Sort";
import { Text } from "@components/typography/Text";
import React, { useState } from "react";
import AddNoteButton from "../AddNoteButton/AddNoteButton";
import NoteList from "../components/NoteList/NoteList";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import FolderNameHeader from "../components/folderNameHeader/FolderNameHeader";
import InsideFolderList from "../components/insideFolderList/InsideFolderList";

const handleFolderSortSelect = (value: string) => {
  console.log("Sort selected:", value);
};

const handleNoteSortSelect = (value: string) => {
  console.log("Note Sort selected:", value);
};

const handleNoteFilterSelect = (value: string | null) => {
  console.log("Note Filter selected:", value);
};

const NotesInsideFolderPage = () => {
  const [username, setUsername] = useState("사용자");
  const [pathSegments, setPathSegments] = useState(["INSIDE ENGLISH4"]);
  const [folderName, setFolderName] = useState("INSIDE ENGLISH4");

  return (
    <div className="w-full flex justify-center">
      <div className="w-[50rem] mt-[2.5rem] flex flex-col">
        {/* Breadcrumbs */}
        <div className="self-start">
          <Breadcrumbs username={username} pathSegments={pathSegments} />
        </div>

        {/* FolderNameHeader */}
        <div>
          <FolderNameHeader folderName={folderName} color="sage" />
        </div>

        {/* InsideFolderList + SortDropdown + FolderFilterDropdown */}
        <div className="flex flex-col mt-[2.5rem] gap-[1rem]">
          <Text variant="sub_heading3" className="text-base-black ml-[0.5rem]">
            폴더
          </Text>
          <div className="z-10">
            <Sort onSelect={handleFolderSortSelect} />
          </div>
          <InsideFolderList />
        </div>

        {/* NoteList */}
        <div className="flex flex-col mt-[4rem] gap-[1rem]">
          <Text variant="sub_heading3" className="text-base-black ml-[0.5rem]">
            노트
          </Text>
          <div className="flex justify-between z-10">
            <div className="flex gap-2">
              <Sort onSelect={handleNoteSortSelect} />
              <NoteFilter onSelect={handleNoteFilterSelect} />
            </div>
            <AddNoteButton />
          </div>
          <NoteList />
        </div>
      </div>
    </div>
  );
};

export default NotesInsideFolderPage;
