import * as React from "react";

export const BlankCardIcon = React.memo(({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="16"
      height="16"
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask id="path-2-inside-1_841_8555" fill="white">
        <rect y="2" width="16" height="12" rx="0.5" />
      </mask>
      <rect
        y="2"
        width="16"
        height="12"
        rx="0.5"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="square"
        stroke-linejoin="round"
        stroke-dasharray="4 4"
        mask="url(#path-2-inside-1_841_8555)"
      />
      <path
        d="M9.5 5.90234H9V6.90234H9.5V5.90234ZM12.7581 6.90234C13.0343 6.90234 13.2581 6.67849 13.2581 6.40234C13.2581 6.1262 13.0343 5.90234 12.7581 5.90234V6.90234ZM9.5 6.40234V6.90234H12.7581V6.40234V5.90234H9.5V6.40234Z"
        fill="currentColor"
      />
      <path
        d="M9.5 9.09595H9V10.0959H9.5V9.09595ZM11.5363 10.0959C11.8125 10.0959 12.0363 9.87209 12.0363 9.59595C12.0363 9.3198 11.8125 9.09595 11.5363 9.09595V10.0959ZM9.5 9.59595V10.0959H11.5363V9.59595V9.09595H9.5V9.59595Z"
        fill="currentColor"
      />
      <path
        d="M8.5 2C8.77614 2 9 2.22386 9 2.5V13.5C9 13.7761 8.77614 14 8.5 14H0.5C0.223858 14 0 13.7761 0 13.5V2.5C1.28852e-07 2.22386 0.223858 2 0.5 2H8.5ZM4.07324 10.4277H5.04492V9.40723H4.07324V10.4277ZM4.56055 5.42578C3.58702 5.42601 3.00589 6.32288 3.00586 7.05859H3.7832C3.78324 6.68549 4.09606 6.24243 4.56055 6.24219C5.02875 6.24219 5.33884 6.67069 5.33887 7.05859C5.33887 7.26399 5.23859 7.35875 4.91504 7.60742H4.91406C4.62395 7.82996 4.17188 8.177 4.17188 8.89648H4.9502C4.9502 8.62004 5.08041 8.49102 5.37402 8.26562L5.41895 8.23145C5.68574 8.02931 6.11621 7.70274 6.11621 7.05859C6.11618 6.29992 5.53119 5.42578 4.56055 5.42578Z"
        fill="currentColor"
      />
    </svg>
  );
});

BlankCardIcon.displayName = "BlankCardIcon";
