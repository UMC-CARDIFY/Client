import MainFolderList from "@components/common/MainFolderList/MainFolderList";
import MainNoteList from "@components/common/MainNoteList/MainNoteList";
import { Text } from "@components/typography/Text";
import { mockFolderResults, mockNoteResults } from "@mocks/searchResultData";
import { useState } from "react";
import SectionTitle from "./components/SectionTitle";

export const Search = () => {
  const keyword = "디자인";
  const [isFolderExpanded, setIsFolderExpanded] = useState(false);
  const [isNoteExpanded, setIsNoteExpanded] = useState(false);

  const handleFolderExpand = () => {
    setIsFolderExpanded(true);
    setIsNoteExpanded(false);
  };

  const handleNoteExpand = () => {
    setIsNoteExpanded(true);
    setIsFolderExpanded(false);
  };

  const folderList = mockFolderResults;
  const noteList = mockNoteResults;

  return (
    <div className="px-20 py-12">
      <Text variant="sub_heading2">
        <span className="text-brand-500">{keyword}</span>에 대한 검색 결과입니다.
      </Text>

      {/* 폴더 섹션 */}
      {!isNoteExpanded && (
        <div className="mt-10">
          <SectionTitle title="폴더" count={folderList.length} />
          <MainFolderList folders={folderList} variant="search" maxItems={isFolderExpanded ? undefined : 8} />

          {!isFolderExpanded && (
            <div className="flex justify-end mt-4">
              <button onClick={handleFolderExpand}>
                <Text variant="body3" className="text-gray-400 underline">
                  전체보기
                </Text>
              </button>
            </div>
          )}
        </div>
      )}

      {/* 노트 섹션 */}
      {!isFolderExpanded && (
        <div className="mt-16">
          <SectionTitle title="노트" count={noteList.length} />
          <MainNoteList items={noteList} variant="search" maxItems={isNoteExpanded ? undefined : 6} />

          {!isNoteExpanded && (
            <div className="flex justify-end mt-4">
              <button onClick={handleNoteExpand}>
                <Text variant="body3" className="text-gray-400 underline">
                  전체보기
                </Text>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
