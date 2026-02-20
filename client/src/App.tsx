import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import { lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { WhatsAppSticky } from "./components/WhatsAppSticky";
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

// Blog articles — lazy loaded
const HowToThinkInEnglish = lazy(() => import("./pages/blog/HowToThinkInEnglish"));
const CommonMistakesMoroccanLearners = lazy(() => import("./pages/blog/CommonMistakesMoroccanLearners"));
const BestTechniquesImproveEnglishSpeaking = lazy(() => import("./pages/blog/BestTechniquesImproveEnglishSpeaking"));
const IeltsSpeakingTestSuccessGuide = lazy(() => import("./pages/blog/IeltsSpeakingTestSuccessGuide"));
const BusinessEnglishEmailWritingGuide = lazy(() => import("./pages/blog/BusinessEnglishEmailWritingGuide"));
const ImproveEnglishPronunciationArabicSpeakers = lazy(() => import("./pages/blog/ImproveEnglishPronunciationArabicSpeakers"));
const TheUnspokenPassport = lazy(() => import("./pages/articles/TheUnspokenPassport"));

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

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/about"} component={About} />
        <Route path={"/courses"} component={Courses} />
        <Route path={"/free-test"} component={FreeTest} />
        <Route path={"/book-lesson"} component={BookLesson} />
        <Route path={"/pricing"} component={Pricing} />
        <Route path={"/free-resources"} component={FreeResources} />
        <Route path={"/blog"} component={Blog} />
        <Route path={"/blog/how-to-think-in-english"} component={HowToThinkInEnglish} />
        <Route path={"/blog/common-mistakes-moroccan-english-learners"} component={CommonMistakesMoroccanLearners} />
        <Route path={"/blog/best-techniques-improve-english-speaking"} component={BestTechniquesImproveEnglishSpeaking} />
        <Route path={"/blog/ielts-speaking-test-success-guide"} component={IeltsSpeakingTestSuccessGuide} />
        <Route path={"/blog/business-english-email-writing-guide"} component={BusinessEnglishEmailWritingGuide} />
        <Route path={"/blog/improve-english-pronunciation-arabic-speakers"} component={ImproveEnglishPronunciationArabicSpeakers} />
        <Route path={"/articles/the-unspoken-passport"} component={TheUnspokenPassport} />
        <Route path={"/404"} component={NotFound} />
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
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
