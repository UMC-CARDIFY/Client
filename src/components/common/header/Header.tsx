import { Text } from "@components/typography/Text";
import { PATHS } from "@routes/paths";
import { Logo, MypageIcon } from "@svgs/index";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SearchInput from "./SearchInput";
import { NAV_ITEMS } from "./nav";

const NavItem = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-6 py-2 ${isActive ? "bg-brand-50 text-brand-700" : "text-gray-500"} cursor-pointer rounded-lg`
    }
  >
    <Text variant="heading4" className="whitespace-nowrap">
      {children}
    </Text>
  </NavLink>
);

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen justify-between px-20 py-5 flex flex-row relative z-20 overflow-visible">
      <Logo />
      <div className="gap-4 flex flex-row">
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.name} to={item.path}>
            {item.name}
          </NavItem>
        ))}
      </div>
      <div className="flex flex-row gap-2.5 items-center justify-center">
        <SearchInput />
        <button
          onClick={() => navigate(PATHS.MYPAGE)}
          className="flex w-8 h-8 p-0.5 items-center justify-center flex-shrink-0 rounded-2xl bg-gray-100 cursor-pointer"
        >
          <MypageIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;
