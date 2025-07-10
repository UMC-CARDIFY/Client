import Editor from "@pages/note-editor/components/editor";
import Header from "@pages/note-editor/components/header/header";
import Sidebar from "@pages/note-editor/components/sidebar";

const NoteLayout = () => {
  return (
    <div className="h-screen flex overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-hidden">
          <Editor />
        </main>
      </div>
    </div>
  );
};

export default NoteLayout;
