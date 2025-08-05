import { Outlet } from "react-router-dom";
import Header from "../components/common/header/Header";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
