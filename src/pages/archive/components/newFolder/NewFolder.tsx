import { NewfolderImage } from "@images/index";

interface NewFolderProps {
  onClick: () => void;
}

const NewFolder: React.FC<NewFolderProps> = ({ onClick }) => {
  return (
    <img
      src={NewfolderImage}
      alt="new folder"
      className="w-[11.75rem] h-[3rem] hover:bg-gray-50 cursor-pointer"
      onClick={onClick}
    />
  );
};

export default NewFolder;
