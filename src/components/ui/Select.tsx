"use client";

import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
  options: string[];
  placeholder?: string;
  label?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ error, options, placeholder, label, className = "", ...props }, ref) => {
    const displayPlaceholder = placeholder || label || "Select an option";
    return (
      <div className="w-full relative group">
        <select
          ref={ref}
          defaultValue=""
          className={`w-full pl-6 pr-12 py-4 rounded-full border-2 focus:border-[#a6c516] outline-none transition-all bg-gray-50 focus:bg-white text-gray-600 font-bold appearance-none cursor-pointer text-sm md:text-base truncate ${error ? "border-red-400" : "border-gray-100"
            } ${className}`}
          {...props}
        >
          <option value="" disabled hidden>
            {displayPlaceholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* Custom Arrow Icon */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-focus-within:text-[#a6c516] transition-colors">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {error && <p className="text-red-500 text-xs mt-1 ml-4">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
