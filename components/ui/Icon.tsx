
import React from 'react';

interface IconProps {
  name: string;
  className?: string;
}

const icons: { [key: string]: React.ReactNode } = {
  facebook: (
    <svg
      aria-label="Facebook"
      fill="currentColor"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M13.5 22.5H9.625V12H7.5v-3.75h2.125V5.625C9.625 3.5 11 2.25 14.125 2.25h3.375v3.75h-2.25c-.95 0-1.125.45-1.125 1.125V8.25h3.5l-.45 3.75h-3.05V22.5z"
      ></path>
    </svg>
  ),
};

const Icon: React.FC<IconProps> = ({ name, className }) => {
  return <div className={className}>{icons[name]}</div>;
};

export default Icon;
