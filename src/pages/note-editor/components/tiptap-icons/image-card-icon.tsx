import * as React from "react";

export const ImageCardIcon = React.memo(({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
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
      <g clip-path="url(#clip0_841_8539)">
        <mask id="path-2-inside-1_841_8539" fill="white">
          <rect y="2.13306" width="16.0006" height="11.7338" rx="0.49968" />
        </mask>
        <rect
          y="2.13306"
          width="16.0006"
          height="11.7338"
          rx="0.49968"
          stroke="currentColor"
          stroke-width="1.99872"
          stroke-linecap="round"
          stroke-linejoin="round"
          mask="url(#path-2-inside-1_841_8539)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.999359 3.13242V12.8675H15.0013V3.13242H0.999359ZM0.499679 2.13306C0.223714 2.13306 0 2.35677 0 2.63274L0 13.3672C0 13.6431 0.223714 13.8669 0.49968 13.8669H15.501C15.7769 13.8669 16.0006 13.6431 16.0006 13.3672V2.63274C16.0006 2.35677 15.7769 2.13306 15.501 2.13306H0.499679Z"
          fill="currentColor"
        />
        <path d="M4.49744 9.62813L0.5 13.1259H15.4904V6.13037L7.49551 12.1265L4.49744 9.62813Z" fill="currentColor" />
        <path
          d="M2 4.93159C2 4.48976 2.35817 4.13159 2.8 4.13159H9.2C9.64183 4.13159 10 4.48976 10 4.93159V7.33159C10 7.77342 9.64183 8.13159 9.2 8.13159H2.8C2.35817 8.13159 2 7.77342 2 7.33159V4.93159Z"
          fill="currentColor"
        />
        <path
          d="M3.37109 8.13159H2.7998C2.56775 8.13154 2.36094 8.03068 2.21484 7.8728L5.95703 4.13159H7.37109L3.37109 8.13159ZM9.2002 4.13159C9.32614 4.13162 9.4448 4.16175 9.55078 4.21362L5.63281 8.13159H4.21973L8.21973 4.13159H9.2002ZM9.95215 4.66089C9.98259 4.74546 9.99998 4.83635 10 4.9314V6.02808L7.89648 8.13159H6.48242L9.95215 4.66089ZM10 7.33179C9.99989 7.77346 9.64187 8.13149 9.2002 8.13159H8.74414L10 6.87573V7.33179ZM2 7.23999V5.82593L3.69434 4.13159H5.1084L2 7.23999ZM2 4.97729V4.9314C2.00011 4.48972 2.35813 4.1317 2.7998 4.13159H2.8457L2 4.97729Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_841_8539">
          <path
            d="M0 3.2C0 1.43269 1.43269 0 3.2 0H12.8C14.5673 0 16 1.43269 16 3.2V12.8C16 14.5673 14.5673 16 12.8 16H3.2C1.43269 16 0 14.5673 0 12.8V3.2Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
});

ImageCardIcon.displayName = "ImageCardIcon";
