import NotesInsideFolderPage from "@pages/archive/pages/NotesInsideFolderPage";
import { createBrowserRouter } from "react-router-dom";
import NoteLayout from "src/layouts/note-layout";
import MainLayout from "../layouts/mainLayout";
import { Archive, Flashcard, Home, Library, Login, MyPage, Subscribe } from "../pages";
import { PATHS } from "./paths";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: PATHS.HOME,
        element: <Home />,
      },
      {
        path: PATHS.ARCHIVE,
        element: <Archive />,
      },
      {
        path: `${PATHS.ARCHIVE}/:id`,
        element: <NotesInsideFolderPage />,
      },
      {
        path: PATHS.FLASHCARD,
        element: <Flashcard />,
      },
      {
        path: PATHS.LIBRARY,
        element: <Library />,
      },
      {
        path: PATHS.MYPAGE,
        element: <MyPage />,
      },
      {
        path: PATHS.SUBSCRIBE,
        element: <Subscribe />,
      },
    ],
  },
  {
    path: PATHS.LOGIN,
    element: <Login />,
  },
  {
    path: PATHS.NOTE_EDITOR,
    element: <NoteLayout />,
  },
]);

export default router;
