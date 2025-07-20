import * as React from "react";

export const CodeBlockIcon = React.memo(({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
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
        d="M0.390625 8.00022L3.69062 4.70022L4.63329 5.64289L2.27596 8.00022L4.63329 10.3576L3.69062 11.3002L0.390625 8.00022ZM5.85796 13.8189L8.84863 1.85889L10.142 2.18222L7.15196 14.1422L5.85796 13.8189ZM11.3666 10.3576L13.724 8.00022L11.3666 5.64289L12.31 4.70022L15.61 8.00022L12.31 11.3002L11.3666 10.3576Z"
        fill="currentColor"
      />
    </svg>
  );
});

CodeBlockIcon.displayName = "CodeBlockIcon";
