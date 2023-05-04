import { useState,useEffect,useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, onChange, value }) {
  const [ddToggle, setddToggle] = useState(false);
  const ddEle = useRef();
  function clickHandler() {
    setddToggle(!ddToggle);
  }
  function clickOption(key) {
    onChange(key);
    clickHandler();
  }

  useEffect(()=>{
    const handler =(event)=>{
        if(!ddEle.current){
            return;
        }

        if(!ddEle.current.contains(event.target)){
            setddToggle(false);
        }
    }
    document.addEventListener('click',handler,true)
  },[])

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
    <div ref={ddEle} className="w-48 relative">
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
