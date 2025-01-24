import { Text } from "@components/typography/Text";
import { SlashIcon } from "@svgs/index";
import React from "react";

type BreadcrumbsProps = {
  username: string;
  pathSegments?: string[];
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ username, pathSegments = [] }) => {
  const renderSegment = (segment: string, isUsername?: boolean) => (
    <div className="flex items-center">
      <div className="px-3 py-1 cursor-pointer hover:bg-gray-100 rounded-lg">
        <Text variant="sub_heading3" className={`text-gray-500 ${isUsername ? "font-semibold" : ""}`}>
          {segment}
        </Text>
      </div>
    </div>
  );

  return (
    <nav className="flex items-center" aria-label="Breadcrumbs">
      {renderSegment(`${username}의 아카이브`, true)}
      {pathSegments.map((segment, index) => (
        <React.Fragment key={index}>
          <SlashIcon />
          {renderSegment(segment)}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
