import { FormBoxProps } from './types';

function FormBox(props: FormBoxProps) {
  const { children, title, desc } = props;
  return (
    <div className="w-[470px] min-w-[100%] p-[18px] sm:p-[30px] bg-my-frombox-bg rounded-lg shadow">
      <h2 className="font-semibold text-white text-center text-2xl mb-[10px]">{title}</h2>
      <p className="text-center text-[#B1AFCD] leading-[17px] text-sm w-[349px] m-auto max-w-full min-h-[34px]  ">
        {desc}
      </p>
      {children}
    </div>
  );
}

export default FormBox;
