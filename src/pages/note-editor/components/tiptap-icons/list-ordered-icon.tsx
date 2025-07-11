import * as React from "react";

export const ListOrderedIcon = React.memo(({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="16"
      height="16"
      className={className}
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line x1="6" y1="4.75" x2="14" y2="4.75" stroke="currentColor" />
      <line x1="6" y1="12.75" x2="14" y2="12.75" stroke="currentColor" />
      <path
        d="M3.91892 2.53369V6.33309H3.1265V3.28413H3.10551L2.23438 3.8299V3.13194L3.17373 2.53369H3.91892Z"
        fill="currentColor"
      />
      <path
        d="M2.28091 14.931L2.27566 14.359L3.64009 13.1048C3.99694 12.7636 4.18586 12.5537 4.18586 12.2546C4.18586 11.9187 3.92872 11.7088 3.58237 11.7088C3.22552 11.7088 2.99461 11.9345 2.99461 12.2966H2.24418C2.23893 11.5514 2.78995 11.0791 3.59286 11.0791C4.40627 11.0791 4.94679 11.5409 4.94679 12.2021C4.94679 12.6324 4.73688 12.9893 3.95496 13.6978L3.3777 14.2593V14.2803H4.99927V14.931H2.28091Z"
        fill="currentColor"
      />
    </svg>
  );
});

ListOrderedIcon.displayName = "ListOrderedIcon";
