import { Text } from "@components/typography/Text";
import { HalfArrowLightIcon } from "@svgs/index";
import { truncate } from "@utils/truncate";
import { Link } from "react-router-dom";

type CrumbItem = {
  label: string;
  to?: string;
};

export interface BreadcrumbsProps {
  items?: CrumbItem[];
}

export function Breadcrumbs({ items = [] }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center" aria-label="브레드크럼">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const displayLabel = truncate(item.label ?? "", 20);
        const isLink = !!item.to && !isLast;

        const Label = (
          <Text variant="sub_heading4" className="text-gray-500">
            {displayLabel}
          </Text>
        );

        return (
          <div key={`${item.label}-${index}`} className="flex items-center">
            {isLink ? (
              <Link to={item.to!} className="px-3 py-2 rounded hover:bg-gray-100 inline-flex items-center">
                {Label}
              </Link>
            ) : (
              <span className="px-3 py-2 rounded inline-flex items-center cursor-default">{Label}</span>
            )}

            {!isLast && (
              <HalfArrowLightIcon
                className="w-4 h-4 rotate-180 shrink-0 text-gray-300 ml-1.5 mr-1.5"
                aria-hidden="true"
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;
