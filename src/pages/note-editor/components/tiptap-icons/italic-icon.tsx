import * as React from "react";

export const ItalicIcon = React.memo(({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
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
        d="M11.8887 3.1875H5.98242C5.92227 3.1875 5.87305 3.23672 5.87305 3.29688V4.17188C5.87305 4.23203 5.92227 4.28125 5.98242 4.28125H8.45977L6.32695 11.7188H4.10938C4.04922 11.7188 4 11.768 4 11.8281V12.7031C4 12.7633 4.04922 12.8125 4.10938 12.8125H10.0156C10.0758 12.8125 10.125 12.7633 10.125 12.7031V11.8281C10.125 11.768 10.0758 11.7188 10.0156 11.7188H7.46445L9.59727 4.28125H11.8887C11.9488 4.28125 11.998 4.23203 11.998 4.17188V3.29688C11.998 3.23672 11.9488 3.1875 11.8887 3.1875Z"
        fill="currentColor"
      />
    </svg>
  );
});

ItalicIcon.displayName = "ItalicIcon";
