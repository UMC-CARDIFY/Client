import { Text } from "@components/typography/Text";
import { InstagramIcon, LogoIcon, TistoryIcon } from "@svgs/index";
import Button from "../button/button";

export default function Footer() {
  return (
    <footer className="bg-gray-100 flex justify-center">
      <div className="w-[90rem] text-gray-600 pt-10 pb-14 px-80 flex flex-col gap-3">
        <LogoIcon className="w-12 h-12" />
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <Text variant="sub_heading4">서비스 이용약관</Text>
            <Text variant="sub_heading4">개인정보 처리방침</Text>
          </div>
          <div className="flex gap-2">
            <a href="https://cardify.tistory.com/" target="_blank" rel="noopener noreferrer">
              <Button variant="SIZE" size="M" className="bg-gray-200 hover:bg-gray-300">
                <TistoryIcon />
              </Button>
            </a>
            <a
              href="https://www.instagram.com/cardify_official?igsh=MXEyMDJqYmZnbjFtbA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="SIZE" size="M" className="bg-gray-200 hover:bg-gray-300">
                <InstagramIcon />
              </Button>
            </a>
          </div>
        </div>

        <div className="flex justify-between">
          <Text variant="sub_heading4">COPYRIGHT ©CARDIFY All rights reserved.</Text>
          <Text variant="sub_heading4">사업자 등록 번호 582-19-02138</Text>
        </div>
      </div>
    </footer>
  );
}
