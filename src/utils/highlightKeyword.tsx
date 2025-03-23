export const highlightKeyword = (text: string, keyword: string) => {
  if (!keyword) return text;

  const parts = text.split(new RegExp(`(${keyword})`, "gi"));

  return parts.map((part, index) =>
    part.toLowerCase() === keyword.toLowerCase() ? (
      <span key={index} className="text-brand-700">
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    ),
  );
};
