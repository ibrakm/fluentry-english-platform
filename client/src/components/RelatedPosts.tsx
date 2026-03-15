import { Link } from "wouter";
import { ArrowRight, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface RelatedPost {
  title: string;
  path: string;
  description: string;
  category: string;
}

// Master list of all blog posts for internal linking
export const ALL_POSTS: RelatedPost[] = [
  { title: "How to Think in English", path: "/blog/how-to-think-in-english", description: "Stop translating and start thinking directly in English", category: "Fluency" },
  { title: "Common Mistakes Moroccan English Learners Make", path: "/blog/common-mistakes-moroccan-english-learners", description: "Avoid the most frequent errors Moroccan learners make", category: "Learning" },
  { title: "Best Techniques to Improve English Speaking", path: "/blog/best-techniques-improve-english-speaking", description: "Proven methods to boost your speaking confidence", category: "Speaking" },
  { title: "IELTS Speaking Test Success Guide", path: "/blog/ielts-speaking-test-success-guide", description: "Master the IELTS speaking section with expert tips", category: "IELTS" },
  { title: "Business English Email Writing Guide", path: "/blog/business-english-email-writing-guide", description: "Write professional emails that impress", category: "Business" },
  { title: "Improve English Pronunciation for Arabic Speakers", path: "/blog/improve-english-pronunciation-arabic-speakers", description: "Fix common pronunciation issues for Arabic speakers", category: "Pronunciation" },
  { title: "How to Pass IELTS in Morocco", path: "/blog/how-to-pass-ielts-in-morocco", description: "Complete guide to passing IELTS from Morocco", category: "IELTS" },
  { title: "How to Get a Call Center Job in Morocco", path: "/blog/how-to-get-a-call-center-job-in-morocco", description: "English skills needed for call center careers", category: "Career" },
  { title: "English for Tourism in Morocco", path: "/blog/english-for-tourism-morocco", description: "Essential English for Morocco\'s tourism industry", category: "Career" },
  { title: "How to Pass TOEIC Test in Morocco", path: "/blog/how-to-pass-toeic-test-in-morocco", description: "TOEIC preparation strategies for Moroccan test-takers", category: "Exams" },
  { title: "Online English Classes Morocco 2026 Guide", path: "/blog/online-english-classes-morocco-2026-guide", description: "Compare the best online English classes in Morocco", category: "Learning" },
  { title: "From A2 to B1 in 6 Months", path: "/blog/a2-to-b1-english-6-month-plan-morocco", description: "A practical 6-month plan to level up your English", category: "Learning" },
  { title: "15 Best Apps & Websites for Learning English", path: "/blog/best-apps-websites-learn-english-morocco", description: "Top digital tools for vocabulary and listening practice", category: "Tools" },
  { title: "5 Challenges Moroccan English Learners Face", path: "/blog/challenges-moroccan-english-learners-face", description: "Understand and overcome common learning obstacles", category: "Learning" },
  { title: "English for Call Centers Morocco", path: "/blog/english-for-call-centers-morocco", description: "Master the English skills needed for BPO careers", category: "Career" },
  { title: "IELTS vs TOEIC Morocco", path: "/blog/ielts-vs-toeic-morocco", description: "Which English exam is right for your goals?", category: "Exams" },
  { title: "World Cup 2030 English Jobs Morocco", path: "/blog/world-cup-2030-english-jobs-morocco", description: "Career opportunities requiring English for 2030", category: "Career" },
  { title: "Freelancing Morocco: The English Advantage", path: "/blog/freelancing-morocco-english-advantage", description: "How English opens doors to freelancing success", category: "Career" },
  { title: "English Speaker Salary Morocco", path: "/blog/english-speaker-salary-morocco", description: "How English skills impact your earning potential", category: "Career" },
  { title: "Tech Jobs Morocco: English Level Required", path: "/blog/tech-jobs-morocco-english-level", description: "English requirements for Morocco\'s tech sector", category: "Career" },
  { title: "Morocco Canada Immigration IELTS Guide", path: "/blog/morocco-canada-immigration-ielts-guide", description: "IELTS requirements for Canadian immigration", category: "IELTS" },
  { title: "English for Engineers Morocco", path: "/blog/english-for-engineers-morocco", description: "Technical English skills for Moroccan engineers", category: "Career" },
  { title: "English Job Interview Morocco Guide", path: "/blog/english-job-interview-morocco-guide", description: "Ace your English job interview in Morocco", category: "Career" },
  { title: "Ultimate IELTS Guide Morocco", path: "/blog/ultimate-ielts-guide-morocco", description: "The complete IELTS preparation resource for Morocco", category: "IELTS" },
  { title: "Ultimate Business English Guide Morocco", path: "/blog/ultimate-business-english-guide-morocco", description: "Master Business English for Moroccan professionals", category: "Business" },
  { title: "English for World Cup 2030 Volunteers", path: "/blog/world-cup-2030-volunteers-english-morocco", description: "Prepare your English to volunteer at the FIFA World Cup 2030 in Morocco", category: "Career" },
  { title: "Moroccan Nurses: Working in the UK Guide", path: "/blog/english-for-nurses-morocco-uk", description: "Complete guide for Moroccan nurses to work in the UK with English requirements", category: "Career" },
  { title: "IELTS vs TOEFL Morocco: Which to Choose?", path: "/blog/ielts-vs-toefl-morocco", description: "Detailed comparison of IELTS and TOEFL for Moroccan test-takers", category: "Exams" },
  { title: "English for Remote Work Morocco", path: "/blog/english-for-remote-work-morocco", description: "Earn in dollars while living in Morocco with remote work English skills", category: "Career" },
  { title: "English for Moroccan Developers", path: "/blog/english-for-developers-morocco", description: "The English skills that double a Moroccan developer's salary", category: "Career" },
  { title: "English for University Admission Morocco", path: "/blog/english-for-university-admission-morocco", description: "Complete guide to English requirements for studying abroad from Morocco", category: "Exams" },
];

// Get related posts by category, excluding the current post
export function getRelatedPosts(currentPath: string, category: string, count: number = 3): RelatedPost[] {
  const sameCat = ALL_POSTS.filter(p => p.category === category && p.path !== currentPath);
  const otherCat = ALL_POSTS.filter(p => p.category !== category && p.path !== currentPath);
  const result = [...sameCat.slice(0, count)];
  if (result.length < count) {
    result.push(...otherCat.slice(0, count - result.length));
  }
  return result;
}

interface RelatedPostsProps {
  currentPath: string;
  category: string;
  count?: number;
}

export default function RelatedPosts({ currentPath, category, count = 3 }: RelatedPostsProps) {
  const { langPrefix } = useLanguage();
  const posts = getRelatedPosts(currentPath, category, count);

  if (posts.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-blue-600" />
        Related Articles You Might Enjoy
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.path}
            href={`${langPrefix}${post.path}`}
            className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
          >
            <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3">
              {post.category}
            </span>
            <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2 text-sm leading-snug">
              {post.title}
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-3">
              {post.description}
            </p>
            <span className="text-blue-600 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
              Read More <ArrowRight className="w-3 h-3" />
            </span>
          </Link>
        ))}
      </div>

      {/* Internal links to key pages */}
      <div className="mt-10 p-6 bg-blue-50 rounded-xl">
        <h3 className="font-bold text-gray-900 mb-3">Explore More from Fluentry</h3>
        <div className="flex flex-wrap gap-3">
          <Link href={`${langPrefix}/courses`} className="text-sm text-blue-700 hover:text-blue-900 underline">All Courses</Link>
          <span className="text-gray-300">|</span>
          <Link href={`${langPrefix}/ielts-preparation-morocco`} className="text-sm text-blue-700 hover:text-blue-900 underline">IELTS Preparation</Link>
          <span className="text-gray-300">|</span>
          <Link href={`${langPrefix}/free-resources`} className="text-sm text-blue-700 hover:text-blue-900 underline">Free Resources</Link>
          <span className="text-gray-300">|</span>
          <Link href={`${langPrefix}/pricing`} className="text-sm text-blue-700 hover:text-blue-900 underline">Pricing</Link>
          <span className="text-gray-300">|</span>
          <Link href={`${langPrefix}/free-test`} className="text-sm text-blue-700 hover:text-blue-900 underline">Free Level Test</Link>
          <span className="text-gray-300">|</span>
          <Link href={`${langPrefix}/success-stories`} className="text-sm text-blue-700 hover:text-blue-900 underline">Success Stories</Link>
        </div>
      </div>
    </section>
  );
}
