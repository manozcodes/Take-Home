import { Link } from 'react-router-dom';
import { GradientButton } from '../../../../atoms';
import { TextField } from '../../../../molecules';
import { IHomepageFormProps } from './types.d';

const LeadCancelForm = (props: IHomepageFormProps) => {
  const { isLoading, register, errors } = props;
  return (
    <>
      <TextField
        label="Reason for not choosing us"
        name="reason"
        type="text"
        placeholder="What do you think about out motto?"
        register={register}
        error={errors.reason?.message}
      />

      <div className="h-[12px]" />
      <GradientButton fullWidth text="Submit" type="submit" loading={isLoading} />
      <div className="text-sm text-center whitespace-normal sm:whitespace-nowrap">
        By continuing, you're agreeing to our{' '}
        <a href="#" className="text-bold text-[#53B9EA]">
          Terms and Conditions.
        </a>
      </div>
    </>
  );
};

export default LeadCancelForm;
