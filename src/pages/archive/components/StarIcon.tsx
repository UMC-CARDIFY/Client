interface StarIconProps {
  width?: number; // 기본값: 16
  height?: number; // 기본값: 16
  fillColor?: string; // 기본값: #FFD338
}

export const StarIcon: React.FC<StarIconProps> = ({ width = 16, height = 16, fillColor = "#FFD338" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 16" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.59673 15.2394C3.37664 15.3551 3.11943 15.1682 3.16146 14.9231L4.00191 10.023L0.440576 6.55294C0.262469 6.3794 0.360703 6.07695 0.606794 6.04119L5.52671 5.32623L7.72806 0.867209C7.83812 0.644264 8.15605 0.644284 8.26608 0.867243L10.4667 5.32623L15.3867 6.0412C15.6328 6.07696 15.731 6.37938 15.5529 6.55293L11.9923 10.023L12.8335 14.9231C12.8755 15.1682 12.6183 15.3551 12.3982 15.2394L7.99711 12.9262L3.59673 15.2394Z"
      fill={fillColor}
    />
  </svg>
);
