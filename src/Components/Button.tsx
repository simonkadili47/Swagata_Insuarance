import React from 'react';

interface ButtonProps {
  label: string;
  className?: string;
  
}

const Button: React.FC<ButtonProps> = ({ label, className = '',  }) => {
  return (
    <button className={` ${className} px-4 py-2 rounded-full`}>
      {label}
    </button>
  );
  
};

export default Button;
