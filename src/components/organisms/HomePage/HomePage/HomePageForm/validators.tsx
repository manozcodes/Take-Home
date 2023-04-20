/**
 * If any validations is required for this specific organism, write validation logic down below
 */

import * as Yup from 'yup';
import { MESSAGES } from './constants';

export const leadFormValidation = Yup.object({
  fullName: Yup.string().required().label('Full name'),
  email: Yup.string().required(MESSAGES.email.required).email(MESSAGES.email.valid),
  companyName: Yup.string().required().label('Company name'),
  role: Yup.string().required().label('Role'),
});
