import { SimpleEditor } from "../tiptap-templates/simple/simple-editor";
import "../tiptap-templates/simple/simple-editor.scss";

const Editor = () => {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <SimpleEditor />
    </div>
  );
};

export default Editor;
