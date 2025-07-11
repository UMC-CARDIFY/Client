import * as React from "react";

export const ListIcon = React.memo(({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
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
      <line x1="5" y1="4.75" x2="13" y2="4.75" stroke="currentColor" />
      <line x1="5" y1="8.5" x2="13" y2="8.5" stroke="currentColor" />
      <line x1="5" y1="12.75" x2="13" y2="12.75" stroke="currentColor" />
      <circle cx="3.25" cy="4.75" r="0.75" fill="currentColor" />
      <circle cx="3.25" cy="8.5" r="0.75" fill="currentColor" />
      <circle cx="3.25" cy="12.75" r="0.75" fill="currentColor" />
    </svg>
  );
});

ListIcon.displayName = "ListIcon";
