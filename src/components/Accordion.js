import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ accordionData }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  function clickHandler(currentIndex) {
    if (currentIndex === expandedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(currentIndex);
    }
  }

  const renderedData = accordionData.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => clickHandler(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedData}</div>;
}

export default Accordion;
