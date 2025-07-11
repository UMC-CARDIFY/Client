import * as React from "react";

export const TextColorIcon = React.memo(({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="32"
      height="32"
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.44336 22.3633H7L11.4824 9.63672H14.2949L18.7949 22.3633H16.3516L15.2969 19.2168H10.498L9.44336 22.3633ZM11.1133 17.3711H14.6816L12.9414 12.2383H12.8359L11.1133 17.3711Z"
        fill="#1A1A1A"
      />
      <rect x="20.7969" y="18.3633" width="4" height="4" rx="1" fill="#6698F5" />
    </svg>
  );
});

TextColorIcon.displayName = "TextColorIcon";
