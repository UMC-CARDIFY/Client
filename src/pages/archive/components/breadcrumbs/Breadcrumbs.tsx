import { Text } from "@components/typography/Text";
import { HalfArrowLightIcon } from "@svgs/index";
import React from "react";

type BreadcrumbsProps = {
  pathSegments?: string[];
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ pathSegments = [] }) => {
  return (
    <nav className="flex items-center" aria-label="Breadcrumbs">
      {pathSegments.map((segment, index) => {
        const isLast = index === pathSegments.length - 1;

        return (
          <div key={`${segment}-${index}`} className="flex items-center">
            <div
              className="flex items-center justify-center px-3 py-2 gap-2 rounded cursor-pointer hover:bg-gray-100"
              aria-current={isLast ? "page" : undefined}
            >
              <HalfArrowLightIcon className="w-4 h-4 flex" aria-hidden="true" />
              <Text variant="sub_heading4" className={`text-gray-500 ${isLast ? "font-semibold" : ""}`}>
                {segment}
              </Text>
            </div>
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
