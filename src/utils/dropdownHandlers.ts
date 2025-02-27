export const handleSelect = <T>(
  value: T,
  label: string,
  setSelected: (label: string) => void,
  onSelect: (value: T) => void,
  setIsOpen: (isOpen: boolean) => void,
) => {
  setSelected(label);
  onSelect(value);
  setIsOpen(false);
};

export const handleClearFilter = <T>(
  e: React.MouseEvent,
  setSelectedValue: (value: T) => void,
  onSelect: (value: T) => void,
  setIsOpen: (isOpen: boolean) => void,
  defaultValue: T,
) => {
  e.stopPropagation();
  setSelectedValue(defaultValue);
  onSelect(defaultValue);
  setIsOpen(false);
};
