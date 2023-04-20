import React from 'react';
import CircleLoader from '../Loaders/CircleLoader';
import { OutlineButtonProps } from './types.d';

const OutlineButton: React.FC<OutlineButtonProps> = ({
  text,
  type = 'button',
  fullWidth = false,
  className = '',
  loading = false,
  onClick,
}) => {
  const btnClasses = `flex text-[#8786AB] border border-[#5B5A99] bg-[transparent] hover:bg-transparent hover:border-[#22D1EE] hover:text-white  items-center justify-center  rounded uppercase p-[10px] text-sm leading-4 font-bold ${
    fullWidth ? 'w-full' : ''
  } ${className}`;
  return (
    <button type={type} className={btnClasses} onClick={onClick}>
      {loading && <CircleLoader />}
      {text}
    </button>
  );
};

export default OutlineButton;
