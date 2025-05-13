import Editor from "@pages/note-editor/components/editor";
import Header from "@pages/note-editor/components/header/header";
import Sidebar from "@pages/note-editor/components/sidebar";

const NoteLayout = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1">
          <Editor />
        </main>
      </div>
    </div>
  );
};

export default NoteLayout;
