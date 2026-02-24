import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

const publishedArticles = [
  {
    slug: "how-to-get-a-call-center-job-in-morocco",
    published: true,
    title: "How to Get a Call Center Job in Morocco (The Ultimate 2026 Guide)",
    excerpt: "Your step-by-step guide to landing a high-paying call center job in Casablanca, Rabat, or Tangier. Learn the required English level, interview questions, salary expectations, and top companies hiring now.",
    category: "Career Guide",
    readTime: "10 min read",
    date: "February 24, 2026",
    image: "/hero-illustration.png"
  },
  {
    slug: "english-for-tourism-morocco",
    published: true,
    title: "English for Tourism in Morocco: The Ultimate Guide for Hotel Staff & Tour Guides",
    excerpt: "Learn the essential English phrases and skills needed for the tourism and hospitality sector in Morocco. Boost your career and earn more with better English.",
    category: "Career Guide",
    readTime: "9 min read",
    date: "February 24, 2026",
    image: "/hero-illustration.png"
  },
  {
    slug: "how-to-pass-toeic-test-in-morocco",
    published: true,
    title: "How to Pass the TOEIC Test in Morocco (2026 Guide)",
    excerpt: "Your complete guide to passing the TOEIC Listening & Reading test in Morocco. Learn about test centers (AMIDEAST), required scores for engineers and professionals, and preparation strategies.",
    category: "Exam Preparation",
    readTime: "11 min read",
    date: "February 24, 2026",
    image: "/hero-illustration.png"
  },
  {
    slug: "how-to-pass-ielts-in-morocco",
    published: true,
    title: "How to Pass IELTS in Morocco: The Ultimate 2026 Guide",
    excerpt: "Your complete guide to acing the IELTS test in Morocco. Find test centers, fees, dates, and expert strategies for Listening, Reading, Writing, and Speaking sections.",
    category: "Exam Preparation",
    readTime: "15 min read",
    date: "February 23, 2026",
    image: "/hero-illustration.png"
  },
  {
    slug: "how-to-think-in-english",
    published: true,
    title: "How to Think in English: Stop Translating in Your Head",
    excerpt: "Discover proven techniques to stop translating from your native language and start thinking directly in English for more natural, fluent communication.",
    category: "Learning Strategies",
    readTime: "8 min read",
    date: "January 15, 2025",
    image: "/hero-illustration.png"
  },
  {
    slug: "common-mistakes-moroccan-english-learners",
    published: true,
    title: "10 Common Mistakes Moroccan English Learners Make (And How to Fix Them)",
    excerpt: "Learn about the most frequent errors Arabic and French speakers make when learning English, with practical solutions for each one.",
    category: "Grammar & Vocabulary",
    readTime: "10 min read",
    date: "January 10, 2025",
    image: "/hero-illustration.png"
  },
  {
    slug: "best-techniques-improve-english-speaking",
    published: true,
    title: "5 Best Techniques to Improve Your English Speaking Skills",
    excerpt: "Master these five powerful techniques used by successful English learners to dramatically improve your speaking confidence and fluency.",
    category: "Speaking Skills",
    readTime: "7 min read",
    date: "January 5, 2025",
    image: "/hero-illustration.png"
  },
  {
    slug: "ielts-speaking-test-success-guide",
    published: true,
    title: "IELTS Speaking Test: Complete Success Guide for Moroccan Students",
    excerpt: "Everything you need to know to ace the IELTS Speaking test, including common questions, scoring criteria, and expert tips from a TESOL-certified coach.",
    category: "Exam Preparation",
    readTime: "12 min read",
    date: "December 28, 2024",
    image: "/hero-illustration.png"
  },
  {
    slug: "business-english-email-writing-guide",
    published: true,
    title: "Business English Email Writing: Professional Templates and Tips",
    excerpt: "Learn how to write professional business emails in English with templates, phrases, and examples for common workplace situations.",
    category: "Business English",
    readTime: "9 min read",
    date: "December 20, 2024",
    image: "/hero-illustration.png"
  },
  {
    slug: "improve-english-pronunciation-arabic-speakers",
    published: true,
    title: "How to Improve English Pronunciation for Arabic Speakers",
    excerpt: "Tackle the most challenging English sounds for Arabic speakers with practical exercises and pronunciation tips from an expert coach.",
    category: "Pronunciation",
    readTime: "11 min read",
    date: "December 15, 2024",
    image: "/hero-illustration.png"
  }
];

export default function Blog() {
  const title = "English Learning Blog - Tips, Strategies & Success Stories";
  const description = "Expert English learning tips, strategies, and success stories from TESOL-certified coach Mr. Ibrahim K. Practical advice for Moroccan English learners.";
  
  return (
    <>
      <SEO title={title} description={description} path="/blog" />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-500 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-5 h-5" />
                <span className="font-medium">English Learning Blog</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Tips, Strategies & Success Stories
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Expert advice from TESOL-certified coach Mr. Ibrahim K. to help you master English faster and with more confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {publishedArticles.map((article) => (
                  <Card key={article.slug} className="hover:shadow-lg transition-shadow flex flex-col">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 rounded-t-lg overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary">{article.category}</Badge>
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                      </div>
                      <CardTitle className="text-xl mb-2 line-clamp-2">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {article.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{article.date}</span>
                        {article.published ? (
                          <Link href={`/blog/${article.slug}`}>
                            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                              Read More
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                          </Link>
                        ) : (
                          <Button variant="ghost" size="sm" disabled className="text-gray-400">
                            Coming Soon
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Want Personalized English Coaching?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                These tips are just the beginning. Get one-on-one coaching tailored to your specific goals and challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book-lesson">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Book Free Consultation
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button size="lg" variant="outline">
                    View Courses
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

