import Dropdown from "./components/Dropdown";
import { useState } from "react";

function App() {
  const [optionSelected, setOptionSelected] = useState("Select");

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <div>
      <h1>Pick your favourite Color:</h1>
      <Dropdown
        options={options}
        value={optionSelected}
        onChange={setOptionSelected}
      />
    </div>
  );
}

export default App;
