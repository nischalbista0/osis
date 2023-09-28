import React from "react";

const RadioButton = ({ id, name, label, defaultChecked, onChange }) => (
  <div className="flex gap-1">
    <input
      type="radio"
      id={id}
      name={name}
      defaultChecked={defaultChecked}
      onChange={onChange}
    />
    
    <label
      htmlFor={id}
      className={`text-[14px] font-medium ${
        defaultChecked ? "text-gray-900" : "text-gray-500"
      }`}
    >
      {label}
    </label>
  </div>
);

export default RadioButton;
