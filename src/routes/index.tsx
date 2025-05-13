import NotesInsideFolderPage from "@pages/archive/pages/NotesInsideFolderPage";
import { createBrowserRouter } from "react-router-dom";
import NoteLayout from "src/layouts/noteLayout";
import { PATHS } from "../constants/paths";
import MainLayout from "../layouts/mainLayout";
import { Archive, Flashcard, Home, Library, LoginPage, Mypage } from "../pages";

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
        element: <Mypage />,
      },
    ],
  },
  {
    path: PATHS.LOGIN,
    element: <LoginPage />,
  },
  {
    path: PATHS.NOTE_EDITOR,
    element: <NoteLayout />,
  },
]);

export default router;
