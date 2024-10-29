import React, { useState, ReactElement, ReactNode, MouseEvent } from "react";

interface TabProps {
  label: string;
  children: ReactNode;
}

interface TabsProps {
  children: ReactElement<TabProps>[];
}

// Tabs Component
const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string>(children[0].props.label);

  const handleClick = (
    e: MouseEvent<HTMLButtonElement>,
    newActiveTab: string,
  ) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-center max-w-md mx-auto rounded-xl">
        {children.map((child) => (
          <button
            key={child.props.label}
            className={`${
              activeTab === child.props.label ? "bg-gray-600 rounded-xl" : ""
            } flex justify-center items-center text-center text-white w-1/2 font-medium p-2`}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="py-4 transition-opacity duration-900 ease-in-out">
        {children.map((child) => (
          <div
            key={child.props.label}
            className={`${
              child.props.label === activeTab
                ? "opacity-100"
                : "opacity-0 h-0 overflow-hidden"
            } transition-all duration-900`}
          >
            {child.props.children}
          </div>
        ))}
      </div>
    </div>
  );
};

// Tab Component
const Tab: React.FC<TabProps> = ({ children }) => {
  return <div className="flex flex-col items-center justify-center">{children}</div>;
};

export { Tabs, Tab };