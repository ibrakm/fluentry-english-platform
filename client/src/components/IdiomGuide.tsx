import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface Idiom {
  id: string;
  title: string;
  meaning: string;
  explanation: string;
  examples: string[];
  dialogue: {
    person1: string;
    person2: string;
    lines: Array<{ speaker: string; text: string }>;
  };
  image: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

const idioms: Idiom[] = [
  {
    id: "piece-of-cake",
    title: "Piece of Cake",
    meaning: "Something very easy to do",
    explanation: "This idiom means that something is very simple or easy to accomplish. Just like eating a piece of cake is easy, the task at hand requires minimal effort.",
    examples: [
      "The math test was a piece of cake. I finished it in 20 minutes.",
      "Installing the software was a piece of cake for someone with her experience.",
      "Don't worry about the presentation. It'll be a piece of cake!",
    ],
    dialogue: {
      person1: "Alice",
      person2: "Bob",
      lines: [
        { speaker: "Alice", text: "Can you help me make a flyer for my class?" },
        { speaker: "Bob", text: "Sure. It's a piece of cake with this template." },
        { speaker: "Alice", text: "Great—let's do it now." },
        { speaker: "Bob", text: "No problem, we'll have it done in minutes!" },
      ],
    },
    image: "/idioms/piece-of-cake.png",
    difficulty: "Beginner",
  },
  {
    id: "water-under-bridge",
    title: "Water Under the Bridge",
    meaning: "Don't worry about the past; it's over and done with",
    explanation: "This idiom suggests that past events should not be dwelled upon. Just like water flows under a bridge and is gone forever, past mistakes or conflicts should be forgotten and forgiven.",
    examples: [
      "I know we had an argument last week, but that's water under the bridge now.",
      "He apologized for being late, and I told him it's water under the bridge.",
      "Let's not bring up old problems. What happened is water under the bridge.",
    ],
    dialogue: {
      person1: "Sarah",
      person2: "Mike",
      lines: [
        { speaker: "Sarah", text: "I'm sorry I was late last week." },
        { speaker: "Mike", text: "It's water under the bridge." },
        { speaker: "Sarah", text: "So we're good?" },
        { speaker: "Mike", text: "We're good and if possible, let's move forward together." },
      ],
    },
    image: "/idioms/water-under-bridge.png",
    difficulty: "Beginner",
  },
  {
    id: "dont-cry-over-spilled-milk",
    title: "Don't Cry Over Spilled Milk",
    meaning: "Don't be upset about something that has already happened and cannot be changed",
    explanation: "This idiom advises against worrying about past events that cannot be undone. Like spilled milk that cannot be put back in the glass, past mistakes cannot be changed, so it's better to focus on the future.",
    examples: [
      "I made a mistake on the report, but there's no point crying over spilled milk.",
      "She failed the exam, but crying over spilled milk won't help her pass next time.",
      "Yes, I lost my phone, but don't cry over spilled milk—let's focus on finding it.",
    ],
    dialogue: {
      person1: "Tom",
      person2: "Lisa",
      lines: [
        { speaker: "Tom", text: "I sent the wrong file to my boss. I feel terrible." },
        { speaker: "Lisa", text: "It happens. Don't cry over spilled milk." },
        { speaker: "Tom", text: "So what should I do?" },
        { speaker: "Lisa", text: "Send the correct file and apologize quickly. That's all you can do." },
      ],
    },
    image: "/idioms/cat-out-of-bag.png",
    difficulty: "Beginner",
  },
  {
    id: "hit-the-books",
    title: "Hit the Books",
    meaning: "To study hard",
    explanation: "This idiom means to start studying or to study intensively. 'Hit' here means to start or begin, so 'hitting the books' means starting to study seriously.",
    examples: [
      "I need to hit the books for my upcoming exam.",
      "The students are hitting the books in the library every evening.",
      "If you want to pass, you better hit the books tonight!",
    ],
    dialogue: {
      person1: "James",
      person2: "Emma",
      lines: [
        { speaker: "James", text: "Want to go to the movies tonight?" },
        { speaker: "Emma", text: "I can't. I need to hit the books for my chemistry exam." },
        { speaker: "James", text: "How long will you study?" },
        { speaker: "Emma", text: "At least three hours. It's a tough subject!" },
      ],
    },
    image: "/idioms/hit-the-books.png",
    difficulty: "Beginner",
  },
  {
    id: "speak-of-the-devil",
    title: "Speak of the Devil",
    meaning: "When someone appears just as you were talking about them",
    explanation: "This idiom is used when someone arrives or appears right after you've been discussing them. It's often said as 'speak of the devil' or 'speak of the devil and he shall appear.'",
    examples: [
      "We were just talking about John, and speak of the devil, he walked in!",
      "I was mentioning your name, and speak of the devil, you called me.",
      "We were discussing the boss, and speak of the devil, she appeared in the hallway.",
    ],
    dialogue: {
      person1: "Rachel",
      person2: "David",
      lines: [
        { speaker: "Rachel", text: "I was just thinking about calling you." },
        { speaker: "David", text: "Speak of the devil! I was about to call you too." },
        { speaker: "Rachel", text: "Great minds think alike!" },
        { speaker: "David", text: "So, what did you want to talk about?" },
      ],
    },
    image: "/idioms/speak-of-the-devil.png",
    difficulty: "Intermediate",
  },
  {
    id: "two-birds-one-stone",
    title: "Two Birds with One Stone",
    meaning: "Accomplish two goals with a single action",
    explanation: "This idiom describes the efficiency of achieving two objectives with just one effort. It's about being productive and making the most of your actions.",
    examples: [
      "By going to the gym before work, I kill two birds with one stone—exercise and save time.",
      "Learning Spanish while traveling to Mexico lets you kill two birds with one stone.",
      "This job interview is perfect; I'll get the job and network at the same time—two birds with one stone.",
    ],
    dialogue: {
      person1: "Carlos",
      person2: "Nina",
      lines: [
        { speaker: "Carlos", text: "I'm going to the market to buy groceries and meet a friend." },
        { speaker: "Nina", text: "Nice! You're killing two birds with one stone." },
        { speaker: "Carlos", text: "Exactly! I save time and get to catch up with my friend." },
        { speaker: "Nina", text: "That's very efficient planning!" },
      ],
    },
    image: "/idioms/two-birds-one-stone.png",
    difficulty: "Intermediate",
  },
  {
    id: "when-pigs-fly",
    title: "When Pigs Fly",
    meaning: "Something that will never happen",
    explanation: "This idiom is used to express that something is impossible or highly unlikely to occur. Since pigs cannot fly, the phrase humorously suggests that the mentioned event will never happen.",
    examples: [
      "He'll finish the project on time? When pigs fly!",
      "My brother will clean his room? When pigs fly!",
      "You think he'll apologize? When pigs fly! He's too proud.",
    ],
    dialogue: {
      person1: "Paul",
      person2: "Susan",
      lines: [
        { speaker: "Paul", text: "Do you think we'll get a raise this year?" },
        { speaker: "Susan", text: "When pigs fly! The company is cutting budgets." },
        { speaker: "Paul", text: "That bad, huh?" },
        { speaker: "Susan", text: "Yeah, I don't see it happening anytime soon." },
      ],
    },
    image: "/idioms/when-pigs-fly.png",
    difficulty: "Intermediate",
  },
  {
    id: "arm-and-leg",
    title: "Cost an Arm and a Leg",
    meaning: "Something is very expensive",
    explanation: "This idiom describes something that costs a lot of money. It humorously suggests that you'd have to give up your arm and leg (something very valuable) to afford it.",
    examples: [
      "That new car costs an arm and a leg!",
      "The hotel in the city center costs an arm and a leg, but it's worth it.",
      "Designer clothes cost an arm and a leg, but some people love them.",
    ],
    dialogue: {
      person1: "Mark",
      person2: "Jessica",
      lines: [
        { speaker: "Mark", text: "I want to buy a new iPhone." },
        { speaker: "Jessica", text: "Those cost an arm and a leg!" },
        { speaker: "Mark", text: "I know, but I really need a new phone." },
        { speaker: "Jessica", text: "Maybe wait for a sale or buy a used one?" },
      ],
    },
    image: "/idioms/arm-and-leg.png",
    difficulty: "Beginner",
  },
  {
    id: "ball-in-your-court",
    title: "Ball is in Your Court",
    meaning: "It's your turn to take action; the responsibility is yours",
    explanation: "This idiom, borrowed from tennis, means that it's now someone's responsibility to make a decision or take action. The other person has done their part, and now it's your move.",
    examples: [
      "I've given you all the information you need. The ball is in your court now.",
      "I've sent you the proposal. The ball is in your court to make a decision.",
      "I've done my part of the project. Now the ball is in your court.",
    ],
    dialogue: {
      person1: "Alex",
      person2: "Jordan",
      lines: [
        { speaker: "Alex", text: "I've sent you the contract for review." },
        { speaker: "Jordan", text: "Thanks. The ball is in my court now." },
        { speaker: "Alex", text: "Exactly. Let me know if you have any questions." },
        { speaker: "Jordan", text: "I'll review it and get back to you by Friday." },
      ],
    },
    image: "/idioms/ball-in-your-court.png",
    difficulty: "Intermediate",
  },
  {
    id: "bite-the-bullet",
    title: "Bite the Bullet",
    meaning: "Face a difficult situation with courage",
    explanation: "This idiom means to face something difficult or unpleasant with bravery and determination. Historically, soldiers would bite bullets during surgery to cope with pain.",
    examples: [
      "I don't want to go to the dentist, but I need to bite the bullet.",
      "She bit the bullet and asked for a promotion despite her nervousness.",
      "We need to bite the bullet and make some tough decisions about the budget.",
    ],
    dialogue: {
      person1: "Tom",
      person2: "Amy",
      lines: [
        { speaker: "Tom", text: "I'm nervous about my job interview tomorrow." },
        { speaker: "Amy", text: "Just bite the bullet and do your best!" },
        { speaker: "Tom", text: "I'll try. I've prepared well." },
        { speaker: "Amy", text: "You'll do great. Confidence is key!" },
      ],
    },
    image: "/idioms/bite-the-bullet.png",
    difficulty: "Intermediate",
  },
  {
    id: "blue-moon",
    title: "Once in a Blue Moon",
    meaning: "Something that happens very rarely",
    explanation: "This idiom refers to events that occur infrequently. A 'blue moon' is a rare astronomical occurrence, so the phrase means something happens only occasionally.",
    examples: [
      "I see my old friends once in a blue moon.",
      "He visits his hometown once in a blue moon.",
      "We go out for dinner once in a blue moon, usually for special occasions.",
    ],
    dialogue: {
      person1: "Lisa",
      person2: "Kevin",
      lines: [
        { speaker: "Lisa", text: "Do you ever go to the beach?" },
        { speaker: "Kevin", text: "Once in a blue moon. I'm usually too busy with work." },
        { speaker: "Lisa", text: "You should take more time for yourself." },
        { speaker: "Kevin", text: "I know. Maybe I'll plan a trip soon." },
      ],
    },
    image: "/idioms/blue-moon.png",
    difficulty: "Beginner",
  },
  {
    id: "best-of-both-worlds",
    title: "Best of Both Worlds",
    meaning: "Enjoying the advantages of two different things at the same time",
    explanation: "This idiom describes a situation where you get the benefits of two different options without the drawbacks of either. It's the ideal scenario.",
    examples: [
      "Working from home gives me the best of both worlds—flexibility and productivity.",
      "This job offers the best of both worlds: good salary and interesting work.",
      "Living near the city but in a quiet neighborhood is the best of both worlds.",
    ],
    dialogue: {
      person1: "Chris",
      person2: "Dana",
      lines: [
        { speaker: "Chris", text: "I love my new job. It's remote but I get to work with a great team." },
        { speaker: "Dana", text: "That sounds like the best of both worlds!" },
        { speaker: "Chris", text: "It really is. I have flexibility and social interaction." },
        { speaker: "Dana", text: "You're lucky to have found such a perfect role!" },
      ],
    },
    image: "/idioms/both-worlds.png",
    difficulty: "Intermediate",
  },
  {
    id: "break-a-leg",
    title: "Break a Leg",
    meaning: "Good luck, especially before a performance",
    explanation: "This idiom is used to wish someone good luck, particularly before they perform in a play, concert, or other event. It's ironic because 'break a leg' sounds negative but actually means the opposite.",
    examples: [
      "Good luck on your presentation! Break a leg!",
      "Before the concert, I told the musician, 'Break a leg!'",
      "She's nervous about her audition, so I said, 'Break a leg!'",
    ],
    dialogue: {
      person1: "Michael",
      person2: "Sarah",
      lines: [
        { speaker: "Michael", text: "I'm so nervous about my performance tonight." },
        { speaker: "Sarah", text: "Don't worry! Break a leg out there!" },
        { speaker: "Michael", text: "Thanks for the encouragement." },
        { speaker: "Sarah", text: "You're going to be amazing. I know it!" },
      ],
    },
    image: "/idioms/break-a-leg.png",
    difficulty: "Beginner",
  },
  {
    id: "eye-to-eye",
    title: "See Eye to Eye",
    meaning: "Agree with someone; have the same opinion",
    explanation: "This idiom means that two people agree on something or have the same perspective. When people 'see eye to eye,' they understand each other and share the same viewpoint.",
    examples: [
      "My parents and I don't always see eye to eye on politics.",
      "The team members see eye to eye on the project goals.",
      "We finally see eye to eye about the best approach to solve this problem.",
    ],
    dialogue: {
      person1: "Robert",
      person2: "Patricia",
      lines: [
        { speaker: "Robert", text: "I think we should invest in new technology." },
        { speaker: "Patricia", text: "I see eye to eye with you on that." },
        { speaker: "Robert", text: "Great! I'm glad we agree." },
        { speaker: "Patricia", text: "It's the best decision for our company's future." },
      ],
    },
    image: "/idioms/eye-to-eye.png",
    difficulty: "Intermediate",
  },
];

export default function IdiomGuide() {
  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-yellow-100 text-yellow-800",
    Advanced: "bg-red-100 text-red-800",
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">English Idioms Guide</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Learn common English idioms with explanations, examples, and real-world dialogues
        </p>
      </div>

      <div className="grid gap-6">
        {idioms.map((idiom) => (
          <Card key={idiom.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid md:grid-cols-3 gap-6 p-6">
              {/* Image */}
              <div className="flex items-center justify-center">
                <img
                  src={idiom.image}
                  alt={idiom.title}
                  className="w-full h-64 object-cover rounded-lg"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/300x300?text=" + idiom.title;
                  }}
                />
              </div>

              {/* Content */}
              <div className="md:col-span-2">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{idiom.title}</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-2">{idiom.meaning}</p>
                  </div>
                  <Badge className={difficultyColors[idiom.difficulty]}>
                    {idiom.difficulty}
                  </Badge>
                </div>

                <Tabs defaultValue="explanation" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="explanation">Explanation</TabsTrigger>
                    <TabsTrigger value="examples">Examples</TabsTrigger>
                    <TabsTrigger value="dialogue">Dialogue</TabsTrigger>
                  </TabsList>

                  <TabsContent value="explanation" className="mt-4">
                    <p className="text-gray-700 leading-relaxed">{idiom.explanation}</p>
                  </TabsContent>

                  <TabsContent value="examples" className="mt-4">
                    <ul className="space-y-3">
                      {idiom.examples.map((example, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                          <span className="text-gray-700">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>

                  <TabsContent value="dialogue" className="mt-4">
                    <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                      <p className="text-sm font-semibold text-gray-600 mb-4">
                        Dialogue: "{idiom.dialogue.person1}" & "{idiom.dialogue.person2}"
                      </p>
                      {idiom.dialogue.lines.map((line, idx) => (
                        <div key={idx} className="flex gap-3">
                          <span className="font-semibold text-blue-600 min-w-fit">
                            {line.speaker}:
                          </span>
                          <span className="text-gray-700">{line.text}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
