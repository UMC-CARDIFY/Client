import { ArchiveNoteIcon, PlusIcon } from "@svgs/index";

const AddNoteButton: React.FC = () => {
  return (
    <div className="items-center inline-flex py-[0.5rem] pr-[0.5rem] pl-[0.62rem] gap-[0.12rem] bg-gray-100 rounded-lg cursor-pointer">
      <ArchiveNoteIcon className="fill-gray-450" />
      <PlusIcon className="w-4 h-4" />
    </div>
  );
};

export default AddNoteButton;
