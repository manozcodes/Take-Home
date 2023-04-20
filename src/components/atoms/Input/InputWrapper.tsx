import React from 'react';
import { InputWrapperProps } from './types.d';

const InputWrapper: React.FC<InputWrapperProps> = ({ name, children, extendedClass = '' }) => {
  return (
    <label htmlFor={name} className={`flex flex-col ${extendedClass}`}>
      {children}
    </label>
  );
};

export default InputWrapper;
