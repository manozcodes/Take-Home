import React from 'react';
import CircleLoader from '../Loaders/CircleLoader';
import { GradientButtonProps } from './types.d';

const GradientButton: React.FC<GradientButtonProps> = ({
  text,
  type = 'button',
  fullWidth = false,
  className = '',
  onClick,
  loading = false,
}) => {
  const btnClasses = `flex text-white hover:shadow-gradient-btn-hover items-center justify-center bg-gradient-btn rounded uppercase p-[10px] text-sm leading-4 font-bold ${
    fullWidth ? 'w-full' : ''
  } ${className}`;
  return (
    <button type={type} className={btnClasses} onClick={onClick}>
      {loading && <CircleLoader />}
      {text}
    </button>
  );
};

export default GradientButton;
