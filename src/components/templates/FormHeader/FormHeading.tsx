import { FormHeadingProps } from './types.d';

const FormHeading = (props: FormHeadingProps) => {
  const { formTitle, formSubtitle } = props;
  return (
    <>
      <div className="pt-1 mb-1 text-2xl uppercase"> {formTitle}</div>
      <p className="text-[#B1AFCD] mb-7"> {formSubtitle}</p>
    </>
  );
};

export default FormHeading;
