import { FormPageLayoutProps } from './types.d';

function FormPageLayout(props: FormPageLayoutProps) {
  const { children } = props;
  return <div className="h-screen w-full bg-my-darkbg flex flex-col items-center justify-center">{children}</div>;
}

export default FormPageLayout;
