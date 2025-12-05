/**
 * 문자열을 `max` 길이로 잘라 뒤에 `ellipsis`를 붙입니다.
 * (ellipsis 길이는 max에 포함되지 않음)
 *
 * ex. truncate("카디파이플래시카드노트", 8) → "카디파이플래시..."
 */
export function truncate(str: string, max = 16, ellipsis = "...") {
  if (!str) return "";
  const chars = Array.from(str);
  if (chars.length <= max) return str;
  return chars.slice(0, max).join("") + ellipsis;
}
