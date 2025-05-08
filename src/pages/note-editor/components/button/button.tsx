import { cn } from "@utils/cn";

interface ButtonProps {
  children: string;
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return <button className={cn(className)}>{children}</button>;
}
