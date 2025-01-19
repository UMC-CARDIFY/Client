export const useColorUtils = () => {
  // 색상을 어둡게 만드는 함수
  const darkenColor = (hex: string, percent: number): string => {
    const num = Number.parseInt(hex.slice(1), 16);
    const r = Math.max(0, Math.min(255, ((num >> 16) - 255 * percent) | 0));
    const g = Math.max(0, Math.min(255, (((num >> 8) & 0x00ff) - 255 * percent) | 0));
    const b = Math.max(0, Math.min(255, ((num & 0x0000ff) - 255 * percent) | 0));
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
  };

  return { darkenColor };
};
