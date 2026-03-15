import { useState } from "react";
import { Briefcase, Linkedin, Monitor, Stethoscope, MessageSquare, DollarSign, Copy, Check } from "lucide-react";

type SubTab = "email-etiquette" | "linkedin" | "meetings" | "salary" | "it-vocab" | "medical";

const subTabs: { id: SubTab; label: string; icon: React.ElementType; color: string }[] = [
  { id: "email-etiquette", label: "Email Etiquette", icon: Briefcase, color: "blue" },
  { id: "linkedin", label: "LinkedIn Guide", icon: Linkedin, color: "indigo" },
  { id: "meetings", label: "Meeting Phrases", icon: MessageSquare, color: "purple" },
  { id: "salary", label: "Salary Scripts", icon: DollarSign, color: "green" },
  { id: "it-vocab", label: "IT Vocabulary", icon: Monitor, color: "orange" },
  { id: "medical", label: "Medical English", icon: Stethoscope, color: "red" },
];

// ── Email Etiquette Data ──────────────────────────────────────────────
const emailEtiquette = [
  { situation: "Opening an email (formal)", phrases: ["I hope this email finds you well.", "I am writing to...", "Further to our previous conversation...", "With reference to your email of [date]..."] },
  { situation: "Making a request", phrases: ["I would be grateful if you could...", "Could you please...", "I would appreciate it if...", "Would it be possible to..."] },
  { situation: "Apologizing for a delay", phrases: ["I apologize for the delay in responding.", "Please accept my apologies for the late reply.", "I am sorry for any inconvenience caused.", "Thank you for your patience."] },
  { situation: "Attaching a document", phrases: ["Please find attached...", "I have attached [document] for your reference.", "Kindly see the attached file.", "The document is enclosed for your review."] },
  { situation: "Asking for clarification", phrases: ["Could you please clarify...", "I would like to confirm that...", "I am not entirely sure I understand. Could you elaborate on...?", "Could you provide more details regarding...?"] },
  { situation: "Closing an email (formal)", phrases: ["I look forward to hearing from you.", "Please do not hesitate to contact me.", "I await your response at your earliest convenience.", "Thank you for your time and consideration."] },
  { situation: "Addressing your boss", phrases: ["Dear Mr./Ms. [Last Name],", "I wanted to bring to your attention...", "I would like to seek your approval for...", "I am writing to update you on..."] },
  { situation: "Declining politely", phrases: ["Thank you for the offer, however...", "I regret to inform you that...", "Unfortunately, I am unable to...", "While I appreciate the opportunity, I must respectfully decline."] },
];

// ── LinkedIn Guide Data ──────────────────────────────────────────────
const linkedinGuide = [
  { section: "Profile Headline", tips: ["Don't just write your job title — add value: 'Marketing Manager | Helping Moroccan brands grow internationally'", "Include keywords recruiters search for: 'English Tutor | TESOL Certified | IELTS Preparation'", "Keep it under 220 characters", "Avoid vague terms like 'Hardworking professional'"] },
  { section: "About / Summary Section", tips: ["Start with a strong first sentence — this is what people see before clicking 'see more'", "Write in first person: 'I am a...' not 'He/She is a...'", "Include: who you are, what you do, what makes you different, and a call to action", "End with: 'Feel free to connect with me at [email]'"] },
  { section: "Experience Section", tips: ["Use bullet points starting with action verbs: Managed, Led, Developed, Increased, Reduced", "Include numbers where possible: 'Increased sales by 30%' not 'Improved sales'", "Translate French job titles to their English equivalents", "Include your company's English name if it has one"] },
  { section: "Skills Section", tips: ["Add at least 10 skills — LinkedIn shows you in more searches", "Prioritize skills that match your target job", "Ask colleagues to endorse your top skills", "Include both hard skills (Excel, Python) and soft skills (Leadership, Communication)"] },
  { section: "Connecting with Recruiters", tips: ["Personalize every connection request: 'Hi [Name], I came across your profile and...'", "Never send a blank connection request to a recruiter", "Follow companies you want to work for", "Engage with posts by commenting thoughtfully — not just 'Great post!'"] },
];

