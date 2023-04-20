import React from 'react';
import CircleLoader from '../Loaders/CircleLoader';
import { MutedButtonProps } from './types.d';

const MutedButton: React.FC<MutedButtonProps> = ({
  text,
  type = 'button',
  fullWidth = false,
  className = '',
  loading = false,
  onClick,
}) => {
  const btnClasses = `flex text-[#B1AFCD] border border-[#5b5a99] bg-[#5B5A99] hover:bg-transparent hover:border-[#22D1EE] hover:text-white  items-center justify-center  rounded uppercase p-[10px] text-sm leading-4 font-bold ${
    fullWidth ? 'w-full' : ''
  } ${className}`;
  return (
    <button type={type} className={btnClasses} onClick={onClick}>
      {loading && <CircleLoader />}
      {text}
    </button>
  );
};

export default MutedButton;
