import { Text } from "@components/typography/Text";
import { HalfArrowLightIcon } from "@svgs/index";
import React from "react";
import { Link } from "react-router-dom";

type CrumbItem = {
  label: string;
  to?: string;
};

type BreadcrumbsProps = {
  items: CrumbItem[];
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex items-center" aria-label="브레드크럼">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        const Inner = (
          <>
            <HalfArrowLightIcon className="w-4 h-4 shrink-0" aria-hidden="true" />
            <Text variant="sub_heading4" className="text-gray-500">
              {item.label}
            </Text>
          </>
        );

        return (
          <div key={`${item.label}-${index}`} className="flex items-center">
            <div
              className="flex items-center justify-center px-3 py-2 rounded hover:bg-gray-100 cursor-pointer"
              aria-current={isLast ? "page" : undefined}
            >
              {item.to ? (
                <Link to={item.to} className="flex items-center gap-2">
                  {Inner}
                </Link>
              ) : (
                <span className="flex items-center gap-2">{Inner}</span>
              )}
            </div>
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
