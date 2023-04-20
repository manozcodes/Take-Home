/**
 * If any constant needs to use in this organism, write down below
 */

import { isRequired, isValid } from '../../../../../utils/formValidationMessage';

const createValidationMessage = (fieldName: string) => ({
  required: isRequired(fieldName),
  valid: isValid(fieldName),
});

const MESSAGES = {
  email: createValidationMessage('Email'),
};

export { MESSAGES };
