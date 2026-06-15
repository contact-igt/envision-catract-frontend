interface HighlightProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Highlight({ children, variant = 'primary' }: HighlightProps) {
  const baseStyles = "font-[800] text-sm md:text-[1.2rem] px-3.5 py-1.5 md:px-5 md:py-2.5 rounded-lg inline-block my-2 align-middle shadow-md hover:shadow-lg transition-shadow duration-300 mx-0.5 md:mx-2";
  
  const variantStyles = {
    primary: "text-[#c8e830] bg-gradient-to-r from-[#3b7dba] to-[#2c5a99]",
    secondary: "text-white bg-gradient-to-r from-[#a6c516] to-[#8fa813]"
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]}`}>
      {children}
    </span>
  );
}
