import { GradientButton } from '../../../../atoms';
import { TextField } from '../../../../molecules';
import { IHomepageFormProps } from './types.d';

const LeadGenerationForm = (props: IHomepageFormProps) => {
  const { isLoading, register, errors } = props;
  return (
    <>
      <TextField
        label="Full name"
        name="fullName"
        type="text"
        placeholder="Enter your full name"
        register={register}
        error={errors.fullName?.message}
      />
      <TextField
        label="Your Email"
        name="email"
        type="email"
        placeholder="johndoe@email.com"
        register={register}
        error={errors.email?.message}
      />
      <TextField
        label="Company name"
        name="companyName"
        type="text"
        placeholder="Enter company full name"
        register={register}
        error={errors.companyName?.message}
      />
      <TextField
        label="Your role"
        name="role"
        type="text"
        placeholder="Enter your role at the company"
        register={register}
        error={errors.role?.message}
      />
      <TextField
        label="Reason for choosing us"
        name="reason"
        type="text"
        placeholder="What do you think about out motto?"
        register={register}
        error={errors.reason?.message}
      />

      <div className="h-[12px]" />
      <GradientButton fullWidth text="Take me in!" type="submit" loading={isLoading} />
      <div className="text-sm text-center whitespace-normal sm:whitespace-nowrap">
        By continuing, you're agreeing to our{' '}
        <a href="#" className="text-bold text-[#53B9EA]">
          Terms and Conditions.
        </a>
      </div>
    </>
  );
};

export default LeadGenerationForm;
