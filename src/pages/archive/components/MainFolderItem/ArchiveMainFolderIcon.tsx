interface ArchiveMainFolderIconProps {
  fillColor: string;
}

export const ArchiveMainFolderIcon: React.FC<ArchiveMainFolderIconProps> = ({ fillColor }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
    <g clip-path="url(#clip0_2217_6018)">
      <path
        d="M6 54C4.35 54 2.938 53.413 1.764 52.239C0.59 51.065 0.002 49.652 0 48V12C0 10.35 0.588 8.938 1.764 7.764C2.94 6.59 4.352 6.002 6 6L35.2632 6L41.2632 13.6842H54C55.65 13.6842 57.063 14.2722 58.239 15.4482C59.415 16.6242 60.002 18.0362 60 19.6842V48C60 49.65 59.413 51.063 58.239 52.239C57.065 53.415 55.652 54.002 54 54H6Z"
        fill={fillColor}
      />
      <path
        d="M6 54C4.35 54 2.938 53.413 1.764 52.239C0.59 51.065 0.002 49.652 0 48V12C0 10.35 0.588 8.938 1.764 7.764C2.94 6.59 4.352 6.002 6 6L35.2632 6L41.2632 13.6842H54C55.65 13.6842 57.063 14.2722 58.239 15.4482C59.415 16.6242 60.002 18.0362 60 19.6842V48C60 49.65 59.413 51.063 58.239 52.239C57.065 53.415 55.652 54.002 54 54H6Z"
        fill="black"
        fill-opacity="0.2"
      />
      <path
        d="M6 54C4.35 54 2.938 53.413 1.764 52.239C0.59 51.065 0.002 49.652 0 48V12C0 10.35 0.588 8.938 1.764 7.764C2.94 6.59 4.352 6.002 6 6L19.7895 6L25.7895 13.6842H54C55.65 13.6842 57.063 14.2722 58.239 15.4482C59.415 16.6242 60.002 18.0362 60 19.6842V48C60 49.65 59.413 51.063 58.239 52.239C57.065 53.415 55.652 54.002 54 54H6Z"
        fill={fillColor}
      />
    </g>
    <defs>
      <clipPath id="clip0_2217_6018">
        <rect width="60" height="60" fill="white" />
      </clipPath>
    </defs>
  </svg>
);