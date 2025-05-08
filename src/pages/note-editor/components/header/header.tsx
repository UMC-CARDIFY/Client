import { EmptyStarIcon, KebabIcon, LinkIcon, StarIcon } from "@svgs/index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button";

const Header = () => {
  const route = useNavigate();
  const [isMark, setIsMark] = useState(false);

  const handleMark = () => {
    setIsMark(!isMark);
  };

  const handleClick = () => {
    route("/");
  };
  return (
    <header className="py-5 px-8 bg-white border min-w-[68rem] flex justify-between">
      <Button className="px-5" onClick={handleClick}>
        내 아카이브로 돌아가기
      </Button>
      <div className="flex gap-4 items-center">
        <button type="button" onClick={handleMark} className="cursor-pointer">
          {isMark ? <StarIcon /> : <EmptyStarIcon className="text-gray-350 m-[0.38rem]" />}
        </button>

        <Button className="px-3">저장</Button>
        <Button className="px-3">
          <LinkIcon />
          링크 공유
        </Button>
        <KebabIcon className="-ml-[0.125rem] cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
