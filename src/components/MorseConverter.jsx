import React, { useState } from "react";
import ConverterInput from "./ConverterInput";
import ConverterOutput from "./ConverterOutput";
import ConvertButton from "./ConvertButton";

const MorseConverter = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleConvert = () => {
    // Morse code conversion logic here
    // For simplicity, set the output text directly
    setOutputText("... --- ..."); // Dummy Morse code
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <ConverterInput inputText={inputText} setInputText={setInputText} />
      <ConverterOutput outputText={outputText} />
      <ConvertButton onClick={handleConvert} />
    </div>
  );
};

export default MorseConverter;
