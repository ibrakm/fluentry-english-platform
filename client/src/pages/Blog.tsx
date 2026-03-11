import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const publishedArticles = [
  {
    slug: "canada-clb7-morocco",
    published: true,
    title: "Canada's New CLB 7 Standards: Your Roadmap to Express Entry Success in 2026",
    excerpt: "Learn about Canada's stricter language requirements for 2026. Discover how to achieve CLB 7 in IELTS or CELPIP for your Express Entry application from Morocco.",
    category: "Immigration & Exams",
    readTime: "8 min read",
    date: "March 11, 2026",
    image: "/images/blog/canada-clb7-morocco.webp"
  },
  {
    slug: "green-hydrogen-morocco",
    published: true,
    title: "English for Green Energy: Getting Hired in Morocco's Hydrogen Boom",
    excerpt: "Explore the emerging career opportunities in Morocco's green hydrogen sector. Learn why technical English is essential for engineers and project managers in 2026.",
    category: "Renewable Energy & Career",
    readTime: "7 min read",
    date: "March 11, 2026",
    image: "/images/blog/green-hydrogen-morocco.webp"
  },
  {
    slug: "world-cup-2030-morocco",
    published: true,
    title: "World Cup 2030: Why Your English Level Will Decide Your Salary in 2026",
    excerpt: "Explore the massive job opportunities in Morocco's World Cup 2030 infrastructure and hospitality sectors. Learn why English is the key to higher salaries in 2026.",
    category: "Economy & Opportunity",
    readTime: "6 min read",
    date: "March 11, 2026",
    image: "/images/blog/world-cup-2030-morocco.webp"
  },
  {
    slug: "world-cup-2030-english-jobs-morocco",
    published: true,
    title: "How to Get a Job in Morocco's World Cup 2030 Projects (English is the Key)",
    excerpt: "The FIFA World Cup 2030 is coming to Morocco, bringing over 100,000 jobs. But there's a catch: most of them will require English. Here's how to get ready.",
    category: "Career English",
    readTime: "6 min read",
    date: "March 10, 2026",
    image: "/images/blog/world-cup-2030-english-jobs.webp"
  },
  {
    slug: "freelancing-morocco-english-advantage",
    published: true,
    title: "How to Earn $1,000/Month Freelancing from Morocco (The English Advantage)",
    excerpt: "Tired of local salaries? The global freelance market is booming, and Moroccans are perfectly positioned to succeed. But there's one skill that separates the top earners from the rest: English.",
    category: "Career English",
    readTime: "7 min read",
    date: "March 10, 2026",
    image: "/images/blog/freelancing-morocco-english.webp"
  },
  {
    slug: "english-speaker-salary-morocco",
    published: true,
    title: "Why Moroccans Who Speak English Earn 2x More (The Real Numbers)",
    excerpt: "It's the unspoken rule of the Moroccan job market: a diploma gets you in the door, but English gets you the promotion and the high salary. We break down the numbers.",
    category: "Career English",
    readTime: "5 min read",
    date: "March 10, 2026",
    image: "/images/blog/english-salary-morocco.webp"
  },
  {
    slug: "tech-jobs-morocco-english-level",
    published: true,
    title: "English for Oracle, HCLTech & Big Tech Jobs in Morocco (What Level Do You Need?)",
    excerpt: "Oracle, HCLTech, Orange, and LG are hiring in Morocco, but they all require English. Find out exactly what level you need to get your foot in the door.",
    category: "Career English",
    readTime: "5 min read",
    date: "March 10, 2026",
    image: "/images/blog/tech-jobs-morocco-english.webp"
  },
  {
    slug: "morocco-canada-immigration-ielts-guide",
    published: true,
    title: "How to Get Your Canadian Immigration with IELTS: A Guide for Moroccans",
    excerpt: "Canada is the #1 destination for Moroccans seeking a new life, and Express Entry is your fastest path. But it all starts with one thing: your IELTS score.",
    category: "IELTS & Exams",
    readTime: "6 min read",
    date: "March 10, 2026",
    image: "/images/blog/morocco-canada-immigration-ielts.webp"
  },
  {
    slug: "english-for-engineers-morocco",
    published: true,
    title: "English for Moroccan Engineers: Why Your Degree Isn't Enough Anymore",
    excerpt: "In Morocco's booming industrial and aerospace sectors, a technical degree gets you an interview, but English gets you the job and the promotion.",
    category: "Career English",
    readTime: "6 min read",
    date: "March 10, 2026",
    image: "/images/blog/english-for-engineers-morocco.webp"
  },
  {
    slug: "english-job-interview-morocco-guide",
    published: true,
    title: "How to Pass a Job Interview in English in Morocco (Step-by-Step Guide)",
    excerpt: "You landed the interview for your dream job, but it's in English. Don't panic. This step-by-step guide will show you exactly how to prepare and impress the recruiters.",
    category: "Career English",
    readTime: "7 min read",
    date: "March 10, 2026",
    image: "/images/blog/english-job-interview-morocco.webp"
  },
  {
    slug: "morocco-offshoring-boom-2026",
    published: true,
    title: "Morocco's Offshoring Boom: 130,000 New Jobs by 2026 — Are You Ready?",
    excerpt: "The Moroccan government has launched an ambitious plan to create 130,000 new jobs in the offshoring sector. These are high-quality jobs, and they all require English.",
    category: "Career English",
    readTime: "5 min read",
    date: "March 10, 2026",
    image: "/images/blog/morocco-offshoring-boom.webp"
  },
  {
    slug: "tourism-hospitality-world-cup-morocco",
    published: true,
    title: "English for Moroccan Tourism & World Cup Hospitality Jobs (2026–2030)",
    excerpt: "With the World Cup coming, Morocco's tourism sector is set to explode. From hotel managers to tour guides, the demand for English-speaking professionals is at an all-time high.",
    category: "Career English",
    readTime: "5 min read",
    date: "March 10, 2026",
    image: "/images/blog/tourism-hospitality-world-cup-morocco.webp"
  },
  {
    slug: "learn-english-3-months-morocco-story",
    published: true,
    title: "I Learned English in 3 Months in Morocco — Here's Exactly How",
    excerpt: "From feeling stuck and frustrated to landing a dream job, this is the true story of how one Moroccan student transformed their career by mastering English in just 3 months.",
    category: "Success Stories",
    readTime: "5 min read",
    date: "March 10, 2026",
    image: "/images/blog/learn-english-3-months-morocco.webp"
  },
  {
    slug: "english-for-call-centers-morocco",
    published: true,
    title: "English for Call Centers in Morocco: The Ultimate Guide",
    excerpt: "Your complete guide to mastering the English skills needed for a high-paying call center job in Morocco. Learn about required levels, key vocabulary, and interview tips.",
    category: "Career English",
    readTime: "6 min read",
    date: "March 10, 2026",
    image: "/images/blog/call-center.webp"
  },
  {
    slug: "ielts-vs-toeic-morocco",
    published: true,
    title: "IELTS vs. TOEIC in Morocco: Which English Test is Right for You?",
    excerpt: "A clear comparison of IELTS and TOEIC in Morocco. Understand the differences in format, cost, and purpose to choose the right English exam for your academic or professional goals.",
    category: "IELTS & Exams",
    readTime: "5 min read",
    date: "March 10, 2026",
    image: "/images/blog/ielts-vs-toeic.webp"
  },
  {
    slug: "online-english-classes-morocco-2026-guide",
    published: true,
    title: "Online English Classes for Moroccans: The Complete 2026 Guide",
    excerpt: "The ultimate 2026 guide to online English classes in Morocco. Compare prices, methods (apps, group classes, 1-on-1 coaching), and find the best way to learn English online.",
    category: "Learning Guide",
    readTime: "12 min read",
    date: "February 24, 2026",
    image: "/images/blog/online-english-classes-morocco.webp"
  },
  {
    slug: "a2-to-b1-english-6-month-plan-morocco",
    published: true,
    title: "From A2 to B1 in 6 Months: A Realistic Step-by-Step Plan",
    excerpt: "A practical 6-month plan for Moroccan learners to advance from A2 to B1 English. Follow our weekly schedule and expert tips to improve your fluency and confidence.",
    category: "Learning Guide",
    readTime: "10 min read",
    date: "February 24, 2026",
    image: "/images/blog/a2-to-b1-english-plan.webp"
  },
  {
    slug: "best-apps-websites-learn-english-morocco",
    published: true,
    title: "The 15 Best Apps & Websites for Learning English in Morocco (2026 Review)",
    excerpt: "Our 2026 review of the 15 best apps and websites for Moroccan English learners. Discover the top tools for vocabulary, listening, and reading, and how to use them effectively.",
    category: "Learning Guide",
    readTime: "14 min read",
    date: "February 24, 2026",
    image: "/images/blog/best-apps-learn-english-morocco.webp"
  },
  {
    slug: "challenges-moroccan-english-learners-face",
    published: true,
    title: "The 5 Real Challenges Every Moroccan Faces When Learning English",
    excerpt: "An empathetic look at the 5 unique challenges Moroccan learners face with English and practical solutions to overcome them.",
    category: "Learning Guide",
    readTime: "11 min read",
    date: "February 24, 2026",
    image: "/images/blog/challenges-moroccan-english-learners.webp"
  },
  {
    slug: "how-to-get-a-call-center-job-in-morocco",
    published: true,
    title: "How to Get a Call Center Job in Morocco (The Ultimate 2026 Guide)",
    excerpt: "Your step-by-step guide to landing a high-paying call center job in Casablanca, Rabat, or Tangier. Learn the required English level, interview questions, salary expectations, and top companies hiring now.",
    category: "Career English",
    readTime: "10 min read",
    date: "February 24, 2026",
    image: "/images/blog/call-center-job-morocco.webp"
  },
  {
    slug: "english-for-tourism-morocco",
    published: true,
    title: "English for Tourism in Morocco: The Ultimate Guide for Hotel Staff & Tour Guides",
    excerpt: "Learn the essential English phrases and skills needed for the tourism and hospitality sector in Morocco. Boost your career and earn more with better English.",
    category: "Career English",
    readTime: "9 min read",
    date: "February 24, 2026",
    image: "/images/blog/tourism-english-morocco.webp"
  },
  {
    slug: "how-to-pass-toeic-test-in-morocco",
    published: true,
    title: "How to Pass the TOEIC Test in Morocco (2026 Guide)",
    excerpt: "Your complete guide to passing the TOEIC Listening & Reading test in Morocco. Learn about test centers (AMIDEAST), required scores for engineers and professionals, and preparation strategies.",
    category: "IELTS & Exams",
    readTime: "11 min read",
    date: "February 24, 2026",
    image: "/images/blog/toeic-test-morocco.webp"
  },
  {
    slug: "how-to-pass-ielts-in-morocco",
    published: true,
    title: "How to Pass IELTS in Morocco: The Ultimate 2026 Guide",
    excerpt: "Your complete guide to acing the IELTS test in Morocco. Find test centers, fees, dates, and expert strategies for Listening, Reading, Writing, and Speaking sections.",
    category: "IELTS & Exams",
    readTime: "15 min read",
    date: "February 23, 2026",
    image: "/images/blog/ielts-morocco-guide.webp"
  },
  {
    slug: "how-to-think-in-english",
    published: true,
    title: "How to Think in English: Stop Translating in Your Head",
    excerpt: "Discover proven techniques to stop translating from your native language and start thinking directly in English for more natural, fluent communication.",
    category: "Speaking Skills",
    readTime: "8 min read",
    date: "January 15, 2025",
    image: "/images/blog/think-in-english.webp"
  },
  {
    slug: "common-mistakes-moroccan-english-learners",
    published: true,
    title: "10 Common Mistakes Moroccan English Learners Make (And How to Fix Them)",
    excerpt: "Learn about the most frequent errors Arabic and French speakers make when learning English, with practical solutions for each one.",
    category: "Grammar & Vocabulary",
    readTime: "10 min read",
    date: "January 10, 2025",
    image: "/images/blog/common-mistakes-moroccan-english.webp"
  },
  {
    slug: "best-techniques-improve-english-speaking",
    published: true,
    title: "5 Best Techniques to Improve Your English Speaking Skills",
    excerpt: "Master these five powerful techniques used by successful English learners to dramatically improve your speaking confidence and fluency.",
    category: "Speaking Skills",
    readTime: "7 min read",
    date: "January 5, 2025",
    image: "/images/blog/speaking-techniques-english.webp"
  },
  {
    slug: "ielts-speaking-test-success-guide",
    published: true,
    title: "IELTS Speaking Test: Complete Success Guide for Moroccan Students",
    excerpt: "Everything you need to know to ace the IELTS Speaking test, including common questions, scoring criteria, and expert tips from a TESOL-certified coach.",
    category: "IELTS & Exams",
    readTime: "12 min read",
    date: "December 28, 2024",
    image: "/images/blog/ielts-speaking-test-guide.webp"
  },
  {
    slug: "business-english-email-writing-guide",
    published: true,
    title: "Business English Email Writing: Professional Templates and Tips",
    excerpt: "Learn how to write professional business emails in English with templates, phrases, and examples for common workplace situations.",
    category: "Business English",
    readTime: "9 min read",
    date: "December 20, 2024",
    image: "/images/blog/business-email-english.webp"
  },
  {
    slug: "improve-english-pronunciation-arabic-speakers",
    published: true,
    title: "How to Improve English Pronunciation for Arabic Speakers",
    excerpt: "Tackle the most challenging English sounds for Arabic speakers with practical exercises and pronunciation tips from an expert coach.",
    category: "Pronunciation",
    readTime: "11 min read",
    date: "December 15, 2024",
    image: "/images/blog/pronunciation-arabic-speakers.webp"
  },
  {
    slug: "morocco-education-reform-english-2026",
    published: true,
    title: "Morocco's 2025-2026 Education Reform: What It Means for English Learners",
    excerpt: "The expansion of English in middle schools and new Baccalaureate requirements are changing everything. Here is what students and parents need to know.",
    category: "Education",
    readTime: "7 min read",
    date: "March 10, 2026",
    image: "/images/blog/education-reform-morocco.webp"
  },
  {
    slug: "morocco-remote-work-digital-nomad-2026",
    published: true,
    title: "How Moroccans Are Securing High-Paying Remote Jobs in 2026",
    excerpt: "Tired of local salaries? Discover how mastering English is unlocking remote USD and EUR salaries for Moroccan professionals on global platforms.",
    category: "Career English",
    readTime: "6 min read",
    date: "March 10, 2026",
    image: "/images/blog/remote-work-morocco.webp"
  },
  {
    slug: "learn-english-with-chatgpt-morocco",
    published: true,
    title: "How to Learn English with ChatGPT: A Guide for Moroccan Students (2026)",
    excerpt: "Morocco ranks #1 globally in GPT usage. Discover the best prompts and techniques to use ChatGPT as your personal, free English tutor.",
    category: "Learning Guide",
    readTime: "8 min read",
    date: "March 10, 2026",
    image: "/images/blog/chatgpt-english-morocco.webp"
  },
  {
    slug: "english-for-healthcare-morocco-nurses-doctors",
    published: true,
    title: "Why Moroccan Nurses and Doctors Need English in 2026",
    excerpt: "From international research to high-paying jobs in the UK and Gulf, English is the new stethoscope for Moroccan medical professionals.",
    category: "Career English",
    readTime: "6 min read",
    date: "March 10, 2026",
    image: "/images/blog/healthcare-english-morocco.webp"
  },
  {
    slug: "renewable-energy-jobs-english-morocco",
    published: true,
    title: "Green Jobs in Morocco: Why the Renewable Energy Sector Demands English",
    excerpt: "Morocco's booming renewable energy sector creates 25,000 jobs annually. Discover why English is the required language for these high-paying engineering roles.",
    category: "Career English",
    readTime: "6 min read",
    date: "March 10, 2026",
    image: "/images/blog/renewable-energy-morocco.webp"
  },
  {
    slug: "morocco-spain-tunnel-english-jobs",
    published: true,
    title: "The Morocco-Spain Tunnel Project: A Goldmine for English Speakers",
    excerpt: "The historic Gibraltar Strait Tunnel is becoming a reality. Here is why English is the secret weapon to landing a job on the project of the century.",
    category: "Career English",
    readTime: "6 min read",
    date: "March 10, 2026",
    image: "/images/blog/morocco-spain-tunnel.webp"
  },
  {
    slug: "eu-blue-card-morocco-english-2026",
    published: true,
    title: "The 2026 Guide to the EU Blue Card for Moroccan Professionals",
    excerpt: "France is no longer the only option. Discover how Moroccan engineers and IT specialists are moving to Northern Europe using just their English skills.",
    category: "Career English",
    readTime: "7 min read",
    date: "March 10, 2026",
    image: "/images/blog/eu-blue-card-morocco.webp"
  },
  {
    slug: "ecommerce-dropshipping-english-morocco",
    published: true,
    title: "Why Moroccan Dropshippers Must Master English in 2026",
    excerpt: "If you are selling to the US, UK, or Australia, poor English will kill your conversion rates. Here is how to fix it and scale your business globally.",
    category: "Business English",
    readTime: "6 min read",
    date: "March 10, 2026",
    image: "/images/blog/ecommerce-morocco.webp"
  },
  {
    slug: "learn-english-netflix-morocco",
    published: true,
    title: "How to Actually Learn English Using Netflix in 2026",
    excerpt: "Stop just watching with Arabic subtitles. Discover the proven 3-step Active Watching method to turn your binge-watching into real English fluency.",
    category: "Learning Guide",
    readTime: "5 min read",
    date: "March 10, 2026",
    image: "/images/blog/netflix-english-morocco.webp"
  },
  {
    slug: "high-end-english-training-morocco",
    published: true,
    title: "Why Traditional Language Centers Are Failing Moroccan Professionals",
    excerpt: "The shift toward high-end, specialized English coaching in Morocco. Why professionals are abandoning crowded classrooms for personalized, goal-oriented training.",
    category: "Learning Guide",
    readTime: "6 min read",
    date: "March 10, 2026",
    image: "/images/blog/premium-english-coaching-morocco.webp"
  },
  {
    slug: "iran-war-morocco-economy-english-2026",
    published: true,
    title: "The Iran War and Morocco's Economy: What the Hormuz Crisis Means for Your Salary",
    excerpt: "Oil prices are spiking, inflation is rising, and Morocco's economy is feeling the pressure. Here is what the Hormuz crisis means for Moroccan workers — and why English is the best protection.",
    category: "Economy & Careers",
    readTime: "8 min read",
    date: "March 10, 2026",
    image: "/images/blog/iran-war-morocco-economy-2026.webp"
  },
  {
    slug: "tanger-med-port-jobs-english-2026",
    published: true,
    title: "Tanger Med Is Now Africa's Busiest Port: The Jobs It's Creating and the English They Require",
    excerpt: "Global shipping is rerouting through Morocco. Tanger Med has become Africa's largest port and one of the world's top 20. Here are the logistics jobs it is creating and the English skills they demand.",
    category: "Career English",
    readTime: "7 min read",
    date: "March 10, 2026",
    image: "/images/blog/tanger-med-port-jobs-2026.webp"
  },
  {
    slug: "morocco-offshoring-270000-jobs-2030",
    published: true,
    title: "Morocco's $4 Billion Offshoring Plan: 270,000 New Jobs and the English Skills They All Require",
    excerpt: "The Moroccan government has committed $4 billion to creating 270,000 new offshoring jobs by 2030. Here is what the plan means, which companies are coming, and why English is the non-negotiable requirement.",
    category: "Career English",
    readTime: "8 min read",
    date: "March 10, 2026",
    image: "/images/blog/morocco-offshoring-jobs-2030.webp"
  },
  {
    slug: "germany-nearshoring-morocco-english-jobs-2026",
    published: true,
    title: "Why German Companies Are Moving to Morocco — And the Jobs They Are Bringing",
    excerpt: "Germany Trade and Invest named Morocco the top nearshoring destination for German firms. Here are the industries, the companies, and the English skills you need to get hired.",
    category: "Career English",
    readTime: "7 min read",
    date: "March 10, 2026",
    image: "/images/blog/germany-nearshoring-morocco-2026.webp"
  },
  {
    slug: "morocco-africa-trade-hub-career-english-2026",
    published: true,
    title: "Morocco Is Becoming Africa's Trade Hub: What It Means for Your Career",
    excerpt: "A Moody's credit upgrade, the World Cup in 2030, record port traffic, and a $4 billion investment plan. Morocco's moment is now — and the professionals who speak English will benefit most.",
    category: "Economy & Careers",
    readTime: "7 min read",
    date: "March 10, 2026",
    image: "/images/blog/morocco-new-trade-hub-2026.webp"
  },
  {
    slug: "morocco-inflation-english-salary-2026",
    published: true,
    title: "Morocco's Inflation Crisis: Why English Is the Best Salary Hedge You Have",
    excerpt: "Prices are rising and purchasing power is falling. Here is the data on how English proficiency translates directly into higher salaries — and why it is the smartest investment you can make right now.",
    category: "Economy & Careers",
    readTime: "7 min read",
    date: "March 10, 2026",
    image: "/images/blog/morocco-inflation-english-salary.webp"
  },
  {
    slug: "gitex-africa-morocco-tech-english-2026",
    published: true,
    title: "GITEX Africa 2026: Morocco's Tech Scene Is Going Global — Here's How to Be Part of It",
    excerpt: "1,000+ exhibitors. 45,000 attendees. $1 billion in deals. GITEX Africa is the biggest tech event on the continent — and it is happening in Marrakech. Here is what it means for your career.",
    category: "Career English",
    readTime: "7 min read",
    date: "March 10, 2026",
    image: "/images/blog/gitex-africa-2026-morocco-tech.webp"
  },
  {
    slug: "morocco-emigration-guide-english-2026",
    published: true,
    title: "The 2026 Moroccan Emigration Guide: Canada, Germany, the Gulf — What Each Country Actually Requires",
    excerpt: "Thinking of leaving Morocco? Here is the honest, complete guide to what Canada, Germany, the UAE, and the UK actually require from Moroccan applicants — and why English is the common thread.",
    category: "Career English",
    readTime: "10 min read",
    date: "March 10, 2026",
    image: "/images/blog/morocco-emigration-guide-2026.webp"
  },
  {
    slug: "world-cup-2030-morocco-jobs-english",
    published: true,
    title: "World Cup 2030 in Morocco: The $11.7 Billion Opportunity and the Jobs It Will Create",
    excerpt: "Six stadiums. 1.5 million international visitors. $11.7 billion in infrastructure investment. The 2030 World Cup is the biggest economic event in Morocco's history — and it needs English speakers.",
    category: "Career English",
    readTime: "8 min read",
    date: "March 10, 2026",
    image: "/images/blog/world-cup-2030-morocco-jobs.webp"
  },
  {
    slug: "ai-jobs-morocco-future-work-english-2026",
    published: true,
    title: "AI Is Changing Morocco's Job Market: Which Jobs Are Safe, Which Are at Risk, and How English Protects You",
    excerpt: "AI is automating routine work across Morocco's economy. Here is the honest analysis of which jobs are vulnerable, which are growing, and why English is the best protection against disruption.",
    category: "Career English",
    readTime: "9 min read",
    date: "March 10, 2026",
    image: "/images/blog/ai-jobs-morocco-future-work-2026.webp"
  },
  {
    slug: "morocco-moodys-upgrade-economy-english-2026",
    published: true,
    title: "Morocco's Moody's Upgrade: What a Ba1 Credit Rating Means for Jobs, Investment, and Your Career",
    excerpt: "Moody's just upgraded Morocco's credit rating to Ba1 with a positive outlook. Here is what that means in plain terms — and why the wave of foreign investment it will bring will reward English speakers most.",
    category: "Economy & Careers",
    readTime: "7 min read",
    date: "March 10, 2026",
    image: "/images/blog/morocco-moodys-upgrade-economy-2026.webp"
  },
  {
    slug: "moroccan-diaspora-returning-english-competitive-advantage-2026",
    published: true,
    title: "The Moroccan Diaspora Is Coming Home: What It Means for Those Who Never Left",
    excerpt: "Moroccans who spent years in France, Spain, Canada, and the Gulf are coming back — with savings, international experience, and fluent English. Here is what that means for those who stayed.",
    category: "Career English",
    readTime: "7 min read",
    date: "March 10, 2026",
    image: "/images/blog/moroccan-diaspora-returning-2026.webp"
  },
  {
    slug: "casablanca-finance-city-jobs-english-salary-2026",
    published: true,
    title: "Casablanca Finance City Is Hiring: The Financial Sector Jobs That Pay in Dollars and Require English",
    excerpt: "Casablanca Finance City is positioning itself as the financial hub of Africa. Investment banks, private equity firms, and the Big Four audit firms are all here — and they all work in English.",
    category: "Career English",
    readTime: "8 min read",
    date: "March 10, 2026",
    image: "/images/blog/casablanca-finance-city-jobs-2026.webp"
  },
  {
    slug: "morocco-spain-portugal-economic-corridor-english-2030",
    published: true,
    title: "The Morocco-Spain-Portugal Economic Corridor: How the 2030 World Cup Is Redrawing the Business Map of the Mediterranean",
    excerpt: "Business leaders from Morocco, Spain, and Portugal met in early 2026 to plan the economic partnership around the 2030 World Cup. A trilateral corridor is forming — and English is the only language all three sides share.",
    category: "Economy & Careers",
    readTime: "8 min read",
    date: "March 10, 2026",
    image: "/images/blog/morocco-spain-portugal-corridor-2030.webp"
  },
  {
    slug: "morocco-successful-professionals-english-turning-point",
    published: true,
    title: "Why Morocco's Most Successful Young Professionals All Did the Same Thing at 25",
    excerpt: "A logistics coordinator at Tanger Med. A developer at a Casablanca tech firm. A nurse in Germany. A financial analyst at CFC. They work in different sectors — but they all made the same decision at a turning point in their careers.",
    category: "Success Stories",
    readTime: "6 min read",
    date: "March 10, 2026",
    image: "/images/blog/morocco-successful-professionals-english.webp"
  },
  {
    slug: "ultimate-ielts-guide-morocco",
    published: true,
    title: "The Ultimate IELTS Guide for Moroccan Students (2026) — Band 7+ Guaranteed",
    excerpt: "The most complete IELTS preparation guide for Moroccan students. Covers all 4 sections, Morocco-specific strategies, test centres, fees, common mistakes Arabic speakers make, and a week-by-week 8-week study plan.",
    category: "IELTS & Exams",
    readTime: "15 min read",
    date: "March 9, 2026",
    image: "/images/blog/ielts-morocco-guide.webp"
  },
  {
    slug: "ultimate-business-english-guide-morocco",
    published: true,
    title: "The Ultimate Business English Guide for Moroccan Professionals (2026)",
    excerpt: "Master Business English in Morocco. Emails, meetings, presentations, negotiations, LinkedIn — the complete guide for Moroccan professionals who want to advance their careers internationally.",
    category: "Business English",
    readTime: "15 min read",
    date: "March 9, 2026",
    image: "/images/blog/premium-english-coaching-morocco.webp"
  }
];

