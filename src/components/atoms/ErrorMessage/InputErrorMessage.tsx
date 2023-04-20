import React from 'react';
import { Icon } from 'ts-react-feather-icons';
import { ErrorMessageProps } from './types.d';

const InputErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="flex items-center gap-1.5 mt-[5px] text-my-danger text-sm">
      <Icon name="alert-circle" size="17" />
      {message}
    </div>
  );
};

export default InputErrorMessage;
