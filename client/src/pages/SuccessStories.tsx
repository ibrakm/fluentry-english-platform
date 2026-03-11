import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { Star, ArrowRight, MessageCircle, TrendingUp, Award, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const stories = [
  {
    id: 1,
    name: "Youssef B.",
    city: "Tangier",
    photo: "YB",
    before: "B1",
    after: "IELTS 7.0",
    duration: "8 weeks",
    goal: "IELTS for UK university application",
    quote:
      "Before working with Fluentry, I had taken the IELTS twice and scored 5.5 both times. I was convinced my speaking was the problem, but I didn't know why. In our first session, the coach identified exactly what was holding me back: I was translating from Arabic in my head before speaking, which made me hesitate and lose coherence. We worked on thinking in English, structuring IELTS Part 2 answers, and using linking phrases naturally. Eight weeks later I scored 7.0. I got into my first-choice university in Birmingham.",
    improvements: ["Speaking: 5.0 → 7.0", "Writing: 5.5 → 6.5", "Overall: 5.5 → 7.0"],
    tag: "IELTS",
    tagColor: "bg-blue-100 text-blue-800",
  },
  {
    id: 2,
    name: "Salma R.",
    city: "Casablanca",
    photo: "SR",
    before: "A2",
    after: "B2",
    duration: "4 months",
    goal: "Call centre job at a French-Moroccan company",
    quote:
      "I had studied English at school but I could barely hold a conversation. My biggest fear was speaking on the phone in English — I would freeze completely. My coach at Fluentry gave me real phone call scripts and we practised them until they felt natural. We also worked on my pronunciation of sounds that don't exist in Darija, like the 'th' sound and the difference between 'v' and 'b'. After four months, I passed my job interview entirely in English and I got the position. My manager says my English is better than most of the team.",
    improvements: ["Went from A2 to B2 in 4 months", "Passed English job interview", "Promoted to team lead after 6 months"],
    tag: "Career English",
    tagColor: "bg-green-100 text-green-800",
  },
  {
    id: 3,
    name: "Karim M.",
    city: "Rabat",
    photo: "KM",
    before: "B1",
    after: "C1",
    duration: "6 months",
    goal: "Business English for international clients",
    quote:
      "I was a project manager working with European clients and my English was 'good enough' — but I knew it was holding me back in meetings. I would understand everything but struggle to express complex ideas quickly and confidently. The Fluentry programme focused on business vocabulary, negotiation language, and how to structure arguments clearly in English. The turning point was when I led a client presentation in London and received a standing ovation. My director told me afterwards that my English was 'impressive.' That meant everything.",
    improvements: ["Leads international client meetings", "Promoted to Senior Project Manager", "Negotiates contracts in English"],
    tag: "Business English",
    tagColor: "bg-purple-100 text-purple-800",
  },
  {
    id: 4,
    name: "Fatima Z.",
    city: "Marrakech",
    photo: "FZ",
    before: "A1",
    after: "B1",
    duration: "5 months",
    goal: "English for tourism and hospitality",
    quote:
      "I work at a riad in Marrakech and most of our guests are British and American. I could say 'welcome' and 'breakfast is at 8' but that was it. I was embarrassed every time a guest tried to have a real conversation with me. My Fluentry coach created a custom programme just for hospitality situations — check-in, restaurant recommendations, handling complaints, local tour suggestions. Now I have real conversations with guests every day. One couple from London left a TripAdvisor review specifically mentioning my 'excellent English and warm hospitality.' I cried when I read it.",
    improvements: ["Handles all guest interactions in English", "Received TripAdvisor mention", "Now training junior staff"],
    tag: "Tourism English",
    tagColor: "bg-amber-100 text-amber-800",
  },
  {
    id: 5,
    name: "Omar T.",
    city: "Fès",
    photo: "OT",
    before: "B2",
    after: "IELTS 7.5",
    duration: "6 weeks",
    goal: "IELTS Academic for Canadian immigration",
    quote:
      "I needed IELTS 7.0 overall for my Canadian immigration application and I was stuck at 6.5. The writing task 2 was my weakest point — I knew the ideas but my essays lacked the academic structure examiners want. My coach taught me the exact essay structure that scores band 7+, how to paraphrase the question properly, and how to use academic vocabulary without sounding unnatural. Six weeks of intensive work and I scored 7.5 overall, with 7.0 in writing. My immigration application was approved. I move to Toronto in September.",
    improvements: ["Writing: 6.0 → 7.0", "Speaking: 7.0 → 7.5", "Overall: 6.5 → 7.5"],
    tag: "IELTS",
    tagColor: "bg-blue-100 text-blue-800",
  },
  {
    id: 6,
    name: "Nadia H.",
    city: "Agadir",
    photo: "NH",
    before: "B1",
    after: "B2+",
    duration: "3 months",
    goal: "Confidence for daily professional communication",
    quote:
      "I had a university degree and I could read and write English well, but speaking made me anxious. I would go red, lose my words, and apologise constantly. My coach helped me understand that my grammar was actually very good — the problem was psychological. We worked on fluency drills, shadow speaking, and reframing my mindset about making mistakes. After three months, I gave a presentation at a regional conference entirely in English. My hands were shaking at the start, but I finished strong. Several people came up to me afterwards to ask questions. That was the moment I stopped being afraid.",
    improvements: ["Eliminated speaking anxiety", "Gave conference presentation in English", "Now mentors colleagues on English"],
    tag: "Speaking Confidence",
    tagColor: "bg-rose-100 text-rose-800",
  },
];

const stats = [
  { icon: TrendingUp, value: "94%", label: "of students reach their goal" },
  { icon: Award, value: "IELTS 7+", label: "average score for exam students" },
  { icon: Clock, value: "8 weeks", label: "average time to see major results" },
  { icon: Target, value: "200+", label: "students coached since 2021" },
];

export default function SuccessStories() {
  const { langPrefix } = useLanguage();

  const successFAQ = [
    { question: "Are the Fluentry student success stories real?", answer: "Yes. All testimonials on the Fluentry website are from real students who completed coaching programmes with Mr. Ibrahim K. Results include IELTS band improvements, B2 fluency achievements, and career breakthroughs in Moroccan and international companies." },
    { question: "How quickly can I improve my English with Fluentry?", answer: "Most students see measurable improvement within 4–6 weeks. The 8-Week IELTS Accelerator typically produces a 1–1.5 band score improvement. Fluency and Business English goals are usually achieved within 8–12 weeks of consistent 1-on-1 coaching." },
    { question: "What results can I expect from Fluentry English coaching?", answer: "Results depend on your starting level and goals. Typical outcomes include: IELTS band score improvement of 1–1.5 bands, progression from A2 to B2 level in 8–12 weeks, improved confidence in business meetings and presentations, and career advancement through better English communication." },
    { question: "Does Fluentry guarantee results?", answer: "Yes. Fluentry offers a results guarantee on structured programmes. If you complete the full programme and don't reach your target, Mr. Ibrahim continues coaching at no extra cost. This guarantee reflects his confidence in the method and his commitment to your success." },
  ];

  return (
    <>
      <SEO
        title="Student Success Stories Morocco | IELTS 7.5, B2 Fluency & Career Wins | Fluentry"
        description="Real results from real Moroccan students. IELTS 5.5 → 7.0, A2 → B2 fluency, and career breakthroughs — all in 8 weeks with Fluentry's TESOL-certified coach Mr. Ibrahim K. Read verified testimonials and see what's possible for you."
        keywords="Fluentry success stories, IELTS results Morocco, English improvement Morocco, English coaching testimonials, learn English Tangier, IELTS 7 Morocco, English coaching results Morocco, IELTS improvement Morocco"
        path="/success-stories"
        breadcrumbs={[
          { name: "Home", item: "https://fluentry.online/" },
          { name: "Success Stories", item: "https://fluentry.online/success-stories" },
        ]}
        type="website"
        faqItems={successFAQ}
      />

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            Real students. Real results. No filters.
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            From Hesitant to Confident —<br />
            <span className="text-yellow-400">Stories That Prove It Works</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            These are not generic testimonials. These are real before-and-after journeys from Moroccan students who
            decided to invest in their English — and changed their lives.
          </p>
          <a
            href="https://wa.me/212600000000?text=Hi%2C%20I%20read%20the%20success%20stories%20and%20I%27d%20like%20to%20start%20my%20journey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 text-lg rounded-full shadow-xl">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Your Story Today
            </Button>
          </a>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-white border-b border-gray-100 py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex justify-center mb-2">
                <stat.icon className="w-7 h-7 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Stories Grid ── */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Student Journeys</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every story below started with a single decision: to stop waiting and start working. Read how each
              student identified their specific weakness and turned it into their greatest strength.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((story) => (
              <article
                key={story.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-5 border-b border-gray-100">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md flex-shrink-0">
                        {story.photo}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-lg">{story.name}</div>
                        <div className="text-sm text-gray-500">{story.city}, Morocco</div>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${story.tagColor}`}>
                      {story.tag}
                    </span>
                  </div>

                  {/* Before / After */}
                  <div className="flex items-center gap-3 mt-4">
                    <div className="flex-1 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-center">
                      <div className="text-xs text-red-500 font-medium uppercase tracking-wide mb-1">Before</div>
                      <div className="text-xl font-bold text-red-700">{story.before}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <div className="flex-1 bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-center">
                      <div className="text-xs text-green-500 font-medium uppercase tracking-wide mb-1">After</div>
                      <div className="text-xl font-bold text-green-700">{story.after}</div>
                    </div>
                    <div className="flex-1 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 text-center">
                      <div className="text-xs text-blue-500 font-medium uppercase tracking-wide mb-1">Time</div>
                      <div className="text-sm font-bold text-blue-700">{story.duration}</div>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="px-6 py-5">
                  <div className="text-3xl text-blue-200 font-serif leading-none mb-2">"</div>
                  <p className="text-gray-700 text-sm leading-relaxed italic">{story.quote}</p>

                  {/* Key improvements */}
                  <div className="mt-4 pt-4 border-t border-gray-50">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Key Results
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {story.improvements.map((imp) => (
                        <span
                          key={imp}
                          className="text-xs bg-blue-50 text-blue-700 border border-blue-100 rounded-full px-3 py-1"
                        >
                          ✓ {imp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Your Story Starts With One Message</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Every student above started exactly where you are now. The only difference is they took the first step.
            Book a free 20-minute diagnostic call and find out exactly what is holding your English back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/212600000000?text=Hi%2C%20I%20read%20the%20success%20stories%20and%20I%27d%20like%20to%20book%20a%20free%20diagnostic%20call"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 text-lg rounded-full shadow-xl w-full sm:w-auto">
                <MessageCircle className="w-5 h-5 mr-2" />
                Book Free Diagnostic Call
              </Button>
            </a>
            <Link href={`${langPrefix}/pricing`}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg rounded-full w-full sm:w-auto"
              >
                View Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
