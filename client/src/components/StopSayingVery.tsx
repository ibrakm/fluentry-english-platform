import { useState, useMemo } from "react";
import { Search, Zap, Copy, Check } from "lucide-react";

interface Upgrade {
  weak: string;
  strong: string[];
  category: string;
  example: string;
}

const upgrades: Upgrade[] = [
  // Feelings
  { weak: "Very happy", strong: ["Thrilled", "Delighted", "Ecstatic", "Overjoyed", "Elated"], category: "Feelings", example: "I was thrilled to receive the job offer." },
  { weak: "Very sad", strong: ["Devastated", "Heartbroken", "Miserable", "Distraught", "Sorrowful"], category: "Feelings", example: "She was devastated when she heard the news." },
  { weak: "Very angry", strong: ["Furious", "Enraged", "Livid", "Outraged", "Infuriated"], category: "Feelings", example: "He was furious about the decision." },
  { weak: "Very scared", strong: ["Terrified", "Petrified", "Horrified", "Panic-stricken", "Alarmed"], category: "Feelings", example: "She was terrified of the exam." },
  { weak: "Very surprised", strong: ["Astonished", "Astounded", "Stunned", "Flabbergasted", "Dumbfounded"], category: "Feelings", example: "I was astonished by the results." },
  { weak: "Very excited", strong: ["Thrilled", "Exhilarated", "Enthusiastic", "Eager", "Animated"], category: "Feelings", example: "The students were exhilarated about the trip." },
  { weak: "Very worried", strong: ["Anxious", "Apprehensive", "Distressed", "Troubled", "Concerned"], category: "Feelings", example: "She was anxious about the presentation." },
  { weak: "Very bored", strong: ["Tedious", "Monotonous", "Dull", "Weary", "Uninterested"], category: "Feelings", example: "The lecture was incredibly tedious." },

  // Size & Amount
  { weak: "Very big", strong: ["Enormous", "Massive", "Gigantic", "Colossal", "Immense"], category: "Size & Amount", example: "The company made an enormous profit." },
  { weak: "Very small", strong: ["Tiny", "Minuscule", "Microscopic", "Miniature", "Petite"], category: "Size & Amount", example: "There was only a tiny chance of success." },
  { weak: "Very many", strong: ["Numerous", "Countless", "Abundant", "Plentiful", "Myriad"], category: "Size & Amount", example: "There are numerous reasons to learn English." },
  { weak: "Very few", strong: ["Scarce", "Rare", "Limited", "Minimal", "Sparse"], category: "Size & Amount", example: "Resources are scarce in rural areas." },
  { weak: "Very long", strong: ["Extensive", "Prolonged", "Lengthy", "Enduring", "Protracted"], category: "Size & Amount", example: "The meeting was unnecessarily prolonged." },
  { weak: "Very short", strong: ["Brief", "Concise", "Fleeting", "Momentary", "Compact"], category: "Size & Amount", example: "The speech was brief but powerful." },

  // Quality & Importance
  { weak: "Very important", strong: ["Crucial", "Essential", "Vital", "Critical", "Paramount"], category: "Quality & Importance", example: "It is crucial to practice speaking every day." },
  { weak: "Very good", strong: ["Excellent", "Outstanding", "Exceptional", "Superb", "Remarkable"], category: "Quality & Importance", example: "Her performance was outstanding." },
  { weak: "Very bad", strong: ["Terrible", "Dreadful", "Appalling", "Atrocious", "Horrendous"], category: "Quality & Importance", example: "The weather was absolutely dreadful." },
  { weak: "Very difficult", strong: ["Challenging", "Demanding", "Arduous", "Grueling", "Formidable"], category: "Quality & Importance", example: "The IELTS exam is genuinely challenging." },
  { weak: "Very easy", strong: ["Effortless", "Simple", "Straightforward", "Trivial", "Elementary"], category: "Quality & Importance", example: "The solution was surprisingly straightforward." },
  { weak: "Very interesting", strong: ["Fascinating", "Captivating", "Compelling", "Intriguing", "Gripping"], category: "Quality & Importance", example: "The documentary was absolutely captivating." },
  { weak: "Very boring", strong: ["Tedious", "Monotonous", "Dull", "Dreary", "Uninspiring"], category: "Quality & Importance", example: "The presentation was completely uninspiring." },
  { weak: "Very beautiful", strong: ["Stunning", "Gorgeous", "Breathtaking", "Exquisite", "Magnificent"], category: "Quality & Importance", example: "The view from the mountain was breathtaking." },
  { weak: "Very ugly", strong: ["Hideous", "Grotesque", "Repulsive", "Unsightly", "Ghastly"], category: "Quality & Importance", example: "The building was considered hideous by locals." },
  { weak: "Very smart", strong: ["Brilliant", "Gifted", "Astute", "Ingenious", "Perceptive"], category: "Quality & Importance", example: "She is a brilliantly gifted student." },

  // Speed & Time
  { weak: "Very fast", strong: ["Rapid", "Swift", "Lightning-fast", "Instantaneous", "Brisk"], category: "Speed & Time", example: "Technology is advancing at a rapid pace." },
  { weak: "Very slow", strong: ["Sluggish", "Gradual", "Leisurely", "Plodding", "Unhurried"], category: "Speed & Time", example: "Progress has been sluggish in this area." },
  { weak: "Very old", strong: ["Ancient", "Antique", "Archaic", "Aged", "Veteran"], category: "Speed & Time", example: "The city has ancient Roman ruins." },
  { weak: "Very new", strong: ["Brand-new", "Cutting-edge", "State-of-the-art", "Novel", "Innovative"], category: "Speed & Time", example: "They launched a cutting-edge product." },

  // Money & Work
  { weak: "Very expensive", strong: ["Costly", "Exorbitant", "Extravagant", "Pricey", "Steep"], category: "Money & Work", example: "The rent in Casablanca is exorbitant." },
  { weak: "Very cheap", strong: ["Affordable", "Budget-friendly", "Economical", "Inexpensive", "Modest"], category: "Money & Work", example: "The course is surprisingly affordable." },
  { weak: "Very tired", strong: ["Exhausted", "Drained", "Worn out", "Fatigued", "Depleted"], category: "Money & Work", example: "After the exam, I was completely exhausted." },
  { weak: "Very busy", strong: ["Swamped", "Overwhelmed", "Occupied", "Hectic", "Demanding"], category: "Money & Work", example: "This has been an incredibly hectic week." },
  { weak: "Very successful", strong: ["Accomplished", "Prosperous", "Thriving", "Flourishing", "Distinguished"], category: "Money & Work", example: "She built a thriving business from scratch." },

  // Writing & Communication
  { weak: "Very clear", strong: ["Transparent", "Evident", "Unambiguous", "Lucid", "Explicit"], category: "Writing & Communication", example: "The instructions were completely unambiguous." },
  { weak: "Very confusing", strong: ["Perplexing", "Baffling", "Bewildering", "Puzzling", "Cryptic"], category: "Writing & Communication", example: "The grammar rule was utterly baffling." },
  { weak: "Very funny", strong: ["Hilarious", "Comical", "Witty", "Amusing", "Hysterical"], category: "Writing & Communication", example: "His speech was absolutely hilarious." },
  { weak: "Very serious", strong: ["Grave", "Solemn", "Severe", "Stern", "Earnest"], category: "Writing & Communication", example: "The situation requires a grave response." },
  { weak: "Very quiet", strong: ["Silent", "Hushed", "Tranquil", "Serene", "Peaceful"], category: "Writing & Communication", example: "The library was completely silent." },
  { weak: "Very loud", strong: ["Deafening", "Thunderous", "Booming", "Ear-splitting", "Blaring"], category: "Writing & Communication", example: "The music was absolutely deafening." },
];

