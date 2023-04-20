import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormWrapper } from '../../../../templates';
import { ILeadFormValues } from './types.d';
import { leadFormValidation } from './validators';
import LeadGenerationForm from './LeadGenerationForm';
import LeadCancelForm from './LeadCancelForm';

const Index = (props: any) => {
  const { isCancelFormVisible } = props;
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    reset,
  } = useForm<ILeadFormValues>({
    resolver: yupResolver(leadFormValidation),
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  const onSubmit: SubmitHandler<ILeadFormValues> = (values) => {
    console.log({ values });
  };

  return (
    <>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        {isCancelFormVisible ? (
          <LeadCancelForm isLoading={false} errors={errors} register={register} />
        ) : (
          <LeadGenerationForm isLoading={false} errors={errors} register={register} />
        )}
      </FormWrapper>
    </>
  );
};

export default Index;
