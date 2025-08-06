import { Text } from "@components/typography/Text";
import { SlashIcon } from "@svgs/index";
import React from "react";

type BreadcrumbsProps = {
  pathSegments?: string[];
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ pathSegments = [] }) => {
  const renderSegment = (segment: string, isLast?: boolean) => (
    <div className="flex items-center">
      <div className="px-3 py-1 cursor-pointer hover:bg-gray-100 rounded-lg">
        <Text variant="sub_heading3" className={`text-gray-500 ${isLast ? "font-semibold" : ""}`}>
          {segment}
        </Text>
      </div>
    </div>
  );

  return (
    <nav className="flex items-center" aria-label="Breadcrumbs">
      {pathSegments.map((segment, index) => (
        <React.Fragment key={index}>
          {index > 0 && <SlashIcon />}
          {renderSegment(segment, index === pathSegments.length - 1)}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
