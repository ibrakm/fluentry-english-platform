import { useState, useMemo } from "react";
import { Search, AlertTriangle } from "lucide-react";

interface FalseFriend {
  french: string;
  frenchMeaning: string;
  english: string;
  englishMeaning: string;
  correctEnglish: string;
  example: string;
  category: string;
}

const falseFriends: FalseFriend[] = [
  // Classic traps
  { french: "Actuellement", frenchMeaning: "Currently / At the moment", english: "Actually", englishMeaning: "In fact / In reality", correctEnglish: "Currently / At the moment", example: "❌ 'Actually, I work in Casablanca.' ✅ 'Currently, I work in Casablanca.'", category: "Classic Traps" },
  { french: "Éventuellement", frenchMeaning: "Possibly / Perhaps", english: "Eventually", englishMeaning: "In the end / After a long time", correctEnglish: "Possibly / Perhaps", example: "❌ 'Eventually, I can help you.' ✅ 'Possibly, I can help you.'", category: "Classic Traps" },
  { french: "Sensible", frenchMeaning: "Sensitive / Emotional", english: "Sensible", englishMeaning: "Reasonable / Practical", correctEnglish: "Sensitive", example: "❌ 'She is very sensible about criticism.' ✅ 'She is very sensitive about criticism.'", category: "Classic Traps" },
  { french: "Sympathique", frenchMeaning: "Nice / Friendly", english: "Sympathetic", englishMeaning: "Showing understanding for someone's problems", correctEnglish: "Nice / Friendly", example: "❌ 'He is very sympathetic.' ✅ 'He is very nice/friendly.'", category: "Classic Traps" },
  { french: "Rester", frenchMeaning: "To stay / To remain", english: "To rest", englishMeaning: "To relax / To stop working", correctEnglish: "To stay / To remain", example: "❌ 'I will rest at home tonight.' ✅ 'I will stay at home tonight.'", category: "Classic Traps" },
  { french: "Assister à", frenchMeaning: "To attend (an event)", english: "To assist", englishMeaning: "To help someone", correctEnglish: "To attend", example: "❌ 'I assisted the conference.' ✅ 'I attended the conference.'", category: "Classic Traps" },
  { french: "Passer un examen", frenchMeaning: "To take an exam", english: "To pass an exam", englishMeaning: "To succeed in an exam", correctEnglish: "To take an exam", example: "❌ 'I passed my exam yesterday.' (meaning: I took it) ✅ 'I took my exam yesterday.'", category: "Classic Traps" },
  { french: "Demander", frenchMeaning: "To ask", english: "To demand", englishMeaning: "To insist / To require forcefully", correctEnglish: "To ask", example: "❌ 'I demanded him where the office was.' ✅ 'I asked him where the office was.'", category: "Classic Traps" },

  // Work & Professional
  { french: "Agenda", frenchMeaning: "Diary / Personal planner", english: "Agenda", englishMeaning: "List of topics for a meeting", correctEnglish: "Diary / Planner", example: "❌ 'I wrote it in my agenda.' ✅ 'I wrote it in my diary/planner.'", category: "Work & Professional" },
  { french: "Stage", frenchMeaning: "Internship / Training period", english: "Stage", englishMeaning: "A platform / A level / A phase", correctEnglish: "Internship / Placement", example: "❌ 'I did a stage at a bank.' ✅ 'I did an internship at a bank.'", category: "Work & Professional" },
  { french: "Stagiaire", frenchMeaning: "Intern / Trainee", english: "Stagehand", englishMeaning: "A theater worker who moves scenery", correctEnglish: "Intern / Trainee", example: "❌ 'She is a stagehand at the company.' ✅ 'She is an intern at the company.'", category: "Work & Professional" },
  { french: "Formateur", frenchMeaning: "Trainer / Instructor", english: "Formatter", englishMeaning: "A tool that formats files", correctEnglish: "Trainer / Instructor", example: "❌ 'He is a formatter at the school.' ✅ 'He is a trainer at the school.'", category: "Work & Professional" },
  { french: "Conférence", frenchMeaning: "Lecture / Talk / Conference", english: "Conference", englishMeaning: "A large professional meeting (correct!)", correctEnglish: "Lecture (for a talk at university)", example: "❌ 'I attended a conference at university.' ✅ 'I attended a lecture at university.'", category: "Work & Professional" },
  { french: "Journée", frenchMeaning: "Day (the full day)", english: "Journey", englishMeaning: "A trip / Travel from one place to another", correctEnglish: "Day", example: "❌ 'It was a long journey at work.' ✅ 'It was a long day at work.'", category: "Work & Professional" },

  // Education
  { french: "Librairie", frenchMeaning: "Bookshop / Bookstore", english: "Library", englishMeaning: "A place to borrow books for free", correctEnglish: "Bookshop / Bookstore", example: "❌ 'I bought this at the library.' ✅ 'I bought this at the bookshop.'", category: "Education" },
  { french: "Professeur", frenchMeaning: "Teacher (any level)", english: "Professor", englishMeaning: "A university teacher (senior academic)", correctEnglish: "Teacher", example: "❌ 'My professor at high school is strict.' ✅ 'My teacher at high school is strict.'", category: "Education" },
  { french: "Étudier", frenchMeaning: "To study", english: "To study", englishMeaning: "To study (correct!)", correctEnglish: "To study (but 'étudier' can also mean 'to examine')", example: "Note: 'étudier un dossier' = 'to examine a file', not 'to study a file'", category: "Education" },
  { french: "Bachelier", frenchMeaning: "BAC graduate / High school graduate", english: "Bachelor", englishMeaning: "An unmarried man / Bachelor's degree", correctEnglish: "High school graduate / BAC holder", example: "❌ 'I am a bachelor.' (meaning: I finished high school) ✅ 'I am a high school graduate.'", category: "Education" },

  // Everyday Life
  { french: "Car", frenchMeaning: "Because / For (conjunction)", english: "Car", englishMeaning: "An automobile / Vehicle", correctEnglish: "Because", example: "❌ 'I stayed home car I was tired.' ✅ 'I stayed home because I was tired.'", category: "Everyday Life" },
  { french: "Coin", frenchMeaning: "Corner / Spot", english: "Coin", englishMeaning: "A metal piece of money", correctEnglish: "Corner / Spot", example: "❌ 'Meet me at the coin of the street.' ✅ 'Meet me at the corner of the street.'", category: "Everyday Life" },
  { french: "Déception", frenchMeaning: "Disappointment", english: "Deception", englishMeaning: "The act of lying / Tricking someone", correctEnglish: "Disappointment", example: "❌ 'I felt a lot of deception.' ✅ 'I felt a lot of disappointment.'", category: "Everyday Life" },
  { french: "Prétendre", frenchMeaning: "To claim / To assert", english: "To pretend", englishMeaning: "To act as if something is true when it isn't", correctEnglish: "To claim", example: "❌ 'He pretends to be innocent.' ✅ 'He claims to be innocent.' (if you mean he asserts it seriously)", category: "Everyday Life" },
  { french: "Chance", frenchMeaning: "Luck", english: "Chance", englishMeaning: "An opportunity / Possibility", correctEnglish: "Luck", example: "❌ 'I have a lot of chance.' ✅ 'I have a lot of luck.' / 'I am very lucky.'", category: "Everyday Life" },
  { french: "Gentil", frenchMeaning: "Kind / Nice", english: "Gentle", englishMeaning: "Soft / Calm / Not rough", correctEnglish: "Kind / Nice", example: "❌ 'He is very gentle with everyone.' ✅ 'He is very kind/nice to everyone.'", category: "Everyday Life" },
  { french: "Raisin", frenchMeaning: "Grape", english: "Raisin", englishMeaning: "A dried grape", correctEnglish: "Grape", example: "❌ 'I like eating raisins.' (meaning fresh grapes) ✅ 'I like eating grapes.'", category: "Everyday Life" },
  { french: "Monnaie", frenchMeaning: "Change (coins) / Currency", english: "Money", englishMeaning: "General term for currency (broader)", correctEnglish: "Change / Currency", example: "❌ 'Do you have monnaie?' ✅ 'Do you have change?' (for small coins)", category: "Everyday Life" },

  // Body & Health
  { french: "Médecin", frenchMeaning: "Doctor (general practitioner)", english: "Medicine", englishMeaning: "The field of healthcare / A drug", correctEnglish: "Doctor", example: "❌ 'I went to see the medicine.' ✅ 'I went to see the doctor.'", category: "Body & Health" },
  { french: "Blesser", frenchMeaning: "To injure / To hurt", english: "To bless", englishMeaning: "To give divine favor / To say 'bless you'", correctEnglish: "To injure / To hurt", example: "❌ 'He blessed his leg.' ✅ 'He injured/hurt his leg.'", category: "Body & Health" },
  { french: "Grave", frenchMeaning: "Serious / Severe", english: "Grave", englishMeaning: "A burial site / Very serious (formal)", correctEnglish: "Serious / Severe", example: "❌ 'The situation is not grave.' ✅ 'The situation is not serious.'", category: "Body & Health" },

  // Technology
  { french: "Informatique", frenchMeaning: "Computer science / IT", english: "Informatics", englishMeaning: "Rarely used — prefer 'computer science' or 'IT'", correctEnglish: "Computer science / IT", example: "❌ 'I study informatics.' ✅ 'I study computer science / IT.'", category: "Technology" },
  { french: "Portable", frenchMeaning: "Mobile phone / Laptop", english: "Portable", englishMeaning: "Adjective: easy to carry", correctEnglish: "Mobile phone / Laptop", example: "❌ 'I left my portable at home.' ✅ 'I left my mobile phone / laptop at home.'", category: "Technology" },
];

