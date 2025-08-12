import { cva } from "class-variance-authority";

export const textVariants = cva("", {
  variants: {
    variant: {
      title: "text-4xl font-medium leading-normal tracking-normal",

      heading1: "text-[1.625rem] font-medium leading-normal tracking-normal",
      heading2: "text-[1.375rem] font-medium leading-normal tracking-normal",
      heading3: "text-lg font-medium leading-normal tracking-normal",
      heading4: "text-[1.0625rem] font-semibold leading-normal tracking-normal",
      heading5: "text-sm font-medium leading-normal tracking-normal",

      sub_heading1: "text-xl font-normal leading-normal tracking-normal",
      sub_heading2: "text-[0.9375rem] font-normal leading-normal tracking-normal",
      sub_heading3: "text-sm font-normal leading-normal tracking-normal",
      sub_heading4: "text-[0.8125rem] font-normal leading-normal tracking-normal",
      sub_heading5: "text-xs font-medium leading-normal tracking-normal",

      body1: "text-base font-light leading-normal tracking-normal",
      body2: "text-sm font-light leading-normal tracking-normal",
      body3: "text-xs font-light leading-normal tracking-normal",

      caption1: "text-xs font-normal leading-normal tracking-normal",
    },
  },
});
