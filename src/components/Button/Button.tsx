import React from 'react';

import './Button.scss';

interface ButtonProps {
  text: string;
  genderFilter: string;
  natFilter: string;
  action: (gender: string, nat: string) => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  action,
  genderFilter,
  natFilter,
}) => {
  return (
    <button className="Button" onClick={() => action(genderFilter, natFilter)}>
      {text}
    </button>
  );
};

export default Button;
