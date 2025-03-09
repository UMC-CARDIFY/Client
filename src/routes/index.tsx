import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import { Archive, Flashcard, Home, Library, LoginPage, Mypage } from "../pages";
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
]);

export default router;
