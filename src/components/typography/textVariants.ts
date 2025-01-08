import { cva } from "class-variance-authority";

export const textVariants = cva("", {
  variants: {
    variant: {
      heading2: "text-[1.25rem] font-[500] leading-normal tracking-[0px]",
      heading3: "text-[1.125rem] font-[600] leading-normal tracking-[0px]",
      heading4: "text-[0.875rem] font-[600] leading-normal tracking-[0px]",
      sub_heading1: "text-[0.9375rem] font-[500] leading-normal tracking-[0px]",
      sub_heading2: "text-[0.875rem] font-[500] leading-normal tracking-[0px]",
      sub_heading3: "text-[0.8125rem] font-[500] leading-normal tracking-[0px]",
      sub_heading4: "text-[0.75rem] font-[600] leading-normal tracking-[0px]",
      body1: "text-[1rem] font-[400] leading-normal tracking-[0px]",
      body2: "text-[0.875rem] font-[400] leading-normal tracking-[0px]",
      body3: "text-[0.75rem] font-[400] leading-normal tracking-[0px]",
      caption: "text-[0.75rem] font-[500] leading-normal tracking-[0px]",
    },
  },
});
