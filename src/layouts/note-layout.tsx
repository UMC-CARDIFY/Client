import Editor from "@pages/note-editor/components/editor";
import Header from "@pages/note-editor/components/header/header";
import Sidebar from "@pages/note-editor/components/sidebar/sidebar";
import { useState } from "react";

const NoteLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  return (
    <div className="h-screen flex overflow-hidden">
      <Sidebar isCollapsed={isSidebarCollapsed} onToggle={() => setIsSidebarCollapsed((prev) => !prev)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header isSidebarCollapsed={isSidebarCollapsed} onOpenSidebar={() => setIsSidebarCollapsed((prev) => !prev)} />
        <main className="flex-1 overflow-hidden">
          <Editor />
        </main>
      </div>
    </div>
  );
};

export default NoteLayout;
