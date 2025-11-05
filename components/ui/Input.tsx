
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
        className="block w-full px-3 py-2 text-sm bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 peer text-zinc-200 placeholder:text-zinc-400"
        {...props}
      />
    </div>
  );
};

export default Input;