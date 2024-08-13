import React from "react";

const ConverterInput = ({ inputText, setInputText }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="inputText"
      >
        Enter Text:
      </label>
      <textarea
        id="inputText"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type text here..."
      />
    </div>
  );
};

export default ConverterInput;
