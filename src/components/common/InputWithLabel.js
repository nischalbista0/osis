import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const InputWithLabel = ({ htmlFor, label, type, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full flex flex-col gap-1.5 items-start">
      <label
        htmlFor={htmlFor}
        className="text-[14px] uppercase text-gray-800 font-bold"
      >
        {label}
      </label>

      <div className="w-full flex items-center justify-between gap-4 border border-gray-400 rounded-md px-3 py-2">
        <input
          type={showPassword ? "text" : type}
          id={htmlFor}
          placeholder={placeholder}
          className="w-full text-[14px] outline-none font-medium placeholder:text-gray-300 placeholder:font-normal"
        />

        {type === "password" && (
          <div onClick={togglePasswordVisibility} className="cursor-pointer">
            {showPassword ? (
              <AiOutlineEyeInvisible className="w-5 h-5 text-gray-400" />
            ) : (
              <AiOutlineEye className="w-5 h-5 text-gray-400" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputWithLabel;
