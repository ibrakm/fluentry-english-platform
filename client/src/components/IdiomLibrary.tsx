import { useState, useMemo } from "react";
import { Search, BookMarked, ChevronDown, ChevronUp } from "lucide-react";

interface Idiom {
  idiom: string;
  meaning: string;
  example: string;
  category: string;
}

const idioms: Idiom[] = [
  // Work & Business
  { idiom: "Back to the drawing board", meaning: "Start over because a plan failed", example: "The project was rejected, so it's back to the drawing board.", category: "Work & Business" },
  { idiom: "Bite the bullet", meaning: "Endure a painful or difficult situation", example: "I hate going to the dentist, but I had to bite the bullet.", category: "Work & Business" },
  { idiom: "Burn the midnight oil", meaning: "Work late into the night", example: "She burned the midnight oil to finish the report before the deadline.", category: "Work & Business" },
  { idiom: "Cut corners", meaning: "Do something poorly to save time or money", example: "Don't cut corners on safety — it's not worth the risk.", category: "Work & Business" },
  { idiom: "Get the ball rolling", meaning: "Start an activity or process", example: "Let's get the ball rolling on the new marketing campaign.", category: "Work & Business" },
  { idiom: "Hit the ground running", meaning: "Start something quickly and energetically", example: "She hit the ground running on her first day at the new job.", category: "Work & Business" },
  { idiom: "In the loop", meaning: "Kept informed about something", example: "Please keep me in the loop about any changes to the schedule.", category: "Work & Business" },
  { idiom: "On the same page", meaning: "In agreement or having the same understanding", example: "Before we start, let's make sure we're all on the same page.", category: "Work & Business" },
  { idiom: "Pull someone's leg", meaning: "To joke or tease someone", example: "Are you serious, or are you pulling my leg?", category: "Work & Business" },
  { idiom: "Think outside the box", meaning: "Think creatively or in an unconventional way", example: "We need to think outside the box to solve this problem.", category: "Work & Business" },
  { idiom: "Touch base", meaning: "Make brief contact with someone", example: "I'll touch base with you after the meeting to share updates.", category: "Work & Business" },
  { idiom: "Up in the air", meaning: "Uncertain or undecided", example: "The launch date is still up in the air.", category: "Work & Business" },
  { idiom: "Under the weather", meaning: "Feeling ill or unwell", example: "I'm feeling a bit under the weather today — I might stay home.", category: "Work & Business" },

  // Everyday Life
  { idiom: "A blessing in disguise", meaning: "Something that seems bad but turns out to be good", example: "Losing that job was a blessing in disguise — I found a better one.", category: "Everyday Life" },
  { idiom: "A penny for your thoughts", meaning: "Asking what someone is thinking about", example: "You've been quiet all evening. A penny for your thoughts?", category: "Everyday Life" },
  { idiom: "Actions speak louder than words", meaning: "What you do is more important than what you say", example: "He promised to help, but actions speak louder than words.", category: "Everyday Life" },
  { idiom: "Add fuel to the fire", meaning: "Make a bad situation worse", example: "His angry reply only added fuel to the fire.", category: "Everyday Life" },
  { idiom: "Beat around the bush", meaning: "Avoid talking about the main topic", example: "Stop beating around the bush and tell me what happened.", category: "Everyday Life" },
  { idiom: "Better late than never", meaning: "It's better to do something late than not at all", example: "He finally apologized — better late than never!", category: "Everyday Life" },
  { idiom: "Break the ice", meaning: "Do or say something to relieve tension in a social situation", example: "He told a joke to break the ice at the party.", category: "Everyday Life" },
  { idiom: "Costs an arm and a leg", meaning: "Very expensive", example: "That new phone costs an arm and a leg.", category: "Everyday Life" },
  { idiom: "Don't judge a book by its cover", meaning: "Don't judge based on appearance alone", example: "He seemed unfriendly at first, but don't judge a book by its cover.", category: "Everyday Life" },
  { idiom: "Every cloud has a silver lining", meaning: "Every bad situation has a positive aspect", example: "I failed the test, but every cloud has a silver lining — now I know what to study.", category: "Everyday Life" },
  { idiom: "Go back to square one", meaning: "Start over from the beginning", example: "The deal fell through, so we had to go back to square one.", category: "Everyday Life" },
  { idiom: "Hit the nail on the head", meaning: "Describe exactly what is causing a situation", example: "You hit the nail on the head — that's exactly the problem.", category: "Everyday Life" },
  { idiom: "Kill two birds with one stone", meaning: "Accomplish two things with one action", example: "I'll stop at the bank on my way to the gym — kill two birds with one stone.", category: "Everyday Life" },
  { idiom: "Let the cat out of the bag", meaning: "Accidentally reveal a secret", example: "She let the cat out of the bag about the surprise party.", category: "Everyday Life" },
  { idiom: "Miss the boat", meaning: "Miss an opportunity", example: "He missed the boat on that investment — prices have doubled since.", category: "Everyday Life" },
  { idiom: "Once in a blue moon", meaning: "Very rarely", example: "I only eat fast food once in a blue moon.", category: "Everyday Life" },
  { idiom: "Piece of cake", meaning: "Something very easy", example: "The exam was a piece of cake — I finished in 20 minutes.", category: "Everyday Life" },
  { idiom: "Sit on the fence", meaning: "Avoid taking a side in a disagreement", example: "You can't sit on the fence forever — you have to make a decision.", category: "Everyday Life" },
  { idiom: "Speak of the devil", meaning: "Said when someone appears just after being mentioned", example: "Speak of the devil — we were just talking about you!", category: "Everyday Life" },
  { idiom: "The ball is in your court", meaning: "It's your turn to take action or make a decision", example: "I've made my offer. The ball is in your court now.", category: "Everyday Life" },
  { idiom: "The best of both worlds", meaning: "Enjoy two advantages at the same time", example: "Working from home gives me the best of both worlds.", category: "Everyday Life" },
  { idiom: "Under the table", meaning: "Done secretly and usually illegally", example: "He was paid under the table to avoid taxes.", category: "Everyday Life" },
  { idiom: "You can't have your cake and eat it too", meaning: "You can't enjoy two incompatible things at once", example: "You want freedom and security — you can't have your cake and eat it too.", category: "Everyday Life" },

  // Feelings & Emotions
  { idiom: "At the end of one's rope", meaning: "Having no more patience or strength", example: "After three sleepless nights, I was at the end of my rope.", category: "Feelings & Emotions" },
  { idiom: "Bite off more than you can chew", meaning: "Take on more than you can handle", example: "He bit off more than he could chew by managing three projects at once.", category: "Feelings & Emotions" },
  { idiom: "Butterflies in your stomach", meaning: "A nervous feeling before something important", example: "I had butterflies in my stomach before my job interview.", category: "Feelings & Emotions" },
  { idiom: "Cry over spilled milk", meaning: "Upset about something that cannot be changed", example: "The mistake is done — no point crying over spilled milk.", category: "Feelings & Emotions" },
  { idiom: "Down in the dumps", meaning: "Feeling sad or depressed", example: "She's been down in the dumps since she heard the bad news.", category: "Feelings & Emotions" },
  { idiom: "Get cold feet", meaning: "Become nervous or hesitant about doing something", example: "He got cold feet before asking her to marry him.", category: "Feelings & Emotions" },
  { idiom: "Have a chip on your shoulder", meaning: "Be resentful or angry about something", example: "He's had a chip on his shoulder ever since he was passed over for promotion.", category: "Feelings & Emotions" },
  { idiom: "Jump for joy", meaning: "Be extremely happy", example: "She jumped for joy when she found out she got the scholarship.", category: "Feelings & Emotions" },
  { idiom: "Keep your chin up", meaning: "Stay positive in a difficult situation", example: "Keep your chin up — things will get better soon.", category: "Feelings & Emotions" },
  { idiom: "On cloud nine", meaning: "Extremely happy", example: "He was on cloud nine after getting the job offer.", category: "Feelings & Emotions" },
  { idiom: "See red", meaning: "Become very angry", example: "I saw red when he lied to my face.", category: "Feelings & Emotions" },
  { idiom: "Wear your heart on your sleeve", meaning: "Show your emotions openly", example: "She wears her heart on her sleeve — you always know how she feels.", category: "Feelings & Emotions" },

  // Communication & Conversation
  { idiom: "At a loss for words", meaning: "Unable to think of what to say", example: "When she proposed, he was completely at a loss for words.", category: "Communication" },
  { idiom: "Cut to the chase", meaning: "Get to the point without wasting time", example: "Let's cut to the chase — what do you want from me?", category: "Communication" },
  { idiom: "Drop the ball", meaning: "Fail to do something you were responsible for", example: "He really dropped the ball on the presentation.", category: "Communication" },
  { idiom: "Get straight to the point", meaning: "Say exactly what you mean without delay", example: "I'll get straight to the point — we need to cut the budget.", category: "Communication" },
  { idiom: "Give someone the cold shoulder", meaning: "Deliberately ignore someone", example: "She gave him the cold shoulder after their argument.", category: "Communication" },
  { idiom: "Go around in circles", meaning: "Keep discussing the same thing without progress", example: "This meeting is going around in circles — let's take a break.", category: "Communication" },
  { idiom: "Have the floor", meaning: "Have the right to speak in a meeting", example: "You have the floor — please share your ideas.", category: "Communication" },
  { idiom: "Off the record", meaning: "Not to be officially reported or recorded", example: "Off the record, I think the manager made a mistake.", category: "Communication" },
  { idiom: "Put your foot in your mouth", meaning: "Say something embarrassing or wrong", example: "I really put my foot in my mouth when I asked if she was pregnant.", category: "Communication" },
  { idiom: "Read between the lines", meaning: "Understand the hidden meaning", example: "Reading between the lines, I think he wants to quit.", category: "Communication" },
  { idiom: "Spill the beans", meaning: "Reveal secret information", example: "Who spilled the beans about the surprise party?", category: "Communication" },
  { idiom: "Talk someone's ear off", meaning: "Talk to someone for a very long time", example: "He talked my ear off about his new car for an hour.", category: "Communication" },

  // Time & Speed
  { idiom: "Against the clock", meaning: "Working quickly because of limited time", example: "We're working against the clock to finish before the deadline.", category: "Time & Speed" },
  { idiom: "At the drop of a hat", meaning: "Immediately, without hesitation", example: "She would travel at the drop of a hat if she could.", category: "Time & Speed" },
  { idiom: "Beat the clock", meaning: "Finish something before the time runs out", example: "We barely beat the clock to submit the application.", category: "Time & Speed" },
  { idiom: "In the nick of time", meaning: "Just in time, at the last possible moment", example: "We arrived at the airport in the nick of time.", category: "Time & Speed" },
  { idiom: "In the long run", meaning: "Over a long period of time", example: "Studying hard now will pay off in the long run.", category: "Time & Speed" },
  { idiom: "Kill time", meaning: "Do something to pass the time while waiting", example: "I read a book to kill time at the airport.", category: "Time & Speed" },
  { idiom: "On the spur of the moment", meaning: "Done without planning, spontaneously", example: "On the spur of the moment, we decided to go to the beach.", category: "Time & Speed" },
  { idiom: "Once in a lifetime", meaning: "Something that happens very rarely", example: "Seeing the northern lights was a once-in-a-lifetime experience.", category: "Time & Speed" },
  { idiom: "Time flies", meaning: "Time passes very quickly", example: "Time flies when you're having fun.", category: "Time & Speed" },

  // Success & Failure
  { idiom: "Bite the dust", meaning: "Fail or come to an end", example: "Another startup bit the dust after running out of funding.", category: "Success & Failure" },
  { idiom: "Come out on top", meaning: "Win or succeed", example: "Despite the challenges, she came out on top.", category: "Success & Failure" },
  { idiom: "Cream of the crop", meaning: "The best of a group", example: "These students are the cream of the crop.", category: "Success & Failure" },
  { idiom: "Fall flat", meaning: "Fail to have the intended effect", example: "His joke fell flat — nobody laughed.", category: "Success & Failure" },
  { idiom: "Get off the ground", meaning: "Start successfully", example: "The new business finally got off the ground after months of planning.", category: "Success & Failure" },
  { idiom: "Go the extra mile", meaning: "Make more effort than is expected", example: "She always goes the extra mile for her students.", category: "Success & Failure" },
  { idiom: "Hit a brick wall", meaning: "Reach an obstacle that stops progress", example: "We hit a brick wall trying to get government approval.", category: "Success & Failure" },
  { idiom: "Land on your feet", meaning: "Recover successfully from a difficult situation", example: "He lost his job but landed on his feet with a better offer.", category: "Success & Failure" },
  { idiom: "Miss the mark", meaning: "Fail to achieve the intended result", example: "The new product missed the mark with customers.", category: "Success & Failure" },
  { idiom: "Pass with flying colors", meaning: "Succeed with an excellent result", example: "She passed her IELTS exam with flying colors.", category: "Success & Failure" },
  { idiom: "Pull off", meaning: "Succeed in doing something difficult", example: "I can't believe he pulled off that presentation with no preparation.", category: "Success & Failure" },
  { idiom: "Raise the bar", meaning: "Set a higher standard", example: "Her performance raised the bar for the entire team.", category: "Success & Failure" },

  // People & Relationships
  { idiom: "A wolf in sheep's clothing", meaning: "A dangerous person pretending to be harmless", example: "Be careful with him — he's a wolf in sheep's clothing.", category: "People & Relationships" },
  { idiom: "Birds of a feather flock together", meaning: "People with similar interests tend to be together", example: "They're best friends — birds of a feather flock together.", category: "People & Relationships" },
  { idiom: "Burn bridges", meaning: "Permanently damage a relationship", example: "Don't burn bridges with your old employer — you may need them.", category: "People & Relationships" },
  { idiom: "Get along like a house on fire", meaning: "Have a very good relationship", example: "They only met last week but they get along like a house on fire.", category: "People & Relationships" },
  { idiom: "Give the benefit of the doubt", meaning: "Trust someone despite uncertainty", example: "I'll give him the benefit of the doubt — maybe he was just having a bad day.", category: "People & Relationships" },
  { idiom: "Go behind someone's back", meaning: "Do something secretly to harm someone", example: "She went behind my back and told the boss about my mistake.", category: "People & Relationships" },
  { idiom: "Hit it off", meaning: "Immediately like each other", example: "They hit it off right away at the conference.", category: "People & Relationships" },
  { idiom: "Keep someone at arm's length", meaning: "Avoid becoming too friendly with someone", example: "I keep my colleagues at arm's length to stay professional.", category: "People & Relationships" },
  { idiom: "Rub someone the wrong way", meaning: "Irritate or annoy someone", example: "His arrogant attitude really rubs me the wrong way.", category: "People & Relationships" },
  { idiom: "See eye to eye", meaning: "Agree with someone", example: "We don't always see eye to eye, but we respect each other.", category: "People & Relationships" },
  { idiom: "Stab someone in the back", meaning: "Betray someone who trusted you", example: "He stabbed me in the back by taking credit for my work.", category: "People & Relationships" },
  { idiom: "Two peas in a pod", meaning: "Two people who are very similar", example: "Those twins are like two peas in a pod.", category: "People & Relationships" },

  // Money & Finance
  { idiom: "Break the bank", meaning: "Cost too much money", example: "A holiday doesn't have to break the bank if you plan ahead.", category: "Money & Finance" },
  { idiom: "Foot the bill", meaning: "Pay for something", example: "The company footed the bill for the team dinner.", category: "Money & Finance" },
  { idiom: "In the red", meaning: "In debt or losing money", example: "The company has been in the red for three quarters.", category: "Money & Finance" },
  { idiom: "In the black", meaning: "Making a profit", example: "After two tough years, the business is finally in the black.", category: "Money & Finance" },
  { idiom: "Make ends meet", meaning: "Have just enough money to survive", example: "With two jobs, he barely makes ends meet.", category: "Money & Finance" },
  { idiom: "Money doesn't grow on trees", meaning: "Money is not easily obtained", example: "Be careful with your spending — money doesn't grow on trees.", category: "Money & Finance" },
  { idiom: "On a shoestring", meaning: "With very little money", example: "They built the company on a shoestring budget.", category: "Money & Finance" },
  { idiom: "Tighten your belt", meaning: "Spend less money", example: "We need to tighten our belts until the economy improves.", category: "Money & Finance" },

  // Learning & Knowledge
  { idiom: "Ahead of the curve", meaning: "More advanced than others", example: "Her research is well ahead of the curve.", category: "Learning & Knowledge" },
  { idiom: "Back to basics", meaning: "Return to the fundamental principles", example: "The teacher went back to basics to help struggling students.", category: "Learning & Knowledge" },
  { idiom: "Bite the hand that feeds you", meaning: "Harm someone who helps you", example: "Criticizing your employer publicly is biting the hand that feeds you.", category: "Learning & Knowledge" },
  { idiom: "Get the hang of it", meaning: "Learn how to do something", example: "Driving was hard at first, but I got the hang of it.", category: "Learning & Knowledge" },
  { idiom: "Hit the books", meaning: "Study hard", example: "Exams are next week — time to hit the books.", category: "Learning & Knowledge" },
  { idiom: "In a nutshell", meaning: "In a few words; briefly", example: "In a nutshell, the project was a success.", category: "Learning & Knowledge" },
  { idiom: "Learn the ropes", meaning: "Learn the basics of something", example: "It took a few weeks to learn the ropes at my new job.", category: "Learning & Knowledge" },
  { idiom: "Pick someone's brain", meaning: "Ask someone for their knowledge or ideas", example: "Can I pick your brain about the marketing strategy?", category: "Learning & Knowledge" },
  { idiom: "Put two and two together", meaning: "Figure something out from the available information", example: "I put two and two together and realized he was lying.", category: "Learning & Knowledge" },
  { idiom: "Wrap your head around", meaning: "Understand something complex", example: "I can't wrap my head around this grammar rule.", category: "Learning & Knowledge" },
];

