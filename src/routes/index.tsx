import { createBrowserRouter } from "react-router-dom";
import NoteLayout from "src/layouts/noteLayout";
import MainLayout from "../layouts/mainLayout";
import { Archive, Flashcard, Home, Library, LoginPage, Mypage, NotesInsideFolderPage } from "../pages";
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
        path: PATHS.FOLDER_DETAIL,
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
