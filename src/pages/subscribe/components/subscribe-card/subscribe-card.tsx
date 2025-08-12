import { Chip } from "@components/common/chip";
import { Text } from "@components/typography/Text";

interface SubscribeCardProps {
  type: "free" | "pro";
  userSubscription?: "free" | "pro";
}

export const SubscribeCard = ({ type, userSubscription }: SubscribeCardProps) => {
  const isCurrentSubscription = userSubscription === type;

  const cardData = {
    free: {
      title: "FREE",
      price: "₩0/월",
      description: "무료로 카디파이를 체험해 보세요.",
      badge: "구독 중인 요금제",
      outlineColor: "outline-gray-300",
      titleColor: "text-gray-700",
      bulletColor: "bg-gray-300",
      features: [
        "폴더 9개",
        "하위 폴더 9개",
        "폴더별 노트 9개",
        "노트별 이미지 카드 3개",
        "제한된 이미지 업로드",
        "플래시 카드 5회 학습 후 자동 보관",
      ],
    },
    pro: {
      title: "PRO",
      price: "₩4,900/월",
      description: "월 구독으로 학습의 제한을 풀어 보세요.",
      badge: "구독 중인 요금제",
      outlineColor: "outline-brand-300",
      titleColor: "text-brand-700",
      bulletColor: "bg-brand-300",
      features: [
        "무제한 폴더와 노트",
        "무제한 이미지 카드",
        "무제한 이미지 업로드",
        "플래시 카드 자동 보관 해제",
        "노트별 플래시 카드 학습 통계",
        "광고 제거",
      ],
    },
  } as const;

  const currentCard = cardData[type];

  return (
    <div
      className={`w-[19.18rem] h-[24.43rem] pt-8 pb-10 px-8 relative shrink-0 bg-white rounded-lg outline outline-1 ${currentCard.outlineColor}`}
    >
      <div className="flex flex-col justify-start items-start gap-2">
        <div className="flex flex-row items-center gap-3">
          <Text variant="heading4" className={`${currentCard.titleColor} leading-tight`}>
            {currentCard.title}
          </Text>
          {isCurrentSubscription && <Chip text={currentCard.badge} />}
        </div>

        <Text variant="caption1" className="justify-start text-gray-400 leading-tight">
          {currentCard.description}
        </Text>

        <Text variant="heading1" className="justify-start text-base-black mt-4 leading-tight">
          {currentCard.price}
        </Text>
      </div>

      <div className="inline-flex flex-col justify-start items-start gap-4 mt-10">
        {currentCard.features.map((feature, index) => (
          <div key={index} className="flex flex-row gap-4 self-stretch justify-start items-center">
            <div className={`w-2 h-2 ${currentCard.bulletColor} rotate-45`} />
            <Text variant="body2" className="justify-start text-gray-700 leading-tight">
              {feature}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};