const categories = ["All", ...Array.from(new Set(idioms.map((i) => i.category)))];

export default function IdiomLibrary() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return idioms.filter((item) => {
      const matchesSearch =
        item.idiom.toLowerCase().includes(search.toLowerCase()) ||
        item.meaning.toLowerCase().includes(search.toLowerCase()) ||
        item.example.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const categoryColors: Record<string, string> = {
    "Work & Business": "bg-blue-100 text-blue-700 border-blue-200",
    "Everyday Life": "bg-green-100 text-green-700 border-green-200",
    "Feelings & Emotions": "bg-pink-100 text-pink-700 border-pink-200",
    "Communication": "bg-orange-100 text-orange-700 border-orange-200",
    "Time & Speed": "bg-yellow-100 text-yellow-700 border-yellow-200",
    "Success & Failure": "bg-purple-100 text-purple-700 border-purple-200",
    "People & Relationships": "bg-red-100 text-red-700 border-red-200",
    "Money & Finance": "bg-emerald-100 text-emerald-700 border-emerald-200",
    "Learning & Knowledge": "bg-indigo-100 text-indigo-700 border-indigo-200",
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold">
          <BookMarked className="w-4 h-4" />
          {idioms.length}+ English Idioms
        </div>
        <h3 className="text-xl font-bold text-gray-900">Interactive Idiom Library</h3>
        <p className="text-gray-500 text-sm max-w-lg mx-auto">
          Learn the most common English idioms with their meanings and real example sentences. Click any idiom to expand it.
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search idioms, meanings, or examples..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setActiveCategory("All"); }}
          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:border-orange-400 focus:outline-none transition-colors"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg leading-none"
          >×</button>
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
                ? "bg-orange-500 text-white border-orange-500 shadow-sm"
                : "bg-white text-gray-500 border-gray-200 hover:border-orange-300 hover:text-orange-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-center text-sm text-gray-400">
        Showing <span className="font-semibold text-orange-500">{filtered.length}</span> of {idioms.length} idioms
      </p>

      {/* Idiom Cards */}
      <div className="space-y-2">
        {filtered.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            No idioms found for "<span className="font-semibold">{search}</span>"
          </div>
        ) : (
          filtered.map((item) => {
            const key = item.idiom;
            const isOpen = expandedId === key;
            const colorClass = categoryColors[item.category] || "bg-gray-100 text-gray-600 border-gray-200";
            return (
              <div
                key={key}
                className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                  isOpen ? "border-orange-300 shadow-md" : "border-gray-200 hover:border-orange-200"
                }`}
              >
                <button
                  onClick={() => setExpandedId(isOpen ? null : key)}
                  className="w-full flex items-center justify-between px-4 py-3.5 text-left bg-white hover:bg-orange-50/50 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="font-bold text-gray-900 text-sm sm:text-base truncate">
                      {item.idiom}
                    </span>
                    <span className={`hidden sm:inline-flex px-2 py-0.5 rounded-full text-xs font-medium border flex-shrink-0 ${colorClass}`}>
                      {item.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                    {!isOpen && (
                      <span className="text-xs text-gray-400 hidden sm:block truncate max-w-[180px]">
                        {item.meaning}
                      </span>
                    )}
                    {isOpen
                      ? <ChevronUp className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    }
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 bg-orange-50/30 border-t border-orange-100 space-y-3">
                    <div className="flex items-start gap-2 pt-3">
                      <span className="text-orange-500 font-bold text-xs uppercase tracking-wide flex-shrink-0 mt-0.5">Meaning</span>
                      <p className="text-gray-700 text-sm">{item.meaning}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold text-xs uppercase tracking-wide flex-shrink-0 mt-0.5">Example</span>
                      <p className="text-gray-600 text-sm italic">"{item.example}"</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium border ${colorClass}`}>
                        {item.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      <p className="text-center text-xs text-gray-400 pt-2">
        💡 <strong>Tip:</strong> Use the category filters to focus on idioms for work, exams, or daily conversation.
      </p>
    </div>
  );
}
