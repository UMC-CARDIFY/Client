import { createBrowserRouter } from "react-router-dom";
import NoteLayout from "src/layouts/note-layout";
import MainLayout from "../layouts/mainLayout";
import {
  Archive,
  Flashcard,
  Home,
  Library,
  Login,
  MyPage,
  NotesInsideFolderPage,
  SubFolderPage,
  Subscribe,
} from "../pages";
import AllFolders from "../pages/archive/pages/all-folders";
import ProtectedRoute from "./ProtectedRoute";
import { PATHS } from "./paths";

const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
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
            path: PATHS.ARCHIVE_FOLDER,
            element: <NotesInsideFolderPage />,
          },
          {
            path: PATHS.ARCHIVE_SUB_FOLDER,
            element: <SubFolderPage />,
          },
          {
            path: PATHS.ARCHIVE_ALL_FOLDERS,
            element: <AllFolders />,
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
        path: PATHS.NOTE_EDITOR,
        element: <NoteLayout />,
      },
    ],
  },
  {
    path: PATHS.LOGIN,
    element: <Login />,
  },
]);

export default router;
