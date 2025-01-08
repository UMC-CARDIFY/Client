import { clsx } from "clsx";

export function cn(...inputs: (string | undefined | null | boolean)[]): string {
  return clsx(inputs);
}
