import { useState } from 'react';
import { HomePageForm } from '../../components/organisms';
import { HomepageLayout } from '../../components/templates';
import { LeaderGenerationBox } from '../../components/organisms/HomePage/HomePage/LeadGeneration';

const HomePage = () => {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [isCancelFormVisible, setIsCancelFormVisible] = useState<boolean>(false);

  return (
    <>
      <HomepageLayout
        formTitle={isFormVisible ? 'Your Information' : 'Lead approval request'}
        formSubtitle={
          isFormVisible
            ? 'We use this information to enable better user experience'
            : 'We aim to inspire and empower individuals to create positive change and make a meaningful impact through our resources, tools, and community. Join us today to be part of a movement towards a better world.'
        }
        setIsFormVisible={setIsFormVisible}
        setIsCancelFormVisible={setIsCancelFormVisible}
      >
        {isFormVisible || isCancelFormVisible ? (
          <HomePageForm isCancelFormVisible={isCancelFormVisible} />
        ) : (
          <LeaderGenerationBox setIsFormVisible={setIsFormVisible} setIsCancelFormVisible={setIsCancelFormVisible} />
        )}
      </HomepageLayout>
    </>
  );
};

export default HomePage;
