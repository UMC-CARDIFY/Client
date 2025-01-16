import { VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "../../utils/cn";
import { textVariants } from "./textVariants";

type TextProps = ComponentPropsWithoutRef<"span"> & VariantProps<typeof textVariants>;

export const Text = ({ variant, className, ...props }: TextProps) => {
  return <span className={cn(textVariants({ variant }), className)} {...props} />;
};
