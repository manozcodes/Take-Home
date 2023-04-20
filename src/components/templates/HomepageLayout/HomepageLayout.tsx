import { Icon } from 'ts-react-feather-icons';
import MutedButton from '../../atoms/Buttons/MutedButton';
import FormHeading from '../FormHeader/FormHeading';
import LeftColumn from './LeftColumn';
import { HomepageLayoutProps } from './types.d';

const HomepageLayout = (props: HomepageLayoutProps) => {
  const { children, formTitle, formSubtitle, setIsCancelFormVisible, setIsFormVisible } = props;

  const handleBack = () => {
    setIsFormVisible(false);
    setIsCancelFormVisible(false);
  };
  return (
    <div className="homepagelayout__wrapper">
      <div className="left w-[50%] hidden items-center justify-center md:flex bg-homepage-gradient bg-no-repeat bg-cover ">
        <div className="backdrop-blur px-12 bg-white bg-opacity-30 w-[470px] h-[448px] flex flex-col  items-center justify-center gap-7 font-light text-white text-base leading-5 border">
          <LeftColumn />
        </div>
      </div>
      <div className="right bg-my-darkbg w-[100%] md:w-[50%]  flex center min-h-screen  items-center justify-center overflow-y-auto py-7 sm:py-4">
        <div className="auth__form__wrapper w-96 min-w-[65%] text-white">
          <div className="pb-4 w-[10%]">
            <MutedButton
              fullWidth
              text={<Icon name="arrow-left-circle" size={22} />}
              onClick={() => handleBack()}
            ></MutedButton>
          </div>
          <FormHeading formTitle={formTitle} formSubtitle={formSubtitle} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default HomepageLayout;
