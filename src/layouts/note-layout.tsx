import { NoteEditorProvider } from "@contexts/note-editor-context";
import Editor from "@pages/note-editor/components/editor";
import Header from "@pages/note-editor/components/header/header";
import Sidebar from "@pages/note-editor/components/sidebar/sidebar";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useParams } from "react-router-dom";

const SIDEBAR_WIDTH = 352;
const DURATION = 0.35;

const NoteLayout = () => {
  const { noteId } = useParams<{ noteId: string }>();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  if (!noteId) {
    return <div>잘못된 접근입니다. noteId가 필요합니다.</div>;
  }

  return (
    <NoteEditorProvider noteId={Number(noteId)}>
      <motion.div className="h-screen flex overflow-hidden relative" layout>
        <motion.div
          aria-hidden
          initial={false}
          animate={{ width: isSidebarCollapsed ? SIDEBAR_WIDTH : 0 }}
          transition={{ duration: DURATION, ease: "easeInOut" }}
          style={{ width: isSidebarCollapsed ? SIDEBAR_WIDTH : 0 }}
        />

        <AnimatePresence initial={false}>
          {isSidebarCollapsed && (
            <motion.div
              key="sidebar-overlay"
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: SIDEBAR_WIDTH,
                zIndex: 40,
                willChange: "transform",
              }}
              initial={{ x: -24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -SIDEBAR_WIDTH, opacity: 1 }}
              transition={{ duration: DURATION, ease: "easeInOut" }}
            >
              <Sidebar isCollapsed={true} onToggle={() => setIsSidebarCollapsed((prev) => !prev)} />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="flex-1 flex flex-col overflow-hidden"
          layout
          transition={{ duration: DURATION, ease: "easeInOut" }}
        >
          <motion.div layout>
            <Header
              isSidebarCollapsed={isSidebarCollapsed}
              onOpenSidebar={() => setIsSidebarCollapsed((prev) => !prev)}
            />
          </motion.div>
          <main className="flex-1 overflow-hidden">
            <Editor />
          </main>
        </motion.div>
      </motion.div>
    </NoteEditorProvider>
  );
};

export default NoteLayout;
