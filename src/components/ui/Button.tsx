"use client";

import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "custom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  as?: "button" | "a";
  href?: string;
  loading?: boolean;
  loadingText?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#a6c516] text-white hover:bg-[#8fa813] shadow-lg hover:shadow-xl",
  secondary:
    "bg-[#3b7dba] text-white hover:bg-[#2c6396] shadow-lg hover:shadow-xl",
  outline:
    "border-2 border-[#a6c516] text-[#a6c516] hover:bg-[#a6c516] hover:text-white",
  custom: "",
};

const baseStyle =
  "inline-flex items-center justify-center px-8 py-3 rounded-full font-bold transition-all duration-300 text-center cursor-pointer";

export default function Button({
  children,
  variant = "primary",
  className = "",
  as: Tag = "button",
  href,
  loading = false,
  loadingText = "Processing...",
  disabled,
  ...props
}: ButtonProps) {
  const classes = `${baseStyle} ${variantStyles[variant]} ${className} ${
    (loading || disabled) ? "opacity-70 cursor-not-allowed" : ""
  }`;

  if (Tag === "a" && href) {
    return (
      <a target="_blank" href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button 
      className={classes} 
      disabled={loading || disabled} 
      {...props}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>{loadingText}</span>
        </div>
      ) : children}
    </button>
  );
}
