import React, { FC } from 'react';
import { FormWrapperProps } from './types.d';

const FormWrapper: FC<FormWrapperProps> = ({ children, ...rest }) => {
  return (
    <form className="form flex flex-col gap-[10px]" {...rest}>
      {children}
    </form>
  );
};

export default FormWrapper;
