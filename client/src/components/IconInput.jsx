import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function IconInput({ icon, placeholder, onChange }) {
  const [inputValue, setInputValue] = useState("");

  const handleTextChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="mb-3 flex items-center rounded-md border bg-[#E9E9E9] p-2">
      <FontAwesomeIcon className="mr-2 text-gray-500" icon={icon} />
      <input
        className="w-full bg-[#E9E9E9] text-gray-700 placeholder-gray-500 focus:outline-none"
        placeholder={placeholder}
        type="text"
        value={inputValue}
        onChange={handleTextChange}
      />
    </div>
  );
}

export default IconInput;
