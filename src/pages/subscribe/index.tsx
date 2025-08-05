import Button from "@components/common/Button/Button";
import { Text } from "@components/typography/Text";
import { LogoIcon } from "@svgs/index";
import { SubscribeCard } from "./components/subscribe-card";

interface SubscribeProps {
  userSubscription?: "free" | "pro";
}

const Subscribe = ({ userSubscription = "pro" }: SubscribeProps) => {
  const isFree = userSubscription === "free";
  const buttonColor = isFree ? "blue" : "skyblue";
  const buttonText = isFree ? "요금제 구독하기" : "무료 요금제로 돌아가기";

  return (
    <div className="w-full flex flex-col items-center p-10 bg-brand-10">
      <LogoIcon className="w-16 h-16 mb-8" />

      <div className="mb-8">
        <Text variant="heading2" className="leading-tight">
          <span className="text-brand-700">무제한</span>
          <span className="text-gray-700">으로 기록하고, </span>
        </Text>
        <Text variant="heading2" className="leading-tight">
          <span className="text-brand-700">무한히 </span>
          <span className="text-gray-700">성장하세요.</span>
        </Text>
      </div>

      <div className="w-fit flex flex-col gap-8">
        <div className="flex flex-row gap-8">
          <SubscribeCard type="free" userSubscription={userSubscription} />
          <SubscribeCard type="pro" userSubscription={userSubscription} />
        </div>
        <Button variant="LONG" color={buttonColor}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Subscribe;
