
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, disabled, ...props }) => {
  return (
    <button
      className={`w-full py-2 px-4 rounded-lg font-semibold text-white transition-colors
        ${disabled ? 'bg-blue-500/50 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;