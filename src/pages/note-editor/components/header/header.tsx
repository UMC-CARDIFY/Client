import { EmptyStarIcon, StarIcon } from "@svgs/index";
import { useState } from "react";
import Button from "../button/button";

const Header = () => {
  const [isMark, setIsMark] = useState(false);

  const handleMark = () => {
    setIsMark(!isMark);
  };
  return (
    <header className="py-5 px-8 bg-white border min-w-[68rem] flex justify-between">
      <Button className="px-5">내 아카이브로 돌아가기</Button>
      <div className="flex gap-4">
        <button onClick={handleMark}>
          {isMark ? <StarIcon /> : <EmptyStarIcon className="text-gray-350 m-[0.38rem]" />}
        </button>

        <Button className="px-3">저장</Button>
        <Button className="px-3">링크 공유</Button>
      </div>
    </header>
  );
};

export default Header;
