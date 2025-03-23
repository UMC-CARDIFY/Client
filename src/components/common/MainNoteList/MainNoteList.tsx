import Pagination from "@components/common/pagination/Pagination";
import EmptyState from "@pages/archive/components/EmptyState/EmptyState";
import RecentMarkedNoteItem from "@pages/home/components/RecentMarkedNote/RecentMarkedNoteItem";
import { NoteItemProps } from "@types/note";
import React, { useState } from "react";

interface NoteListProps {
  items?: NoteItemProps[];
  maxItems?: number; // 검색 초기 상태 6개 제한
  variant?: "home" | "search";
  layout?: "grid" | "row"; // 강제 레이아웃 지정 가능
}

const ITEMS_PER_PAGE = 12;

const MainNoteList: React.FC<NoteListProps> = ({ items = [], maxItems, variant = "search", layout }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const paginated = !maxItems;
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const displayedItems = maxItems
    ? items.slice(0, maxItems)
    : items.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const isGrid = layout === "grid" || (!layout && variant === "search");

  if (!items.length) {
    return <EmptyState type="favoriteNote" />;
  }

  return (
    <div className="w-full">
      <div className={isGrid ? "grid grid-cols-3 gap-4" : "flex flex-row gap-4"}>
        {displayedItems.map((item) => (
          <RecentMarkedNoteItem key={item.noteId} {...item} />
        ))}
      </div>

      {paginated && totalPages > 1 && (
        <div className="mt-14 mb-[4.69rem] flex justify-center">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      )}
    </div>
  );
};

export default MainNoteList;
