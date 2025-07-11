import * as React from "react";

export const HighlighterIcon = React.memo(({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="32"
      height="32"
      className={className}
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="4" y="6.5" width="24" height="19" rx="1.5" fill="#F3F7FF" stroke="#A7C5FF" />
      <path
        d="M12.3906 22.5H10.334L14.9043 9.77344H17.1367L21.7246 22.5H19.668L18.5078 19.1426H13.5508L12.3906 22.5ZM14.1133 17.5254H17.9453L16.0645 12.0938H15.9766L14.1133 17.5254Z"
        fill="#1A1A1A"
      />
    </svg>
  );
});

HighlighterIcon.displayName = "HighlighterIcon";