// ── Meeting Phrases Data ──────────────────────────────────────────────
const meetingPhrases = [
  { situation: "Starting a meeting", phrases: ["Let's get started, shall we?", "Thank you all for joining today.", "The purpose of today's meeting is to...", "Let's go through the agenda."] },
  { situation: "Interrupting politely", phrases: ["Sorry to interrupt, but...", "If I could just add something here...", "Could I come in at this point?", "Excuse me, I'd like to raise a point."] },
  { situation: "Asking for clarification", phrases: ["Could you elaborate on that?", "What exactly do you mean by...?", "Could you give us an example?", "I'm not sure I follow — could you clarify?"] },
  { situation: "Agreeing", phrases: ["That's a valid point.", "I completely agree with you.", "Absolutely, I think that's the right approach.", "You've made an excellent point."] },
  { situation: "Disagreeing politely", phrases: ["I see your point, however...", "I'm not entirely convinced that...", "With all due respect, I think...", "That's one way to look at it, but..."] },
  { situation: "Giving your opinion", phrases: ["In my view...", "From my perspective...", "I strongly believe that...", "It seems to me that..."] },
  { situation: "Summarizing", phrases: ["To summarize what we've discussed...", "So, to recap the main points...", "In brief, we've agreed that...", "Let me just run through the key takeaways."] },
  { situation: "Closing a meeting", phrases: ["I think we've covered everything.", "Let's wrap up here.", "Thank you all for your contributions.", "The next meeting will be on [date]."] },
  { situation: "Zoom / Online meetings", phrases: ["Can everyone hear me clearly?", "You're on mute — could you unmute yourself?", "I think we lost [Name] — let's wait a moment.", "Could you share your screen, please?"] },
];

// ── Salary Negotiation Scripts ──────────────────────────────────────────────
const salaryScripts = [
  { situation: "When asked your expected salary", script: "Based on my research into the market rate for this role and my [X] years of experience, I was expecting a salary in the range of [amount]. However, I am open to discussing the full compensation package." },
  { situation: "Countering a low offer", script: "Thank you for the offer — I am genuinely excited about this opportunity. However, based on my skills and the value I can bring to the team, I was hoping we could discuss a figure closer to [amount]. Is there any flexibility on that?" },
  { situation: "Asking for a raise from your current employer", script: "I would like to discuss my compensation. Over the past [period], I have [list 2-3 key achievements]. Given this contribution and the current market rate, I believe a salary adjustment to [amount] would be appropriate." },
  { situation: "Negotiating with an international client (freelance)", script: "Thank you for reaching out. My rate for this type of project is [amount] per [hour/day/project]. This reflects my expertise in [skill] and the quality of work you can expect. I am happy to discuss the scope if needed." },
  { situation: "Asking for more time to decide", script: "Thank you very much for the offer. I am very interested in the position. Could I have until [date] to review the details and get back to you with my decision?" },
  { situation: "Accepting an offer professionally", script: "I am delighted to accept the offer. I confirm my acceptance of the position of [Job Title] at a salary of [amount]. I look forward to joining the team on [start date]." },
  { situation: "Declining an offer professionally", script: "Thank you so much for the offer. After careful consideration, I have decided to decline at this time. I truly appreciate the opportunity and hope we can stay in touch for future possibilities." },
];

// ── IT Vocabulary Data ──────────────────────────────────────────────
const itVocab = [
  { term: "Stand-up / Daily Scrum", definition: "A short daily team meeting (usually 15 min) where everyone answers: What did I do yesterday? What will I do today? Any blockers?", example: "We have a stand-up every morning at 9 AM." },
  { term: "Sprint", definition: "A fixed time period (usually 2 weeks) in which a team completes a set of tasks.", example: "We're finishing the login feature in this sprint." },
  { term: "Backlog", definition: "A list of features, tasks, or bugs that need to be worked on.", example: "That bug is in the backlog — we'll fix it next sprint." },
  { term: "Pull Request (PR)", definition: "A request to merge your code changes into the main codebase, reviewed by teammates.", example: "I just opened a PR for the new API endpoint." },
  { term: "Code Review", definition: "The process of teammates examining each other's code before it is merged.", example: "Can you do a code review on my PR?" },
  { term: "Deploy / Deployment", definition: "The process of releasing your code to a live server or production environment.", example: "We'll deploy the new feature on Friday." },
  { term: "Bug", definition: "An error or flaw in the code that causes unexpected behavior.", example: "There's a bug in the checkout page — users can't complete payment." },
  { term: "Blocker", definition: "A problem that prevents you from completing your work.", example: "I have a blocker — the API isn't returning the correct data." },
  { term: "Refactor", definition: "Rewriting existing code to improve its structure without changing its functionality.", example: "I need to refactor this function — it's too complex." },
  { term: "Tech Debt", definition: "The future cost of shortcuts taken now in coding.", example: "We need to address the tech debt in the authentication module." },
  { term: "Agile", definition: "A project management methodology focused on iterative development and flexibility.", example: "We work in an Agile environment with two-week sprints." },
  { term: "Version Control (Git)", definition: "A system for tracking changes to code over time.", example: "Always commit your changes to Git before going home." },
  { term: "CI/CD", definition: "Continuous Integration / Continuous Deployment — automating the testing and release of code.", example: "Our CI/CD pipeline runs tests automatically on every PR." },
  { term: "Stakeholder", definition: "Anyone with an interest in the project (managers, clients, users).", example: "We need to present the demo to stakeholders on Thursday." },
  { term: "Scope Creep", definition: "When a project grows beyond its original requirements.", example: "The client keeps adding features — this is scope creep." },
  { term: "LGTM", definition: "Looks Good To Me — used in code reviews to approve a PR.", example: "LGTM! Merging now." },
  { term: "AFK", definition: "Away From Keyboard — temporarily unavailable.", example: "I'll be AFK for 30 minutes — in a meeting." },
  { term: "ETA", definition: "Estimated Time of Arrival — when something will be done.", example: "What's the ETA on the bug fix?" },
];

