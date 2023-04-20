import { HTMLProps, ReactNode } from 'react';

export interface FormWrapperProps extends HTMLProps<HTMLFormElement> {
  children: ReactNode;
}
