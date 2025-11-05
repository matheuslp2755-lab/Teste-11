
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  'aria-label': string;
}

const Input: React.FC<InputProps> = ({ id, ...props }) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        className="block w-full px-3 py-2 text-sm bg-zinc-50 border border-zinc-300 rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:border-zinc-400 peer"
        {...props}
      />
    </div>
  );
};

export default Input;
