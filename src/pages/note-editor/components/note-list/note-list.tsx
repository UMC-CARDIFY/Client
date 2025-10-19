import { Text } from "@components/typography/Text";

interface NoteListProps {
  children: string;
}

export default function NoteList({ children }: NoteListProps) {
  return (
    <button type="button" className="px-3 py-2 rounded-[4px] hover:bg-gray-50 focus:bg-gray-100">
      <Text
        className="block text-base-black w-full text-start text-ellipsis whitespace-nowrap overflow-hidden"
        variant="sub_heading4"
      >
        {children}
      </Text>
    </button>
  );
}
