import { Text } from "@components/typography/Text";

interface NoteListProps {
  children: string;
}

export default function NoteList({ children }: NoteListProps) {
  return (
    <button type="button" className="group px-3 py-2 rounded-[4px] hover:bg-brand-50 focus:bg-brand-100">
      <Text
        className="group-focus:text-brand-700 block text-base-black w-full text-start text-ellipsis whitespace-nowrap overflow-hidden"
        variant="sub_heading4"
      >
        {children}
      </Text>
    </button>
  );
}
