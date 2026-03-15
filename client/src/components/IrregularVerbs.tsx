import { useState, useMemo } from "react";
import { Search, BookOpen, Download } from "lucide-react";

interface Verb {
  base: string;
  past: string;
  pastParticiple: string;
  meaning: string;
}

const irregularVerbs: Verb[] = [
  { base: "arise", past: "arose", pastParticiple: "arisen", meaning: "to come into being or notice" },
  { base: "awake", past: "awoke", pastParticiple: "awoken", meaning: "to stop sleeping" },
  { base: "be", past: "was / were", pastParticiple: "been", meaning: "to exist" },
  { base: "bear", past: "bore", pastParticiple: "born / borne", meaning: "to carry or endure" },
  { base: "beat", past: "beat", pastParticiple: "beaten", meaning: "to hit repeatedly" },
  { base: "become", past: "became", pastParticiple: "become", meaning: "to start to be" },
  { base: "begin", past: "began", pastParticiple: "begun", meaning: "to start" },
  { base: "bend", past: "bent", pastParticiple: "bent", meaning: "to curve or make curved" },
  { base: "bet", past: "bet", pastParticiple: "bet", meaning: "to risk money on a result" },
  { base: "bind", past: "bound", pastParticiple: "bound", meaning: "to tie or fasten" },
  { base: "bite", past: "bit", pastParticiple: "bitten", meaning: "to cut with teeth" },
  { base: "bleed", past: "bled", pastParticiple: "bled", meaning: "to lose blood" },
  { base: "blow", past: "blew", pastParticiple: "blown", meaning: "to move air" },
  { base: "break", past: "broke", pastParticiple: "broken", meaning: "to separate into pieces" },
  { base: "breed", past: "bred", pastParticiple: "bred", meaning: "to raise animals or plants" },
  { base: "bring", past: "brought", pastParticiple: "brought", meaning: "to carry to a place" },
  { base: "broadcast", past: "broadcast", pastParticiple: "broadcast", meaning: "to transmit on radio/TV" },
  { base: "build", past: "built", pastParticiple: "built", meaning: "to construct" },
  { base: "burn", past: "burned / burnt", pastParticiple: "burned / burnt", meaning: "to be on fire" },
  { base: "burst", past: "burst", pastParticiple: "burst", meaning: "to break open suddenly" },
  { base: "buy", past: "bought", pastParticiple: "bought", meaning: "to purchase" },
  { base: "catch", past: "caught", pastParticiple: "caught", meaning: "to capture or grab" },
  { base: "choose", past: "chose", pastParticiple: "chosen", meaning: "to select" },
  { base: "cling", past: "clung", pastParticiple: "clung", meaning: "to hold tightly" },
  { base: "come", past: "came", pastParticiple: "come", meaning: "to move toward" },
  { base: "cost", past: "cost", pastParticiple: "cost", meaning: "to have a price of" },
  { base: "creep", past: "crept", pastParticiple: "crept", meaning: "to move slowly and quietly" },
  { base: "cut", past: "cut", pastParticiple: "cut", meaning: "to divide with a sharp tool" },
  { base: "deal", past: "dealt", pastParticiple: "dealt", meaning: "to handle or distribute" },
  { base: "dig", past: "dug", pastParticiple: "dug", meaning: "to make a hole in the ground" },
  { base: "do", past: "did", pastParticiple: "done", meaning: "to perform an action" },
  { base: "draw", past: "drew", pastParticiple: "drawn", meaning: "to make a picture or pull" },
  { base: "dream", past: "dreamed / dreamt", pastParticiple: "dreamed / dreamt", meaning: "to have dreams while sleeping" },
  { base: "drink", past: "drank", pastParticiple: "drunk", meaning: "to swallow liquid" },
  { base: "drive", past: "drove", pastParticiple: "driven", meaning: "to operate a vehicle" },
  { base: "eat", past: "ate", pastParticiple: "eaten", meaning: "to consume food" },
  { base: "fall", past: "fell", pastParticiple: "fallen", meaning: "to drop down" },
  { base: "feed", past: "fed", pastParticiple: "fed", meaning: "to give food to" },
  { base: "feel", past: "felt", pastParticiple: "felt", meaning: "to experience an emotion or sensation" },
  { base: "fight", past: "fought", pastParticiple: "fought", meaning: "to struggle against" },
  { base: "find", past: "found", pastParticiple: "found", meaning: "to discover" },
  { base: "flee", past: "fled", pastParticiple: "fled", meaning: "to run away from danger" },
  { base: "fly", past: "flew", pastParticiple: "flown", meaning: "to move through the air" },
  { base: "forbid", past: "forbade", pastParticiple: "forbidden", meaning: "to not allow" },
  { base: "forget", past: "forgot", pastParticiple: "forgotten", meaning: "to fail to remember" },
  { base: "forgive", past: "forgave", pastParticiple: "forgiven", meaning: "to stop being angry at someone" },
  { base: "freeze", past: "froze", pastParticiple: "frozen", meaning: "to become solid from cold" },
  { base: "get", past: "got", pastParticiple: "got / gotten", meaning: "to obtain or receive" },
  { base: "give", past: "gave", pastParticiple: "given", meaning: "to hand over to someone" },
  { base: "go", past: "went", pastParticiple: "gone", meaning: "to move from one place to another" },
  { base: "grow", past: "grew", pastParticiple: "grown", meaning: "to increase in size" },
  { base: "hang", past: "hung", pastParticiple: "hung", meaning: "to attach from above" },
  { base: "have", past: "had", pastParticiple: "had", meaning: "to possess" },
  { base: "hear", past: "heard", pastParticiple: "heard", meaning: "to perceive sound" },
  { base: "hide", past: "hid", pastParticiple: "hidden", meaning: "to put out of sight" },
  { base: "hit", past: "hit", pastParticiple: "hit", meaning: "to strike" },
  { base: "hold", past: "held", pastParticiple: "held", meaning: "to keep in hand" },
  { base: "hurt", past: "hurt", pastParticiple: "hurt", meaning: "to cause pain" },
  { base: "keep", past: "kept", pastParticiple: "kept", meaning: "to continue to have" },
  { base: "kneel", past: "knelt", pastParticiple: "knelt", meaning: "to go down on one's knees" },
  { base: "know", past: "knew", pastParticiple: "known", meaning: "to have information about" },
  { base: "lay", past: "laid", pastParticiple: "laid", meaning: "to put something down flat" },
  { base: "lead", past: "led", pastParticiple: "led", meaning: "to guide or be in charge" },
  { base: "lean", past: "leaned / leant", pastParticiple: "leaned / leant", meaning: "to rest against something" },
  { base: "learn", past: "learned / learnt", pastParticiple: "learned / learnt", meaning: "to gain knowledge" },
  { base: "leave", past: "left", pastParticiple: "left", meaning: "to go away from" },
  { base: "lend", past: "lent", pastParticiple: "lent", meaning: "to give temporarily" },
  { base: "let", past: "let", pastParticiple: "let", meaning: "to allow" },
  { base: "lie", past: "lay", pastParticiple: "lain", meaning: "to be in a flat position" },
  { base: "light", past: "lit / lighted", pastParticiple: "lit / lighted", meaning: "to make something start burning" },
  { base: "lose", past: "lost", pastParticiple: "lost", meaning: "to no longer have something" },
  { base: "make", past: "made", pastParticiple: "made", meaning: "to create or produce" },
  { base: "mean", past: "meant", pastParticiple: "meant", meaning: "to intend or signify" },
  { base: "meet", past: "met", pastParticiple: "met", meaning: "to come together with" },
  { base: "mistake", past: "mistook", pastParticiple: "mistaken", meaning: "to be wrong about something" },
  { base: "pay", past: "paid", pastParticiple: "paid", meaning: "to give money for something" },
  { base: "put", past: "put", pastParticiple: "put", meaning: "to place in a position" },
  { base: "quit", past: "quit", pastParticiple: "quit", meaning: "to stop doing something" },
  { base: "read", past: "read", pastParticiple: "read", meaning: "to look at and understand text" },
  { base: "ride", past: "rode", pastParticiple: "ridden", meaning: "to sit on and travel" },
  { base: "ring", past: "rang", pastParticiple: "rung", meaning: "to make a bell sound" },
  { base: "rise", past: "rose", pastParticiple: "risen", meaning: "to move upward" },
  { base: "run", past: "ran", pastParticiple: "run", meaning: "to move quickly on foot" },
  { base: "say", past: "said", pastParticiple: "said", meaning: "to speak words" },
  { base: "see", past: "saw", pastParticiple: "seen", meaning: "to perceive with eyes" },
  { base: "seek", past: "sought", pastParticiple: "sought", meaning: "to try to find" },
  { base: "sell", past: "sold", pastParticiple: "sold", meaning: "to exchange for money" },
  { base: "send", past: "sent", pastParticiple: "sent", meaning: "to cause to go somewhere" },
  { base: "set", past: "set", pastParticiple: "set", meaning: "to put in a place or position" },
  { base: "shake", past: "shook", pastParticiple: "shaken", meaning: "to move rapidly back and forth" },
  { base: "shine", past: "shone", pastParticiple: "shone", meaning: "to give off light" },
  { base: "shoot", past: "shot", pastParticiple: "shot", meaning: "to fire a weapon" },
  { base: "show", past: "showed", pastParticiple: "shown", meaning: "to display or demonstrate" },
  { base: "shrink", past: "shrank", pastParticiple: "shrunk", meaning: "to become smaller" },
  { base: "shut", past: "shut", pastParticiple: "shut", meaning: "to close" },
  { base: "sing", past: "sang", pastParticiple: "sung", meaning: "to make musical sounds with voice" },
  { base: "sink", past: "sank", pastParticiple: "sunk", meaning: "to go down below a surface" },
  { base: "sit", past: "sat", pastParticiple: "sat", meaning: "to rest on a seat" },
  { base: "sleep", past: "slept", pastParticiple: "slept", meaning: "to rest with eyes closed" },
  { base: "slide", past: "slid", pastParticiple: "slid", meaning: "to move smoothly along a surface" },
  { base: "speak", past: "spoke", pastParticiple: "spoken", meaning: "to say words" },
  { base: "spend", past: "spent", pastParticiple: "spent", meaning: "to use money or time" },
  { base: "spin", past: "spun", pastParticiple: "spun", meaning: "to rotate quickly" },
  { base: "spread", past: "spread", pastParticiple: "spread", meaning: "to extend over an area" },
  { base: "stand", past: "stood", pastParticiple: "stood", meaning: "to be in an upright position" },
  { base: "steal", past: "stole", pastParticiple: "stolen", meaning: "to take without permission" },
  { base: "stick", past: "stuck", pastParticiple: "stuck", meaning: "to attach or be fixed" },
  { base: "sting", past: "stung", pastParticiple: "stung", meaning: "to pierce with a sharp point" },
  { base: "stink", past: "stank", pastParticiple: "stunk", meaning: "to have a bad smell" },
  { base: "strike", past: "struck", pastParticiple: "struck / stricken", meaning: "to hit forcefully" },
  { base: "swear", past: "swore", pastParticiple: "sworn", meaning: "to make a solemn promise" },
  { base: "sweep", past: "swept", pastParticiple: "swept", meaning: "to clean with a brush" },
  { base: "swim", past: "swam", pastParticiple: "swum", meaning: "to move through water" },
  { base: "swing", past: "swung", pastParticiple: "swung", meaning: "to move back and forth" },
  { base: "take", past: "took", pastParticiple: "taken", meaning: "to carry or remove" },
  { base: "teach", past: "taught", pastParticiple: "taught", meaning: "to instruct someone" },
  { base: "tear", past: "tore", pastParticiple: "torn", meaning: "to pull apart" },
  { base: "tell", past: "told", pastParticiple: "told", meaning: "to communicate information" },
  { base: "think", past: "thought", pastParticiple: "thought", meaning: "to use one's mind" },
  { base: "throw", past: "threw", pastParticiple: "thrown", meaning: "to propel through the air" },
  { base: "understand", past: "understood", pastParticiple: "understood", meaning: "to comprehend" },
  { base: "wake", past: "woke", pastParticiple: "woken", meaning: "to stop sleeping" },
  { base: "wear", past: "wore", pastParticiple: "worn", meaning: "to have clothing on the body" },
  { base: "weep", past: "wept", pastParticiple: "wept", meaning: "to cry" },
  { base: "win", past: "won", pastParticiple: "won", meaning: "to achieve victory" },
  { base: "wind", past: "wound", pastParticiple: "wound", meaning: "to turn or twist" },
  { base: "withdraw", past: "withdrew", pastParticiple: "withdrawn", meaning: "to remove or pull back" },
  { base: "write", past: "wrote", pastParticiple: "written", meaning: "to form letters or words" },
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function IrregularVerbs() {
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState("All");

  const filtered = useMemo(() => {
    return irregularVerbs.filter((v) => {
      const matchesSearch =
        v.base.toLowerCase().includes(search.toLowerCase()) ||
        v.past.toLowerCase().includes(search.toLowerCase()) ||
        v.pastParticiple.toLowerCase().includes(search.toLowerCase());
      const matchesLetter =
        activeLetter === "All" ||
        v.base.toUpperCase().startsWith(activeLetter);
      return matchesSearch && matchesLetter;
    });
  }, [search, activeLetter]);

  // Letters that actually have verbs
  const availableLetters = useMemo(() => {
    const set = new Set(irregularVerbs.map((v) => v.base[0].toUpperCase()));
    return set;
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-semibold">
          <BookOpen className="w-4 h-4" />
          {irregularVerbs.length} Irregular Verbs
        </div>
        <h2 className="text-xl font-bold text-gray-900">Complete List of Irregular Verbs in English — Base, Past, Past Participle</h2>
        <p className="text-gray-500 text-sm max-w-lg mx-auto">
          Master all irregular English verbs — base form, simple past, and past participle — with their meanings. Search any verb form or filter by letter.
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search any verb form (e.g. go, went, gone)..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setActiveLetter("All"); }}
          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:border-purple-500 focus:outline-none transition-colors"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg leading-none"
          >×</button>
        )}
      </div>

      {/* Letter Filter */}
      <div className="flex flex-wrap gap-1.5 justify-center">
        <button
          onClick={() => { setActiveLetter("All"); setSearch(""); }}
          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
            activeLetter === "All"
              ? "bg-purple-600 text-white shadow-sm"
              : "bg-gray-100 text-gray-500 hover:bg-purple-100 hover:text-purple-600"
          }`}
        >
          All
        </button>
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => { setActiveLetter(letter); setSearch(""); }}
            disabled={!availableLetters.has(letter)}
            className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
              activeLetter === letter
                ? "bg-purple-600 text-white shadow-sm"
                : availableLetters.has(letter)
                ? "bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-600"
                : "bg-gray-50 text-gray-300 cursor-not-allowed"
            }`}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-center text-sm text-gray-400">
        Showing <span className="font-semibold text-purple-600">{filtered.length}</span> of {irregularVerbs.length} verbs
      </p>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-purple-600 text-white">
              <th className="text-left px-4 py-3 font-semibold w-1/5">Base Form</th>
              <th className="text-left px-4 py-3 font-semibold w-1/5">Simple Past</th>
              <th className="text-left px-4 py-3 font-semibold w-1/5">Past Participle</th>
              <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Meaning</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-10 text-gray-400">
                  No verbs found for "<span className="font-semibold">{search}</span>"
                </td>
              </tr>
            ) : (
              filtered.map((verb, i) => (
                <tr
                  key={verb.base}
                  className={`border-t border-gray-100 hover:bg-purple-50 transition-colors ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                >
                  <td className="px-4 py-3 font-bold text-purple-700">{verb.base}</td>
                  <td className="px-4 py-3 text-gray-700 font-medium">{verb.past}</td>
                  <td className="px-4 py-3 text-gray-700 font-medium">{verb.pastParticiple}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs hidden sm:table-cell">{verb.meaning}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Download CTA */}
      <div className="text-center">
        <p className="text-xs text-gray-400 mt-2">
          💡 <strong>Tip:</strong> Bookmark this page to study irregular verbs anytime — no app needed!
        </p>
      </div>
    </div>
  );
}
