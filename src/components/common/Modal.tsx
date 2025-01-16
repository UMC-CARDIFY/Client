import { Text } from "@components/typography/Text";
import { IcCommonAlert } from "@svgs/index";

interface ModalProps {
  isOpen: boolean;
  title: string;
  description: string | JSX.Element;
  icon?: React.ReactNode;
  onClose: () => void;
  onSubmit?: () => void;
  cancelText?: string;
  confirmText?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  description,
  icon = <IcCommonAlert className="w-12 h-12 text-red-600" />,
  onClose,
  onSubmit,
  cancelText = "취소",
  confirmText = "확인",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="flex flex-col justify-center items-center w-[25rem] p-6 pt-10 pb-8 rounded-lg border border-gray-150 bg-white gap-6">
        <div className="flex justify-center items-center">{icon}</div>
        <Text variant="heading3" className="text-alert-500">
          {title}
        </Text>
        <div className="text-center">{description}</div>
        <div className="flex justify-center gap-3">
          <button onClick={onClose} className="h-8 px-5 py-1 rounded-md bg-gray-50 hover:bg-gray-200">
            <Text variant="sub_heading2" className="text-gray-700">
              {cancelText}
            </Text>
          </button>
          {onSubmit && (
            <button onClick={onSubmit} className="h-8 px-5 py-1 rounded-md bg-brand-50 hover:bg-brand-light">
              <Text variant="sub_heading2" className="text-brand-700">
                {confirmText}
              </Text>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
