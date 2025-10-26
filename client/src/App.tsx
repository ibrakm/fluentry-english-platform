import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import FreeTest from "./pages/FreeTest";
import BookLesson from "./pages/BookLesson";
import Pricing from "./pages/Pricing";
import FreeResources from "./pages/FreeResources";
import Blog from "./pages/Blog";
import HowToThinkInEnglish from "./pages/blog/HowToThinkInEnglish";
import CommonMistakesMoroccanLearners from "./pages/blog/CommonMistakesMoroccanLearners";
import BestTechniquesImproveEnglishSpeaking from "./pages/blog/BestTechniquesImproveEnglishSpeaking";
import IeltsSpeakingTestSuccessGuide from "./pages/blog/IeltsSpeakingTestSuccessGuide";
import BusinessEnglishEmailWritingGuide from "./pages/blog/BusinessEnglishEmailWritingGuide";
import ImproveEnglishPronunciationArabicSpeakers from "./pages/blog/ImproveEnglishPronunciationArabicSpeakers";
import TheUnspokenPassport from "./pages/articles/TheUnspokenPassport";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { WhatsAppSticky } from "./components/WhatsAppSticky";
import { HelmetProvider } from "react-helmet-async";

function Router() {
  return (
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

