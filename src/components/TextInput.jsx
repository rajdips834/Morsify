import React from "react";

function TextInput({ onTextChange }) {
  const handleChange = (event) => {
    onTextChange(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text to convert to Morse code"
        onChange={handleChange}
      />
    </div>
  );
}

export default TextInput;
