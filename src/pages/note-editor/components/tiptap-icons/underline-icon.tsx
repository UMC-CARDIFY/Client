import * as React from "react";

export const UnderlineIcon = React.memo(({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
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
      <path d="M3.46094 14.1284H12.5393V14.9999H3.46094V14.1284Z" fill="#525252" />
      <path
        d="M10.4084 3H11.5369V9.00627C11.5369 10.8746 10.1451 12.2414 8.00089 12.2414C5.85669 12.2414 4.46484 10.8746 4.46484 9.00627V3H5.59337V8.9185C5.59337 10.2351 6.50873 11.1881 8.00089 11.1881C9.5056 11.1881 10.4084 10.2351 10.4084 8.9185V3Z"
        fill="currentColor"
      />
    </svg>
  );
});

UnderlineIcon.displayName = "UnderlineIcon";
