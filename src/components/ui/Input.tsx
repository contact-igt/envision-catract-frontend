"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={`w-full px-6 py-4 rounded-full border-2 focus:border-[#a6c516] outline-none transition-all text-gray-800 font-bold placeholder-gray-400 bg-gray-50 focus:bg-white ${
            error ? "border-red-400" : "border-gray-100"
          } ${className}`}
          {...props}
        />
        {error && <p className="text-red-500 text-xs mt-1 ml-4">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