const categories = ["All", ...Array.from(new Set(upgrades.map((u) => u.category)))];

export default function StopSayingVery() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [copiedWord, setCopiedWord] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return upgrades.filter((item) => {
      const matchesSearch =
        item.weak.toLowerCase().includes(search.toLowerCase()) ||
        item.strong.some((s) => s.toLowerCase().includes(search.toLowerCase()));
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const handleCopy = (word: string) => {
    navigator.clipboard.writeText(word);
    setCopiedWord(word);
    setTimeout(() => setCopiedWord(null), 1500);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-1.5 rounded-full text-sm font-semibold">
          <Zap className="w-4 h-4" />
          {upgrades.length} Vocabulary Upgrades
        </div>
        <h3 className="text-xl font-bold text-gray-900">Stop Saying "Very" — Upgrade Your Vocabulary</h3>
        <p className="text-gray-500 text-sm max-w-lg mx-auto">
          Replace weak "very + adjective" combinations with powerful single words. Instantly improve your IELTS score, BAC essay, and professional writing.
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder='Search "very tired", "exhausted"...'
          value={search}
          onChange={(e) => { setSearch(e.target.value); setActiveCategory("All"); }}
          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:border-yellow-400 focus:outline-none transition-colors"
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
                ? "bg-yellow-500 text-white border-yellow-500 shadow-sm"
                : "bg-white text-gray-500 border-gray-200 hover:border-yellow-300 hover:text-yellow-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="text-center text-sm text-gray-400">
        Showing <span className="font-semibold text-yellow-600">{filtered.length}</span> of {upgrades.length} upgrades
      </p>

      {/* Cards */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="text-center py-12 text-gray-400">No results found for "<span className="font-semibold">{search}</span>"</div>
        ) : (
          filtered.map((item) => (
            <div key={item.weak} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 border-b border-gray-100">
                {/* Weak version */}
                <div className="flex items-center gap-2">
                  <span className="text-red-400 text-lg font-bold">✗</span>
                  <span className="text-gray-500 line-through text-sm font-medium">{item.weak}</span>
                </div>
                <span className="text-gray-300 text-xl">→</span>
                {/* Category badge */}
                <span className="ml-auto text-xs text-gray-400 bg-white border border-gray-200 px-2 py-0.5 rounded-full">{item.category}</span>
              </div>

              {/* Strong alternatives */}
              <div className="px-4 py-3 space-y-2">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">✅ Use instead:</p>
                <div className="flex flex-wrap gap-2">
                  {item.strong.map((word) => (
                    <button
                      key={word}
                      onClick={() => handleCopy(word)}
                      title="Click to copy"
                      className="flex items-center gap-1 px-3 py-1.5 bg-yellow-50 hover:bg-yellow-100 border border-yellow-200 text-yellow-800 rounded-lg text-sm font-semibold transition-colors"
                    >
                      {copiedWord === word ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3 opacity-50" />}
                      {word}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 italic pt-1">"{item.example}"</p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
        <p className="text-sm text-blue-700 font-semibold mb-1">📌 IELTS & BAC Writing Tip</p>
        <p className="text-xs text-blue-600">Examiners penalize repetitive use of "very". Using one powerful word instead of "very + adjective" demonstrates a wider vocabulary range and can increase your band score.</p>
      </div>
    </div>
  );
}
