import React from 'react';
import { Helmet } from 'react-helmet-async';
import EnglishLevelOnboarding from '../components/EnglishLevelOnboarding';

const Assessment: React.FC = () => {
  const handleOnboardingComplete = (data: any) => {
    console.log('Assessment completed:', data);
    // Data is already sent to backend in the component
  };

  const handleOnboardingSkip = () => {
    // Redirect to home or show other options
    window.location.href = '/';
  };

  return (
    <>
      <Helmet>
        <title>English Level Assessment - Fluentry</title>
        <meta
          name="description"
          content="Take our interactive English level assessment to discover your CEFR level and get personalized learning recommendations."
        />
      </Helmet>
      <EnglishLevelOnboarding
        onComplete={handleOnboardingComplete}
        onSkip={handleOnboardingSkip}
      />
    </>
  );
};

export default Assessment;
