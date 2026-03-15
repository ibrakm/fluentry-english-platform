import { useState } from "react";
import { Copy, Check, BookOpen, ChevronDown, ChevronUp } from "lucide-react";

interface Template {
  id: string;
  type: string;
  title: string;
  description: string;
  structure: string[];
  template: string;
  example: string;
  tips: string[];
}

const templates: Template[] = [
  {
    id: "formal-letter",
    type: "Formal Letter",
    title: "Formal Letter / Letter of Complaint",
    description: "Used in BAC exams to write to an official, editor, or organization.",
    structure: ["Your address (top right)", "Date", "Recipient's address (left)", "Salutation: Dear Sir/Madam,", "Introduction paragraph", "Body paragraph(s)", "Conclusion paragraph", "Closing: Yours faithfully,", "Your name"],
    template: `[Your address]
[City, Date]

[Recipient's Name / Title]
[Organization]
[Address]

Dear Sir/Madam,

I am writing to [state your purpose: complain about / inquire about / express my concern regarding] ________________.

[Body Paragraph 1: Explain the situation or problem clearly]
________________

[Body Paragraph 2: Provide details, evidence, or your argument]
________________

[Conclusion: State what action you expect or summarize your point]
I would be grateful if you could ________________. I look forward to your prompt response.

Yours faithfully,
[Your Full Name]`,
    example: `Tangier, 15 March 2025

The Editor
The Daily Tribune
Casablanca

Dear Sir/Madam,

I am writing to express my concern regarding the increasing use of social media among Moroccan teenagers and its negative effects on academic performance.

Recent studies have shown that students who spend more than three hours daily on social media platforms tend to score lower on national exams. As a student myself, I have witnessed this problem firsthand among my peers.

I strongly believe that schools and parents must work together to set healthy limits on screen time. I would be grateful if your newspaper could raise awareness about this issue.

Yours faithfully,
Youssef Alami`,
    tips: ["Always use 'Dear Sir/Madam' if you don't know the name", "Use 'Yours faithfully' when you start with 'Dear Sir/Madam'", "Use 'Yours sincerely' when you know the person's name", "Keep paragraphs short and clear", "State your purpose in the FIRST sentence"],
  },
  {
    id: "article",
    type: "Article",
    title: "Magazine / Newspaper Article",
    description: "Write an article for a school magazine, newspaper, or website on a given topic.",
    structure: ["Catchy title", "Introduction (hook + topic)", "Body paragraph 1 (first point)", "Body paragraph 2 (second point)", "Body paragraph 3 (counterargument or solution)", "Conclusion (summary + call to action)"],
    template: `[CATCHY TITLE: Use a question, statistic, or bold statement]

[Introduction: Start with a hook — a surprising fact, question, or quote. Then introduce the topic.]
________________

[Body Paragraph 1: First main point with supporting details or examples]
________________

[Body Paragraph 2: Second main point — use linking words: Moreover, Furthermore, In addition]
________________

[Body Paragraph 3: Counterargument OR solution/recommendation]
________________

[Conclusion: Summarize your points and end with a strong final thought or call to action]
________________`,
    example: `IS SOCIAL MEDIA DESTROYING OUR GENERATION?

Imagine spending six hours a day staring at a screen — that is the reality for millions of Moroccan teenagers today. Social media has become an unavoidable part of modern life, but at what cost?

On one hand, platforms like Instagram and TikTok offer genuine benefits. They allow young people to connect with others, discover new cultures, and even learn English through short videos and podcasts. Many students have improved their language skills simply by following English-language content creators.

However, the dangers are equally real. Excessive use of social media has been linked to poor concentration, sleep deprivation, and declining academic performance. Students who spend hours scrolling through their feeds often struggle to focus during class.

The solution lies in balance. Schools should incorporate digital literacy programmes, and parents must set reasonable screen time limits. Social media is a tool — and like any tool, its value depends entirely on how we use it.

In conclusion, social media is neither good nor bad by nature. It is our responsibility, as individuals and as a society, to use it wisely.`,
    tips: ["The title must be catchy — use a question or a bold statement", "Start with a hook: a surprising fact, a question, or a quote", "Use linking words: Moreover, Furthermore, However, In addition, As a result", "Include both sides of the argument for a balanced article", "End with a strong, memorable conclusion"],
  },
  {
    id: "for-against-essay",
    type: "For & Against Essay",
    title: "For & Against / Discursive Essay",
    description: "Present both sides of an argument before giving your opinion.",
    structure: ["Introduction: present the topic and its controversy", "Body 1: Arguments FOR (advantages)", "Body 2: Arguments AGAINST (disadvantages)", "Conclusion: your balanced opinion"],
    template: `[Introduction: Introduce the topic and explain why it is debated]
________________ has become one of the most debated topics in recent years. While some people argue that ________________, others believe that ________________.

[Body Paragraph 1 — FOR / Advantages]
On the one hand, there are several arguments in favour of ________________. First and foremost, ________________. Furthermore, ________________.

[Body Paragraph 2 — AGAINST / Disadvantages]
On the other hand, critics point out that ________________. In addition, ________________. Another major drawback is that ________________.

[Conclusion — Balanced opinion]
In conclusion, while ________________ has clear advantages, it also carries significant risks. On balance, I believe that ________________, provided that ________________.`,
    example: `The use of mobile phones in Moroccan classrooms has become one of the most debated topics in recent years. While some people argue that smartphones are valuable learning tools, others believe that they are a major distraction.

On the one hand, there are several arguments in favour of allowing phones in school. First and foremost, smartphones give students instant access to information and educational apps. Furthermore, they can be used for collaborative projects and research, making lessons more engaging and interactive.

On the other hand, critics point out that mobile phones are a significant source of distraction. In addition, many students use them to cheat during tests. Another major drawback is that excessive screen time can damage students' concentration and social skills.

In conclusion, while mobile phones have clear educational potential, they also carry significant risks. On balance, I believe that a regulated approach — where phones are permitted for specific tasks under teacher supervision — would be the most effective solution.`,
    tips: ["Use 'On the one hand... On the other hand' for contrast", "Never start a paragraph with 'I'", "Use impersonal language: 'It is argued that...' / 'Critics point out that...'", "Your opinion should only appear in the conclusion", "Aim for 3 paragraphs in the body"],
  },
  {
    id: "report",
    type: "Report",
    title: "Report",
    description: "A formal, structured document presenting findings and recommendations.",
    structure: ["Title: REPORT ON ___", "Introduction: purpose of the report", "Findings: what you discovered (use subheadings)", "Recommendations: what should be done", "Conclusion"],
    template: `REPORT ON ________________

Introduction
The purpose of this report is to ________________. The information was gathered through ________________.

Findings
[Subheading 1: e.g., Current Situation]
________________

[Subheading 2: e.g., Main Problems Identified]
________________

Recommendations
Based on the findings above, the following measures are recommended:
1. ________________
2. ________________
3. ________________

Conclusion
In conclusion, ________________. It is hoped that the above recommendations will be considered seriously.`,
    example: `REPORT ON ENGLISH LANGUAGE LEARNING IN MOROCCAN SECONDARY SCHOOLS

Introduction
The purpose of this report is to assess the current state of English language teaching in Moroccan secondary schools and to suggest practical improvements. The information was gathered through student surveys and classroom observations.

Findings

Current Situation
English is taught for approximately three hours per week in most Moroccan secondary schools. While students show strong motivation to learn, many report feeling underprepared for real-world communication.

Main Problems Identified
The main challenges include a lack of speaking practice, an overemphasis on grammar rules, and limited access to authentic English materials such as films and books.

Recommendations
Based on the findings above, the following measures are recommended:
1. Increase weekly speaking and listening activities in all English classes.
2. Provide teachers with access to digital resources and online training.
3. Establish English conversation clubs in every school.

Conclusion
In conclusion, improving English education in Morocco requires a shift from grammar-focused teaching to communication-based learning. It is hoped that the above recommendations will be considered seriously by the relevant authorities.`,
    tips: ["Use clear subheadings to organize your report", "Write in a formal, impersonal style", "Use numbered lists for recommendations", "Never use contractions (don't, can't) in a report", "Start with 'The purpose of this report is to...'"],
  },
  {
    id: "speech",
    type: "Speech",
    title: "Speech / Talk",
    description: "A speech delivered to an audience — classmates, a school assembly, or a conference.",
    structure: ["Greeting the audience", "Introduction of the topic", "Body: 2-3 main points", "Conclusion: summary and call to action", "Thank the audience"],
    template: `Good morning/afternoon, ladies and gentlemen / dear friends and colleagues,

Today, I would like to talk to you about a topic that I feel very strongly about: ________________.

[Point 1: First main argument or idea]
First of all, ________________. As you can see, ________________.

[Point 2: Second main argument or idea]
Furthermore, ________________. This is particularly important because ________________.

[Point 3: Optional — third point or counterargument]
Some people may argue that ________________. However, ________________.

[Conclusion]
In conclusion, I would like to remind you that ________________. I urge each and every one of you to ________________.

Thank you for your attention. I am happy to take any questions.`,
    example: `Good morning, dear teachers and fellow students,

Today, I would like to talk to you about a topic that affects every single one of us: the importance of learning English in today's Morocco.

First of all, English is no longer just a school subject — it is the language of global opportunity. Whether you want to study abroad, work in an international company, or simply connect with people from around the world, English is your key. As you can see, the demand for English speakers in Morocco's job market has never been higher.

Furthermore, learning English opens the door to a world of knowledge. The majority of scientific research, technology, and online content is produced in English. By mastering this language, you gain access to information that most people around you simply cannot reach.

Some people may argue that French is sufficient for success in Morocco. However, the world is changing rapidly, and companies are increasingly choosing English as their working language.

In conclusion, I would like to remind you that every hour you invest in learning English is an investment in your future. I urge each and every one of you to take this opportunity seriously.

Thank you for your attention.`,
    tips: ["Always greet your audience at the start", "Use rhetorical questions to engage the audience: 'Have you ever wondered..?'", "Use direct address: 'I urge you to...' / 'As you know...'", "End with a clear call to action", "Thank the audience at the end"],
  },
  {
    id: "summary",
    type: "Summary",
    title: "Summary / Précis Writing",
    description: "Summarize a long text in your own words, keeping only the main ideas.",
    structure: ["Read the full text carefully", "Identify the main idea of each paragraph", "Write in your own words — do NOT copy sentences", "Use about 1/3 of the original word count", "Keep the same order of ideas"],
    template: `[Step 1: Write the main idea of the text in one sentence]
The text is about ________________.

[Step 2: Summarize paragraph by paragraph in your own words]
According to the text, ________________. The author also points out that ________________. Furthermore, ________________.

[Step 3: End with the author's conclusion]
In conclusion, the author argues that ________________.`,
    example: `Original text topic: The benefits of bilingualism in Morocco.

Summary:
The text discusses the advantages of speaking multiple languages in Morocco. According to the author, bilingual individuals tend to have better job prospects and higher salaries than monolingual speakers. The author also points out that speaking both Arabic and French — or Arabic and English — gives Moroccan professionals a significant competitive advantage in the global market. Furthermore, research suggests that bilingualism improves cognitive abilities such as memory and problem-solving. In conclusion, the author argues that Morocco should invest more heavily in language education to prepare its youth for the demands of the modern economy.`,
    tips: ["Never copy sentences directly from the original text", "Use reporting verbs: 'The author argues...', 'According to the text...'", "Do not include your personal opinion", "Aim for 1/3 of the original length", "Keep the same order as the original text"],
  },
];

