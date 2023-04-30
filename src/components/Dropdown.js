import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, onChange, value }) {
  const [ddToggle, setddToggle] = useState(false);

  function clickHandler() {
    setddToggle(!ddToggle);
  }
  function clickOption(key) {
    onChange(key);
    clickHandler();
  }

  const dropdownOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        key={option.value}
        onClick={() => clickOption(option.label)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={clickHandler}
      >
        {value} <GoChevronDown className="text-lg" />
      </Panel>
      {ddToggle && (
        <Panel className="absolute top-full">{dropdownOptions}</Panel>
      )}
    </div>
  );
}

export default Dropdown;
