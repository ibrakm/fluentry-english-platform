import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Redirect, useLocation } from "wouter";
import { lazy, Suspense, useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { WhatsAppSticky } from "./components/WhatsAppSticky";
import { ExitIntentPopup } from "./components/ExitIntentPopup";
import { AIChatbot } from "./components/AIChatbot";
import { SocialProofNotification } from "./components/SocialProofNotification";
import { HelmetProvider } from "react-helmet-async";

// Eagerly load the home page for fast initial render
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Lazy load all other pages — they are only downloaded when the user navigates to them
const About = lazy(() => import("./pages/About"));
const Courses = lazy(() => import("./pages/Courses"));
const FreeTest = lazy(() => import("./pages/FreeTest"));
const BookLesson = lazy(() => import("./pages/BookLesson"));
const Pricing = lazy(() => import("./pages/Pricing"));
const FreeResources = lazy(() => import("./pages/FreeResources"));
const Blog = lazy(() => import("./pages/Blog"));
const Certificate = lazy(() => import("./pages/Certificate"));
const Community = lazy(() => import("./pages/Community"));
const Assessment = lazy(() => import("./pages/Assessment"));
const OnboardingTest = lazy(() => import("./pages/OnboardingTest"));

// Blog articles — lazy loaded
const HowToThinkInEnglish = lazy(() => import("./pages/blog/HowToThinkInEnglish"));
const CommonMistakesMoroccanLearners = lazy(() => import("./pages/blog/CommonMistakesMoroccanLearners"));
const BestTechniquesImproveEnglishSpeaking = lazy(() => import("./pages/blog/BestTechniquesImproveEnglishSpeaking"));
const IeltsSpeakingTestSuccessGuide = lazy(() => import("./pages/blog/IeltsSpeakingTestSuccessGuide"));
const BusinessEnglishEmailWritingGuide = lazy(() => import("./pages/blog/BusinessEnglishEmailWritingGuide"));
const ImproveEnglishPronunciationArabicSpeakers = lazy(() => import("./pages/blog/ImproveEnglishPronunciationArabicSpeakers"));
const HowToPassIeltsInMorocco = lazy(() => import("./pages/blog/HowToPassIeltsInMorocco"));
const HowToGetCallCenterJobMorocco = lazy(() => import("./pages/blog/HowToGetCallCenterJobMorocco"));
const EnglishForTourismMorocco = lazy(() => import("./pages/blog/EnglishForTourismMorocco"));
const HowToPassToeicTestMorocco = lazy(() => import("./pages/blog/HowToPassToeicTestMorocco"));
const OnlineEnglishClassesMorocco = lazy(() => import("./pages/blog/OnlineEnglishClassesMorocco"));
const A2ToB1SixMonthPlan = lazy(() => import("./pages/blog/A2ToB1SixMonthPlan"));
const Top15AppsWebsitesLearnEnglish = lazy(() => import("./pages/blog/Top15AppsWebsitesLearnEnglish"));
const ChallengesMoroccanEnglishLearners = lazy(() => import("./pages/blog/ChallengesMoroccanEnglishLearners"));
const TheUnspokenPassport = lazy(() => import("./pages/articles/TheUnspokenPassport"));
const StartPage = lazy(() => import("./pages/StartPage"));
const AudioAudit = lazy(() => import("./pages/AudioAudit"));
const SuccessStories = lazy(() => import("./pages/SuccessStories"));
const GroupCoaching = lazy(() => import("./pages/GroupCoaching"));

// Content Marketing Engine pages
const ResourceLibrary = lazy(() => import("./pages/ResourceLibrary"));
const UltimateIELTSGuideMorocco = lazy(() => import("./pages/blog/UltimateIELTSGuideMorocco"));
const UltimateBusinessEnglishGuideMorocco = lazy(() => import("./pages/blog/UltimateBusinessEnglishGuideMorocco"));
const EnglishForCallCentersMorocco = lazy(() => import("./pages/blog/EnglishForCallCentersMorocco"));
const IeltsVsToeicMorocco = lazy(() => import("./pages/blog/IeltsVsToeicMorocco"));
const WorldCup2030EnglishJobs = lazy(() => import("./pages/blog/WorldCup2030EnglishJobs"));
const FreelancingMoroccoEnglish = lazy(() => import("./pages/blog/FreelancingMoroccoEnglish"));
const EnglishSalaryMorocco = lazy(() => import("./pages/blog/EnglishSalaryMorocco"));
const TechJobsMoroccoEnglish = lazy(() => import("./pages/blog/TechJobsMoroccoEnglish"));
const MoroccoCanadaImmigrationIELTS = lazy(() => import("./pages/blog/MoroccoCanadaImmigrationIELTS"));
const EnglishForEngineersMorocco = lazy(() => import("./pages/blog/EnglishForEngineersMorocco"));
const EnglishJobInterviewMorocco = lazy(() => import("./pages/blog/EnglishJobInterviewMorocco"));
const MoroccoOffshoringBoom = lazy(() => import("./pages/blog/MoroccoOffshoringBoom"));
const TourismHospitalityWorldCupMorocco = lazy(() => import("./pages/blog/TourismHospitalityWorldCupMorocco"));
const LearnEnglish3MonthsMorocco = lazy(() => import("./pages/blog/LearnEnglish3MonthsMorocco"));
const MoroccoEducationReformEnglish = lazy(() => import("./pages/blog/MoroccoEducationReformEnglish"));
const MoroccoDigitalNomadRemoteWork = lazy(() => import("./pages/blog/MoroccoDigitalNomadRemoteWork"));
const LearnEnglishWithChatGPTMorocco = lazy(() => import("./pages/blog/LearnEnglishWithChatGPTMorocco"));
const EnglishForHealthcareMorocco = lazy(() => import("./pages/blog/EnglishForHealthcareMorocco"));
const RenewableEnergyJobsEnglishMorocco = lazy(() => import("./pages/blog/RenewableEnergyJobsEnglishMorocco"));
const MoroccoSpainTunnelEnglishJobs = lazy(() => import("./pages/blog/MoroccoSpainTunnelEnglishJobs"));
const EuBlueCardMoroccoEnglish = lazy(() => import("./pages/blog/EuBlueCardMoroccoEnglish"));
const EcommerceDropshippingEnglishMorocco = lazy(() => import("./pages/blog/EcommerceDropshippingEnglishMorocco"));
const LearnEnglishNetflixMorocco = lazy(() => import("./pages/blog/LearnEnglishNetflixMorocco"));
const HighEndEnglishTrainingMorocco = lazy(() => import("./pages/blog/HighEndEnglishTrainingMorocco"));

// SEO landing pages
const IELTSPreparationMorocco = lazy(() => import("./pages/IELTSPreparationMorocco"));
const EnglishCoachCasablanca = lazy(() => import("./pages/EnglishCoachCasablanca"));
const EnglishCoachRabat = lazy(() => import("./pages/EnglishCoachRabat"));
const EnglishCoachTangier = lazy(() => import("./pages/EnglishCoachTangier"));

// Loading fallback — minimal spinner shown while a page chunk loads
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-500 text-sm">Loading...</p>
      </div>
    </div>
  );
}

