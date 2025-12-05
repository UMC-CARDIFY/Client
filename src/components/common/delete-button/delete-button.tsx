import { CommonTrashIcon } from "@svgs/index";
import { cn } from "@utils/cn";
import type { ButtonHTMLAttributes } from "react";

type DeleteButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  ariaLabel?: string;
};

export default function DeleteButton({ className, ariaLabel = "삭제", ...props }: DeleteButtonProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center justify-center w-10 h-8",
        "rounded",
        "bg-alert-100 hover:bg-alert-200 active:bg-alert-300",
        "appearance-none focus:outline-none focus-visible:outline-none",
        className,
      )}
      {...props}
    >
      <CommonTrashIcon className="w-5 h-5" />
    </button>
  );
}
