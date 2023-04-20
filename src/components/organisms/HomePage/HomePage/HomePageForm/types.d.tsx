/**
 * If any types need to create for this specific organism, write down
 */

import { FieldErrors, UseFormRegister } from 'react-hook-form';

export type IHomepageFormProps = {
  register: UseFormRegister<ILeadFormValues>;
  errors: FieldErrors<ILeadFormValues>;
  isLoading: boolean;
};

export type ILeadFormValues = {
  id?: number;
  fullName: string;
  email: string;
  companyName: string;
  role: string;
  reason: string;
};
