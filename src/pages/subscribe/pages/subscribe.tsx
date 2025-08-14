import { Text } from "@components/typography/Text";
import { LogoIcon } from "@svgs/index";
import { SubscribeCard } from "../components/subscribe-card/subscribe-card";

interface SubscribeProps {
  userSubscription?: "free" | "pro";
}

const Subscribe = ({ userSubscription = "free" }: SubscribeProps) => {
  const HEADINGS = [
    [
      { text: "무제한", className: "text-brand-700" },
      { text: "으로 기록하고, ", className: "text-gray-700" },
    ],
    [
      { text: "무한히 ", className: "text-brand-700" },
      { text: "성장하세요.", className: "text-gray-700" },
    ],
  ] as const;

  const SUBSCRIPTION = {
    free: {
      buttonColor: "BLUE",
      buttonText: "요금제 구독하기",
    },
    pro: {
      buttonColor: "SKYBLUE",
      buttonText: "무료 요금제로 돌아가기",
    },
  } as const;

  const { buttonColor, buttonText } = SUBSCRIPTION[userSubscription];

  return (
    <div className="w-full flex flex-col items-center p-10 bg-brand-10">
      <LogoIcon className="w-16 h-16 mb-8" />

      <div className="mb-8">
        {HEADINGS.map((line, idx) => (
          <Text key={idx} variant="heading2" className="leading-tight">
            {line.map((part, i) => (
              <span key={i} className={part.className}>
                {part.text}
              </span>
            ))}
          </Text>
        ))}
      </div>

      <div className="w-fit flex flex-col gap-8">
        <div className="flex flex-row gap-8">
          <SubscribeCard type="free" userSubscription={userSubscription} />
          <SubscribeCard type="pro" userSubscription={userSubscription} />
        </div>
        <Butto variant="LONG" color={buttonColor}>
          {buttonText}
        </Butto>
      </div>
    </div>
  );
};

export default Subscribe;
