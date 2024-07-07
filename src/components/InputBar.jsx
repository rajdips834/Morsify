import React, { useState } from "react";
import "./InputBar.css";
import { conversion } from "./conversion";

const Input = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    console.log(inputValue);
    const convertedValue = conversion(inputValue);
    setInput(inputValue);
    setOutput(convertedValue);
  };

  return (
    <div>
      <input
        type="text"
        className="main-input"
        placeholder="Write to translate"
        onChange={handleInputChange}
      />
      <div className="output">{output}</div>
    </div>
  );
};

export default Input;