// Root redirect: / → /en
function RootRedirect() {
  const [location, setLocation] = useLocation();
  useEffect(() => {
    if (location === "/") {
      setLocation("/en");
    }
  }, [location, setLocation]);
  return null;
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        {/* Root redirect */}
        <Route path="/" component={RootRedirect} />

        {/* Language-prefixed routes */}
        <Route path="/:lang" component={Home} />
        <Route path="/:lang/about" component={About} />
        <Route path="/:lang/courses" component={Courses} />
        <Route path="/:lang/free-test" component={FreeTest} />
        <Route path="/:lang/book-lesson" component={BookLesson} />
        <Route path="/:lang/pricing" component={Pricing} />
        <Route path="/:lang/free-resources" component={FreeResources} />
        <Route path="/:lang/blog" component={Blog} />
        <Route path="/:lang/certificate" component={Certificate} />
        <Route path="/:lang/community" component={Community} />
        <Route path="/:lang/assessment" component={Assessment} />
        <Route path="/:lang/onboarding-test" component={OnboardingTest} />
        <Route path="/:lang/blog/how-to-think-in-english" component={HowToThinkInEnglish} />
        <Route path="/:lang/blog/common-mistakes-moroccan-english-learners" component={CommonMistakesMoroccanLearners} />
        <Route path="/:lang/blog/best-techniques-improve-english-speaking" component={BestTechniquesImproveEnglishSpeaking} />
        <Route path="/:lang/blog/ielts-speaking-test-success-guide" component={IeltsSpeakingTestSuccessGuide} />
        <Route path="/:lang/blog/business-english-email-writing-guide" component={BusinessEnglishEmailWritingGuide} />
        <Route path="/:lang/blog/improve-english-pronunciation-arabic-speakers" component={ImproveEnglishPronunciationArabicSpeakers} />
        <Route path="/:lang/blog/how-to-pass-ielts-in-morocco" component={HowToPassIeltsInMorocco} />
        <Route path="/:lang/blog/how-to-get-a-call-center-job-in-morocco" component={HowToGetCallCenterJobMorocco} />
        <Route path="/:lang/blog/english-for-tourism-morocco" component={EnglishForTourismMorocco} />
        <Route path="/:lang/blog/how-to-pass-toeic-test-in-morocco" component={HowToPassToeicTestMorocco} />
        <Route path="/:lang/blog/online-english-classes-morocco-2026-guide" component={OnlineEnglishClassesMorocco} />
        <Route path="/:lang/blog/a2-to-b1-english-6-month-plan-morocco" component={A2ToB1SixMonthPlan} />
        <Route path="/:lang/blog/best-apps-websites-learn-english-morocco" component={Top15AppsWebsitesLearnEnglish} />
        <Route path="/:lang/blog/challenges-moroccan-english-learners-face" component={ChallengesMoroccanEnglishLearners} />
        <Route path="/:lang/blog/english-for-call-centers-morocco" component={EnglishForCallCentersMorocco} />
        <Route path="/:lang/blog/ielts-vs-toeic-morocco" component={IeltsVsToeicMorocco} />
        <Route path="/:lang/blog/world-cup-2030-english-jobs-morocco" component={WorldCup2030EnglishJobs} />
        <Route path="/:lang/blog/freelancing-morocco-english-advantage" component={FreelancingMoroccoEnglish} />
        <Route path="/:lang/blog/english-speaker-salary-morocco" component={EnglishSalaryMorocco} />
        <Route path="/:lang/blog/tech-jobs-morocco-english-level" component={TechJobsMoroccoEnglish} />
        <Route path="/:lang/blog/morocco-canada-immigration-ielts-guide" component={MoroccoCanadaImmigrationIELTS} />
        <Route path="/:lang/blog/english-for-engineers-morocco" component={EnglishForEngineersMorocco} />
        <Route path="/:lang/blog/english-job-interview-morocco-guide" component={EnglishJobInterviewMorocco} />
        <Route path="/:lang/blog/morocco-offshoring-boom-2026" component={MoroccoOffshoringBoom} />
        <Route path="/:lang/blog/tourism-hospitality-world-cup-morocco" component={TourismHospitalityWorldCupMorocco} />
        <Route path="/:lang/blog/learn-english-3-months-morocco-story" component={LearnEnglish3MonthsMorocco} />
        <Route path="/:lang/articles/the-unspoken-passport" component={TheUnspokenPassport} />
        <Route path="/:lang/success-stories" component={SuccessStories} />
        <Route path="/:lang/group-coaching" component={GroupCoaching} />
        <Route path="/:lang/start" component={StartPage} />
        <Route path="/:lang/fb" component={StartPage} />
        <Route path="/:lang/audio-audit" component={AudioAudit} />
        {/* Content Marketing Engine */}
        <Route path="/:lang/resource-library" component={ResourceLibrary} />
        <Route path="/:lang/blog/ultimate-ielts-guide-morocco" component={UltimateIELTSGuideMorocco} />
        <Route path="/:lang/blog/ultimate-business-english-guide-morocco" component={UltimateBusinessEnglishGuideMorocco} />
        <Route path="/:lang/blog/morocco-education-reform-english-2026" component={MoroccoEducationReformEnglish} />
        <Route path="/:lang/blog/morocco-remote-work-digital-nomad-2026" component={MoroccoDigitalNomadRemoteWork} />
        <Route path="/:lang/blog/learn-english-with-chatgpt-morocco" component={LearnEnglishWithChatGPTMorocco} />
        <Route path="/:lang/blog/english-for-healthcare-morocco-nurses-doctors" component={EnglishForHealthcareMorocco} />
        <Route path="/:lang/blog/renewable-energy-jobs-english-morocco" component={RenewableEnergyJobsEnglishMorocco} />
        <Route path="/:lang/blog/morocco-spain-tunnel-english-jobs" component={MoroccoSpainTunnelEnglishJobs} />
        <Route path="/:lang/blog/eu-blue-card-morocco-english-2026" component={EuBlueCardMoroccoEnglish} />
        <Route path="/:lang/blog/ecommerce-dropshipping-english-morocco" component={EcommerceDropshippingEnglishMorocco} />
        <Route path="/:lang/blog/learn-english-netflix-morocco" component={LearnEnglishNetflixMorocco} />
        <Route path="/:lang/blog/high-end-english-training-morocco" component={HighEndEnglishTrainingMorocco} />
        {/* SEO landing pages */}
        <Route path="/:lang/ielts-preparation-morocco" component={IELTSPreparationMorocco} />
        <Route path="/:lang/english-coach-casablanca" component={EnglishCoachCasablanca} />
        <Route path="/:lang/english-coach-rabat" component={EnglishCoachRabat} />
        <Route path="/:lang/english-coach-tangier" component={EnglishCoachTangier} />
        <Route path="/404" component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <LanguageProvider>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">
                <Router />
              </main>
              <Footer />
              <WhatsAppSticky />
              <ExitIntentPopup />
              <AIChatbot />
              <SocialProofNotification />
            </div>
          </TooltipProvider>
        </ThemeProvider>
        </LanguageProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
