import { ArchiveNoteIcon, PlusIcon } from "@svgs/index";

const AddNoteButton: React.FC = () => {
  return (
    <button className="items-center inline-flex py-[0.5rem] pr-[0.5rem] pl-[0.62rem] gap-[0.125rem] bg-gray-100 rounded-lg hover:bg-gray-200">
      <ArchiveNoteIcon className="w-4 h-4 fill-gray-450" />
      <PlusIcon className="w-4 h-4" />
    </button>
  );
};

export default AddNoteButton;