const FILTER_CATEGORIES = [
  "All Topics",
  "IELTS & Exams",
  "Business English",
  "Speaking Skills",
  "Pronunciation",
  "Grammar & Vocabulary",
  "Learning Guide",
  "Career English",
  "Economy & Careers",
  "Education",
  "Success Stories",
];

const CATEGORY_COLORS: Record<string, string> = {
  "IELTS & Exams": "bg-purple-100 text-purple-700",
  "Business English": "bg-blue-100 text-blue-700",
  "Speaking Skills": "bg-green-100 text-green-700",
  "Pronunciation": "bg-orange-100 text-orange-700",
  "Grammar & Vocabulary": "bg-yellow-100 text-yellow-700",
  "Learning Guide": "bg-teal-100 text-teal-700",
  "Career English": "bg-rose-100 text-rose-700",
  "Economy & Careers": "bg-amber-100 text-amber-700",
  "Education": "bg-indigo-100 text-indigo-700",
  "Success Stories": "bg-emerald-100 text-emerald-700",
};

export default function Blog() {
  const { langPrefix } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All Topics");

  const filteredArticles =
    activeCategory === "All Topics"
      ? publishedArticles
      : publishedArticles.filter((a) => a.category === activeCategory);

  const title = "English Learning Blog — Tips, Strategies & Success Stories | Fluentry Morocco";
  const description =
    "Expert English learning tips, strategies, and success stories from TESOL-certified coach Mr. Ibrahim K. Practical advice for Moroccan English learners.";

  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/blog"
        keywords="English learning blog Morocco, IELTS tips Morocco, Business English Morocco, English pronunciation Arabic speakers, English speaking skills Morocco, تعلم الإنجليزية المغرب, blog anglais Maroc"
        breadcrumbs={[{ name: "Blog", item: "https://fluentry.online/blog" }]}
      />
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
                Tips, Strategies &amp; Success Stories
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Expert advice from TESOL-certified coach Mr. Ibrahim K. to help you master English faster and with more confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter Bar */}
        <section className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
              {FILTER_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                    activeCategory === cat
                      ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                      : "bg-white text-gray-600 border-gray-300 hover:border-blue-400 hover:text-blue-600"
                  }`}
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Articles Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Results count */}
              <p className="text-sm text-gray-500 mb-6">
                {filteredArticles.length === publishedArticles.length
                  ? `${publishedArticles.length} articles`
                  : `${filteredArticles.length} article${filteredArticles.length !== 1 ? "s" : ""} in "${activeCategory}"`}
              </p>

              {filteredArticles.length === 0 ? (
                <div className="text-center py-20 text-gray-400">
                  <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-40" />
                  <p className="text-lg font-medium">No articles in this category yet.</p>
                  <p className="text-sm mt-1">Check back soon — new content is added every week.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredArticles.map((article) => (
                    <Card key={article.slug} className="hover:shadow-lg transition-shadow flex flex-col">
                      <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 rounded-t-lg overflow-hidden">
                        <img loading="lazy"
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                              CATEGORY_COLORS[article.category] ?? "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {article.category}
                          </span>
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
                            <Link href={`${langPrefix}/blog/${article.slug}`}>
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
              )}
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
                <a
                  href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20book%20a%20lesson%20and%20start%20with%20a%20free%20strategy%20call"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Book Free Consultation
                  </Button>
                </a>
                <Link href={`${langPrefix}/courses`}>
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
