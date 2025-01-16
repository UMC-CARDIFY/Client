import { ArchiveNoteIcon, PlusIcon } from "@svgs/index";

const AddNoteButton: React.FC = () => {
  return (
    <div className="items-center inline-flex py-[0.5rem] pr-[0.5rem] pl-[0.62rem] gap-[0.12rem] bg-gray-100 rounded-lg">
      <ArchiveNoteIcon />
      <PlusIcon />
    </div>
  );
};

export default AddNoteButton;