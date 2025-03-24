import { colorMap } from "@styles/colorMap";

export function isValidColor(color: string): color is keyof typeof colorMap {
  return color in colorMap;
}

export function getSafeColor(color: string): string {
  return isValidColor(color) ? colorMap[color] : colorMap["gray"];
}
