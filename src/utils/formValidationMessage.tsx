const isRequired = (field: string) => {
  return `${field} is required`;
};

const isValid = (field: string) => {
  return `${field} must be valid`;
};

const isLength = (field: string) => {
  return `${field} must be atleast 8 characters long`;
};

const isStrength = (field: string) => {
  return `Please use a strong password ${field}`;
};

const isConfirm = (field: string) => {
  return `${field} doesnot match`;
};

export { isRequired, isValid, isLength, isStrength, isConfirm };