// ── Medical English Data ──────────────────────────────────────────────
const medicalEnglish = [
  { category: "Symptoms & Conditions", terms: [
    { term: "Shortness of breath", definition: "Difficulty breathing / feeling like you cannot get enough air" },
    { term: "Nausea", definition: "Feeling like you want to vomit" },
    { term: "Dizziness", definition: "Feeling unsteady or like the room is spinning" },
    { term: "Palpitations", definition: "Rapid or irregular heartbeat" },
    { term: "Hypertension", definition: "High blood pressure" },
    { term: "Hypoglycemia", definition: "Low blood sugar" },
    { term: "Edema", definition: "Swelling caused by fluid retention" },
    { term: "Dyspnea", definition: "Difficulty breathing (medical term)" },
  ]},
  { category: "Medical Procedures", terms: [
    { term: "Blood draw / Venipuncture", definition: "Taking blood from a vein for testing" },
    { term: "Sutures / Stitches", definition: "Thread used to close a wound" },
    { term: "IV (Intravenous)", definition: "Medication or fluids given directly into a vein" },
    { term: "Intubation", definition: "Inserting a tube into the throat to help breathing" },
    { term: "Catheter", definition: "A thin tube inserted into the body to drain fluids" },
    { term: "Biopsy", definition: "Removing a small sample of tissue for testing" },
  ]},
  { category: "Talking to Patients", terms: [
    { term: "Where does it hurt?", definition: "Asking the location of pain" },
    { term: "On a scale of 1 to 10, how would you rate your pain?", definition: "Pain assessment question" },
    { term: "Are you allergic to any medications?", definition: "Checking for drug allergies" },
    { term: "Have you taken anything for this?", definition: "Asking about self-medication" },
    { term: "I'm going to take your blood pressure.", definition: "Informing the patient of a procedure" },
    { term: "You'll feel a slight pinch.", definition: "Warning before an injection" },
    { term: "Take this medication twice a day with food.", definition: "Giving dosage instructions" },
    { term: "You need to fast for 8 hours before the test.", definition: "Pre-test instructions" },
  ]},
  { category: "UK Healthcare Vocabulary", terms: [
    { term: "GP (General Practitioner)", definition: "A family doctor — the first point of contact in the NHS" },
    { term: "NHS (National Health Service)", definition: "The UK's public healthcare system" },
    { term: "Ward", definition: "A room or area in a hospital for patients" },
    { term: "Consultant", definition: "A senior specialist doctor" },
    { term: "Registrar", definition: "A doctor in specialist training (below consultant)" },
    { term: "Scrubs", definition: "The uniform worn by medical staff" },
    { term: "On call", definition: "Available to work outside normal hours if needed" },
    { term: "Handover", definition: "Passing patient care information to the next shift" },
  ]},
];

