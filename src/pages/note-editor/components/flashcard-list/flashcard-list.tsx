interface FlashcardListProps {
  type: "TEXT" | "IMAGE";
}

export default function FlashcardList({ type }: FlashcardListProps) {
  return (
    <div className="py-10 px-8 border-b border-gray-150 hover:bg-brand-50 active:bg-brand-150">
      {type === "TEXT" ? <>텍스트</> : <>이미지</>}
    </div>
  );
}
