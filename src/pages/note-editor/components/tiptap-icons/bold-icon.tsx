import * as React from "react";

export const BoldIcon = React.memo(({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
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
      <path
        fill="currentColor"
        d="M4.465 12.596V3.404H8.12c2.031 0 3.047.978 3.047 2.362 0 1.079-.698 1.752-1.65 1.967v.09c1.04.05 2.018.875 2.018 2.234 0 1.46-1.092 2.539-3.174 2.539H4.465ZM7.98 11.02c1.105 0 1.575-.457 1.575-1.142 0-.775-.584-1.32-1.524-1.32H6.37v2.463h1.612Zm-.14-3.77c.8 0 1.397-.444 1.397-1.18 0-.66-.482-1.118-1.358-1.118H6.37V7.25h1.472Z"
      />
    </svg>
  );
});

BoldIcon.displayName = "BoldIcon";
