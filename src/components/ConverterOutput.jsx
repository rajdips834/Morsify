import React from "react";

const ConverterOutput = ({ outputText }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="outputText"
      >
        Morse Code:
      </label>
      <textarea
        id="outputText"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={outputText}
        readOnly
      />
    </div>
  );
};

export default ConverterOutput;