export default function ProfessionalEnglish() {
  const [activeTab, setActiveTab] = useState<SubTab>("email-etiquette");
  const [copiedPhrase, setCopiedPhrase] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPhrase(text);
    setTimeout(() => setCopiedPhrase(null), 1500);
  };

  const colorMap: Record<string, string> = {
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-200",
    purple: "bg-purple-50 text-purple-700 border-purple-200",
    green: "bg-green-50 text-green-700 border-green-200",
    orange: "bg-orange-50 text-orange-700 border-orange-200",
    red: "bg-red-50 text-red-700 border-red-200",
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold">
          <Briefcase className="w-4 h-4" />
          6 Professional English Guides
        </div>
        <h3 className="text-xl font-bold text-gray-900">Professional English for Moroccan Professionals</h3>
        <p className="text-gray-500 text-sm max-w-lg mx-auto">
          Email etiquette, LinkedIn optimization, meeting phrases, salary negotiation, IT vocabulary, and medical English — all in one place.
        </p>
      </div>

      {/* Sub-tab selector */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {subTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 text-xs font-semibold text-center transition-all ${
                isActive
                  ? `border-current ${colorMap[tab.color]} shadow-sm`
                  : "border-gray-200 text-gray-500 hover:border-gray-300 bg-white"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="leading-tight">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="space-y-4">

        {/* Email Etiquette */}
        {activeTab === "email-etiquette" && (
          <div className="space-y-3">
            <p className="text-sm text-gray-500 text-center">Click any phrase to copy it instantly.</p>
            {emailEtiquette.map((section) => (
              <div key={section.situation} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="px-4 py-2.5 bg-blue-50 border-b border-blue-100">
                  <p className="text-sm font-bold text-blue-800">{section.situation}</p>
                </div>
                <div className="p-3 flex flex-wrap gap-2">
                  {section.phrases.map((phrase) => (
                    <button
                      key={phrase}
                      onClick={() => handleCopy(phrase)}
                      className="flex items-center gap-1.5 px-3 py-2 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg text-sm text-gray-700 transition-colors text-left"
                    >
                      {copiedPhrase === phrase ? <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0" /> : <Copy className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" />}
                      {phrase}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* LinkedIn Guide */}
        {activeTab === "linkedin" && (
          <div className="space-y-3">
            {linkedinGuide.map((section) => (
              <div key={section.section} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="px-4 py-2.5 bg-indigo-50 border-b border-indigo-100">
                  <p className="text-sm font-bold text-indigo-800">📌 {section.section}</p>
                </div>
                <div className="p-4 space-y-2">
                  {section.tips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-indigo-500 font-bold text-sm flex-shrink-0 mt-0.5">✓</span>
                      <p className="text-sm text-gray-700">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Meeting Phrases */}
        {activeTab === "meetings" && (
          <div className="space-y-3">
            <p className="text-sm text-gray-500 text-center">Click any phrase to copy it.</p>
            {meetingPhrases.map((section) => (
              <div key={section.situation} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="px-4 py-2.5 bg-purple-50 border-b border-purple-100">
                  <p className="text-sm font-bold text-purple-800">{section.situation}</p>
                </div>
                <div className="p-3 flex flex-wrap gap-2">
                  {section.phrases.map((phrase) => (
                    <button
                      key={phrase}
                      onClick={() => handleCopy(phrase)}
                      className="flex items-center gap-1.5 px-3 py-2 bg-gray-50 hover:bg-purple-50 border border-gray-200 hover:border-purple-300 rounded-lg text-sm text-gray-700 transition-colors text-left"
                    >
                      {copiedPhrase === phrase ? <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0" /> : <Copy className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" />}
                      {phrase}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Salary Scripts */}
        {activeTab === "salary" && (
          <div className="space-y-3">
            {salaryScripts.map((item) => (
              <div key={item.situation} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="px-4 py-2.5 bg-green-50 border-b border-green-100">
                  <p className="text-sm font-bold text-green-800">💬 {item.situation}</p>
                </div>
                <div className="p-4 relative">
                  <p className="text-sm text-gray-700 italic pr-10">"{item.script}"</p>
                  <button
                    onClick={() => handleCopy(item.script)}
                    className="absolute top-3 right-3 p-1.5 text-gray-400 hover:text-green-600 transition-colors"
                    title="Copy script"
                  >
                    {copiedPhrase === item.script ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            ))}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <p className="text-xs text-yellow-800 font-semibold mb-1">💡 Key Negotiation Principle</p>
              <p className="text-xs text-yellow-700">Always let the employer make the first offer if possible. When you must give a number, give a range with your target at the bottom: "I'm looking for between 8,000 and 10,000 MAD/month."</p>
            </div>
          </div>
        )}

        {/* IT Vocabulary */}
        {activeTab === "it-vocab" && (
          <div className="space-y-2">
            {itVocab.map((item) => (
              <div key={item.term} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-shadow">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="font-bold text-orange-700 text-sm">{item.term}</p>
                    <p className="text-sm text-gray-600 mt-0.5">{item.definition}</p>
                    <p className="text-xs text-gray-400 italic mt-1">"{item.example}"</p>
                  </div>
                  <button
                    onClick={() => handleCopy(item.term)}
                    className="flex-shrink-0 p-1.5 text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    {copiedPhrase === item.term ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Medical English */}
        {activeTab === "medical" && (
          <div className="space-y-4">
            {medicalEnglish.map((section) => (
              <div key={section.category} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="px-4 py-2.5 bg-red-50 border-b border-red-100">
                  <p className="text-sm font-bold text-red-800">🏥 {section.category}</p>
                </div>
                <div className="divide-y divide-gray-50">
                  {section.terms.map((item) => (
                    <div key={item.term} className="flex items-start justify-between gap-3 px-4 py-3 hover:bg-gray-50 transition-colors">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800 text-sm">{item.term}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{item.definition}</p>
                      </div>
                      <button
                        onClick={() => handleCopy(item.term)}
                        className="flex-shrink-0 p-1.5 text-gray-300 hover:text-red-500 transition-colors"
                      >
                        {copiedPhrase === item.term ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
