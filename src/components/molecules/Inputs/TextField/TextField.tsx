import { InputErrorMessage, InputLabel } from '../../../atoms';
import { InputWrapper } from '../../../templates';
import { TextFieldProps } from './types.d';

const TextField = (props: TextFieldProps) => {
  const { name, label, type, error, register, ...rest } = props;
  return (
    <InputWrapper name={name}>
      {label && <InputLabel label={label} />}
      <input
        type={type}
        className={`outline-0 h-10 px-3 rounded  bg-transparent border text-white  text-sm border-[#5B5A99] hover:border-[#53B9EA] ${
          error && 'border-my-danger'
        }`}
        {...rest}
        {...(register && register(name))}
      />
      {error && <InputErrorMessage message={error} />}
    </InputWrapper>
  );
};

export default TextField;
