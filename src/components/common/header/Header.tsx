import { Text } from "@components/typography/Text";
import { Logo, MypageIcon, SearchIcon } from "@svgs/index";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

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
    <div className="w-screen justify-between px-20 py-5 flex flex-row">
      <Logo />
      <div className="gap-4 flex flex-row">
        <div className="gap-4 flex flex-row">
          {[
            { name: "홈", path: "/" },
            { name: "아카이브", path: "/archive" },
            { name: "플래시 카드", path: "/flashcard" },
            { name: "자료실", path: "/library" },
          ].map((item) => (
            <NavItem key={item.name} to={item.path}>
              {item.name}
            </NavItem>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-2.5 items-center justify-center">
        <div className="flex flex-row gap-3 w-60 py-1.5 px-6 bg-gray-100 items-center rounded-2xl">
          <SearchIcon />
          <Text variant="body3" className="text-gray-700 w-full">
            <input
              type="text"
              placeholder="통합 검색"
              className="w-full bg-transparent text-gray-700 focus:outline-none"
            ></input>
          </Text>
        </div>
        <button
          onClick={() => navigate("/mypage")}
          className="flex w-8 h-8 p-0.5 items-center justify-center flex-shrink-0 rounded-2xl bg-gray-100 cursor-pointer"
        >
          <MypageIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;
