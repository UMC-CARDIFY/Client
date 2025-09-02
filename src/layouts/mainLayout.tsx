import Footer from "@components/common/footer/footer";
import { Outlet } from "react-router-dom";
import Header from "../components/common/header/Header";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
