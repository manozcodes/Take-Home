import { FC } from 'react';
import { InputLabelProps } from './types.d';

const InputLabel: FC<InputLabelProps> = ({ label }) => {
  return <div className="text-white text-sm leading-[17px] mb-2">{label}</div>;
};

export default InputLabel;