const categories = ["All", ...Array.from(new Set(falseFriends.map((f) => f.category)))];

export default function FalseFriends() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return falseFriends.filter((item) => {
      const matchesSearch =
        item.french.toLowerCase().includes(search.toLowerCase()) ||
        item.english.toLowerCase().includes(search.toLowerCase()) ||
        item.frenchMeaning.toLowerCase().includes(search.toLowerCase()) ||
        item.englishMeaning.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-sm font-semibold">
          <AlertTriangle className="w-4 h-4" />
          {falseFriends.length} False Friends · French → English
        </div>
        <h3 className="text-xl font-bold text-gray-900">French–English False Friends</h3>
        <p className="text-gray-500 text-sm max-w-lg mx-auto">
          Words that look the same in French and English but mean completely different things. These are the most common mistakes Moroccan learners make.
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search French or English word..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setActiveCategory("All"); }}
          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:border-red-400 focus:outline-none transition-colors"
        />
        {search && (
          <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg leading-none">×</button>
        )}
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); setSearch(""); }}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              activeCategory === cat
                ? "bg-red-500 text-white border-red-500 shadow-sm"
                : "bg-white text-gray-500 border-gray-200 hover:border-red-300 hover:text-red-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="text-center text-sm text-gray-400">
        Showing <span className="font-semibold text-red-500">{filtered.length}</span> of {falseFriends.length} false friends
      </p>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 gap-3">
        {filtered.length === 0 ? (
          <div className="col-span-2 text-center py-12 text-gray-400">No results found for "<span className="font-semibold">{search}</span>"</div>
        ) : (
          filtered.map((item) => (
            <div key={item.french} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              {/* Header row */}
              <div className="grid grid-cols-2 divide-x divide-gray-100">
                <div className="p-3 bg-blue-50">
                  <p className="text-xs text-blue-500 font-semibold uppercase tracking-wide mb-0.5">French</p>
                  <p className="font-bold text-blue-800 text-base">{item.french}</p>
                  <p className="text-xs text-blue-600 mt-0.5">{item.frenchMeaning}</p>
                </div>
                <div className="p-3 bg-red-50">
                  <p className="text-xs text-red-500 font-semibold uppercase tracking-wide mb-0.5">English (TRAP!)</p>
                  <p className="font-bold text-red-800 text-base">{item.english}</p>
                  <p className="text-xs text-red-600 mt-0.5">{item.englishMeaning}</p>
                </div>
              </div>
              {/* Correct translation */}
              <div className="px-3 py-2 bg-green-50 border-t border-gray-100">
                <p className="text-xs text-green-700">
                  <span className="font-bold">✅ Correct English:</span> <span className="font-semibold">{item.correctEnglish}</span>
                </p>
              </div>
              {/* Example */}
              <div className="px-3 py-2.5 border-t border-gray-100">
                <p className="text-xs text-gray-500 leading-relaxed">{item.example}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <p className="text-center text-xs text-gray-400 pt-2">
        💡 <strong>Tip:</strong> These false friends are extremely common in Moroccan English writing. Memorize the top 10 from "Classic Traps" first.
      </p>
    </div>
  );
}