export default function BACWritingTemplates() {
  const [activeTemplate, setActiveTemplate] = useState(templates[0].id);
  const [activeTab, setActiveTab] = useState<"template" | "example" | "tips">("template");
  const [copied, setCopied] = useState(false);
  const [expandedStructure, setExpandedStructure] = useState(false);

  const current = templates.find((t) => t.id === activeTemplate)!;

  const handleCopy = () => {
    navigator.clipboard.writeText(current.template);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold">
          <BookOpen className="w-4 h-4" />
          {templates.length} Writing Types · BAC Exam Ready
        </div>
        <h3 className="text-xl font-bold text-gray-900">BAC English Writing Templates</h3>
        <p className="text-gray-500 text-sm max-w-lg mx-auto">
          Master every writing task in the Moroccan BAC English exam. Copy the template, fill in the blanks, and study the real examples.
        </p>
      </div>

      {/* Writing Type Selector */}
      <div className="flex flex-wrap gap-2 justify-center">
        {templates.map((t) => (
          <button
            key={t.id}
            onClick={() => { setActiveTemplate(t.id); setActiveTab("template"); setExpandedStructure(false); }}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              activeTemplate === t.id
                ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                : "bg-white text-gray-500 border-gray-200 hover:border-blue-300 hover:text-blue-600"
            }`}
          >
            {t.type}
          </button>
        ))}
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Card Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-4 text-white">
          <h4 className="font-bold text-lg">{current.title}</h4>
          <p className="text-blue-100 text-sm mt-0.5">{current.description}</p>
        </div>

        {/* Structure Accordion */}
        <div className="border-b border-gray-100">
          <button
            onClick={() => setExpandedStructure(!expandedStructure)}
            className="w-full flex items-center justify-between px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <span>📋 Structure Overview</span>
            {expandedStructure ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedStructure && (
            <div className="px-5 pb-4">
              <ol className="space-y-1">
                {current.structure.map((step, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-100">
          {(["template", "example", "tips"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2.5 text-sm font-semibold capitalize transition-colors ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50/50"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab === "template" ? "📝 Template" : tab === "example" ? "✅ Example" : "💡 Tips"}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-5">
          {activeTab === "template" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-400">Fill in the blanks with your own content</p>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-xs font-semibold transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? "Copied!" : "Copy Template"}
                </button>
              </div>
              <pre className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-700 whitespace-pre-wrap font-mono leading-relaxed overflow-x-auto">
                {current.template}
              </pre>
            </div>
          )}

          {activeTab === "example" && (
            <div className="space-y-3">
              <p className="text-xs text-gray-400">A complete example using this template</p>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
                {current.example}
              </div>
            </div>
          )}

          {activeTab === "tips" && (
            <div className="space-y-2">
              <p className="text-xs text-gray-400 mb-3">Key tips to score higher on this writing type</p>
              {current.tips.map((tip, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 bg-orange-50 rounded-lg border border-orange-100">
                  <span className="text-orange-500 font-bold text-sm flex-shrink-0">✓</span>
                  <p className="text-sm text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <p className="text-center text-xs text-gray-400">
        💡 <strong>Tip:</strong> Practice writing one full essay per week using these templates. For personalized feedback from Mr. Ibrahim, book a lesson on WhatsApp.
      </p>
    </div>
  );
}
