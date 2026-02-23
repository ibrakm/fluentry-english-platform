import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, MessageSquare, BookOpen, List } from "lucide-react";

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
    explanation: "This idiom means that something is very simple or easy to accomplish. Just like eating a piece of cake requires minimal effort, the task at hand is effortless.",
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
    meaning: "Past events that should not be worried about",
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
        { speaker: "Mike", text: "We're good. Let's move forward together." },
      ],
    },
    image: "/idioms/water-under-bridge.png",
    difficulty: "Beginner",
  },
  {
    id: "dont-cry-over-spilled-milk",
    title: "Don't Cry Over Spilled Milk",
    meaning: "Don't be upset about something that cannot be changed",
    explanation: "This idiom advises against worrying about past events that cannot be undone. Like spilled milk that cannot be put back in the glass, past mistakes cannot be changed.",
    examples: [
      "I made a mistake on the report, but there's no point crying over spilled milk.",
      "She failed the exam, but crying over spilled milk won't help her pass next time.",
      "Yes, I lost my phone, but don't cry over spilled milk—let's focus on solutions.",
    ],
    dialogue: {
      person1: "Tom",
      person2: "Lisa",
      lines: [
        { speaker: "Tom", text: "I sent the wrong file to my boss. I feel terrible." },
        { speaker: "Lisa", text: "It happens. Don't cry over spilled milk." },
        { speaker: "Tom", text: "So what should I do?" },
        { speaker: "Lisa", text: "Send the correct file and apologize quickly." },
      ],
    },
    image: "/idioms/dont-cry-spilled-milk.png",
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
    explanation: "This idiom is used when someone arrives right after you've been discussing them. It's often said as 'speak of the devil and he shall appear.'",
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
      "This job interview is perfect; I'll get the job and network at the same time.",
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
    explanation: "This idiom is used to express that something is impossible or highly unlikely to occur. Since pigs cannot fly, the phrase humorously suggests the event will never happen.",
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
    explanation: "This idiom describes something that costs a lot of money. It humorously suggests that you'd have to give up your arm and leg to afford it.",
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
    explanation: "Borrowed from tennis, this idiom means it's now someone's responsibility to make a decision or take action. The other person has done their part.",
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
    explanation: "This idiom means to face something difficult or unpleasant with bravery. Historically, soldiers would bite bullets during surgery to cope with pain.",
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
    explanation: "This idiom is used to wish someone good luck, particularly before they perform. It's ironic because 'break a leg' sounds negative but actually means the opposite.",
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
  // --- 16 NEW IDIOMS ---
  {
    id: "under-the-weather",
    title: "Under the Weather",
    meaning: "Feeling sick or unwell",
    explanation: "This idiom is used to describe feeling ill or not in good health. It originally came from sailors who would go below deck when the weather was bad, to avoid seasickness.",
    examples: [
      "I'm feeling a bit under the weather today, so I'll stay home.",
      "She looked under the weather at the meeting — pale and tired.",
      "He's been under the weather all week with a cold.",
    ],
    dialogue: {
      person1: "Nadia",
      person2: "Omar",
      lines: [
        { speaker: "Nadia", text: "You don't look well. Are you okay?" },
        { speaker: "Omar", text: "I'm a bit under the weather. I think I have a cold." },
        { speaker: "Nadia", text: "You should rest and drink plenty of water." },
        { speaker: "Omar", text: "I will. Thanks for your concern!" },
      ],
    },
    image: "/idioms/under-the-weather.png",
    difficulty: "Beginner",
  },
  {
    id: "spill-the-beans",
    title: "Spill the Beans",
    meaning: "To reveal a secret or confidential information",
    explanation: "This idiom means to accidentally or intentionally reveal information that was supposed to be kept secret. It's often used when someone shares news before they were supposed to.",
    examples: [
      "Don't spill the beans about the surprise party!",
      "She spilled the beans about the company merger before it was announced.",
      "Who spilled the beans? Everyone knows about the secret project now.",
    ],
    dialogue: {
      person1: "Fatima",
      person2: "Youssef",
      lines: [
        { speaker: "Fatima", text: "Did you tell anyone about the surprise party?" },
        { speaker: "Youssef", text: "I accidentally spilled the beans to Ahmed. I'm sorry!" },
        { speaker: "Fatima", text: "Oh no! Now the surprise is ruined." },
        { speaker: "Youssef", text: "I'll make it up to you. I promise!" },
      ],
    },
    image: "/idioms/spill-the-beans.png",
    difficulty: "Beginner",
  },
  {
    id: "burning-bridges",
    title: "Burning Bridges",
    meaning: "Doing something that permanently damages a relationship",
    explanation: "This idiom means to take an action that destroys a relationship or opportunity permanently, making it impossible to go back. Like burning a bridge, you can no longer cross back.",
    examples: [
      "Don't burn your bridges by quitting without notice.",
      "He burned his bridges with his old employer by speaking badly about them.",
      "Be careful not to burn bridges in this industry — it's very small.",
    ],
    dialogue: {
      person1: "Karim",
      person2: "Layla",
      lines: [
        { speaker: "Karim", text: "I'm thinking of quitting and telling my boss exactly what I think of him." },
        { speaker: "Layla", text: "Be careful! You don't want to burn your bridges." },
        { speaker: "Karim", text: "You're right. I might need a reference from him later." },
        { speaker: "Layla", text: "Exactly. Leave professionally, even if you're frustrated." },
      ],
    },
    image: "/idioms/burning-bridges.png",
    difficulty: "Intermediate",
  },
  {
    id: "bite-off-more",
    title: "Bite Off More Than You Can Chew",
    meaning: "Take on more responsibility than you can handle",
    explanation: "This idiom warns against taking on too much work or too many responsibilities at once. Just like trying to eat a bite that's too big, you can get overwhelmed.",
    examples: [
      "I think I bit off more than I can chew by taking three courses at once.",
      "She bit off more than she could chew when she agreed to manage two teams.",
      "Don't bite off more than you can chew — focus on one project at a time.",
    ],
    dialogue: {
      person1: "Hassan",
      person2: "Amina",
      lines: [
        { speaker: "Hassan", text: "I agreed to three freelance projects this month." },
        { speaker: "Amina", text: "That sounds like you've bitten off more than you can chew!" },
        { speaker: "Hassan", text: "I know. I'm already stressed and it's only day two." },
        { speaker: "Amina", text: "Try to renegotiate deadlines before it's too late." },
      ],
    },
    image: "/idioms/bite-off-more.png",
    difficulty: "Intermediate",
  },
  {
    id: "hit-the-nail",
    title: "Hit the Nail on the Head",
    meaning: "To describe exactly what is causing a situation or problem",
    explanation: "This idiom means to say or do exactly the right thing, or to describe a situation perfectly. Like a carpenter hitting a nail precisely, you've identified the exact point.",
    examples: [
      "You hit the nail on the head — that's exactly the problem.",
      "Her analysis hit the nail on the head about why sales are declining.",
      "The teacher hit the nail on the head when explaining the grammar rule.",
    ],
    dialogue: {
      person1: "Tariq",
      person2: "Salma",
      lines: [
        { speaker: "Tariq", text: "I think the problem is that we're not communicating clearly with clients." },
        { speaker: "Salma", text: "You've hit the nail on the head! That's exactly it." },
        { speaker: "Tariq", text: "So we need to improve our communication strategy." },
        { speaker: "Salma", text: "Absolutely. Let's start with weekly updates." },
      ],
    },
    image: "/idioms/hit-the-nail.png",
    difficulty: "Intermediate",
  },
  {
    id: "on-the-fence",
    title: "On the Fence",
    meaning: "Unable to decide between two options; undecided",
    explanation: "This idiom describes someone who hasn't made a decision yet and is neutral between two choices. Like sitting on a fence, you haven't chosen which side to jump to.",
    examples: [
      "I'm still on the fence about whether to accept the job offer.",
      "She's on the fence about moving to a new city.",
      "He's been on the fence about buying a car for months.",
    ],
    dialogue: {
      person1: "Rania",
      person2: "Bilal",
      lines: [
        { speaker: "Rania", text: "Have you decided which university to attend?" },
        { speaker: "Bilal", text: "I'm still on the fence between two options." },
        { speaker: "Rania", text: "What are the main differences?" },
        { speaker: "Bilal", text: "One has a better program, the other is closer to home." },
      ],
    },
    image: "/idioms/on-the-fence.png",
    difficulty: "Intermediate",
  },
  {
    id: "pull-leg",
    title: "Pull Someone's Leg",
    meaning: "To joke or tease someone",
    explanation: "This idiom means to joke with someone or tell them something untrue in a playful way. It's used when you're teasing someone for fun, not to be mean.",
    examples: [
      "Are you serious, or are you pulling my leg?",
      "He told me he won the lottery, but I think he was pulling my leg.",
      "Stop pulling my leg! That can't be true.",
    ],
    dialogue: {
      person1: "Nour",
      person2: "Samir",
      lines: [
        { speaker: "Nour", text: "I heard you got promoted to manager!" },
        { speaker: "Samir", text: "Ha! I'm just pulling your leg. I'm still in the same position." },
        { speaker: "Nour", text: "You got me! I was about to congratulate you." },
        { speaker: "Samir", text: "Sorry! I couldn't resist the joke." },
      ],
    },
    image: "/idioms/pull-leg.png",
    difficulty: "Beginner",
  },
  {
    id: "raining-cats-dogs",
    title: "Raining Cats and Dogs",
    meaning: "Raining very heavily",
    explanation: "This idiom is used to describe extremely heavy rain. The origin is uncertain, but it's one of the most well-known English idioms for describing bad weather.",
    examples: [
      "Take an umbrella — it's raining cats and dogs outside.",
      "The match was cancelled because it was raining cats and dogs.",
      "I got completely soaked. It was raining cats and dogs!",
    ],
    dialogue: {
      person1: "Hind",
      person2: "Mehdi",
      lines: [
        { speaker: "Hind", text: "Did you go for your morning run today?" },
        { speaker: "Mehdi", text: "No way! It was raining cats and dogs at 6 AM." },
        { speaker: "Hind", text: "That's too bad. Maybe tomorrow will be better." },
        { speaker: "Mehdi", text: "I hope so. I need to get back to my routine." },
      ],
    },
    image: "/idioms/raining-cats-dogs.png",
    difficulty: "Beginner",
  },
  {
    id: "the-last-straw",
    title: "The Last Straw",
    meaning: "The final problem that makes a situation unbearable",
    explanation: "This idiom refers to the final small problem that causes someone to lose patience or give up. It comes from the idea of a camel's back breaking under one final piece of straw.",
    examples: [
      "When he was late for the third time, that was the last straw.",
      "The last straw was when they cut our lunch break to 20 minutes.",
      "Her rude comment was the last straw — I decided to quit.",
    ],
    dialogue: {
      person1: "Zineb",
      person2: "Amine",
      lines: [
        { speaker: "Zineb", text: "I heard you resigned from your job. What happened?" },
        { speaker: "Amine", text: "My boss cancelled my vacation for the third time. That was the last straw." },
        { speaker: "Zineb", text: "I understand. You had been patient for a long time." },
        { speaker: "Amine", text: "Exactly. Everyone has a limit." },
      ],
    },
    image: "/idioms/the-last-straw.png",
    difficulty: "Intermediate",
  },
  {
    id: "actions-speak",
    title: "Actions Speak Louder Than Words",
    meaning: "What you do is more important than what you say",
    explanation: "This proverb means that people's actions are a better indicator of their true intentions and character than their words. Doing something is more meaningful than just talking about it.",
    examples: [
      "He always promises to help but never does. Actions speak louder than words.",
      "Instead of just talking about change, let's do something. Actions speak louder than words.",
      "She showed her love through actions, not just words.",
    ],
    dialogue: {
      person1: "Maryam",
      person2: "Khalid",
      lines: [
        { speaker: "Maryam", text: "He keeps saying he'll change, but nothing ever happens." },
        { speaker: "Khalid", text: "Remember — actions speak louder than words." },
        { speaker: "Maryam", text: "You're right. I need to see real change, not just promises." },
        { speaker: "Khalid", text: "Give it time, but don't ignore what you see." },
      ],
    },
    image: "/idioms/actions-speak.png",
    difficulty: "Beginner",
  },
  {
    id: "add-fuel",
    title: "Add Fuel to the Fire",
    meaning: "To make a bad situation worse",
    explanation: "This idiom means to do or say something that makes an already bad or angry situation even worse. Like adding fuel to a fire, it intensifies the problem.",
    examples: [
      "His sarcastic comment only added fuel to the fire during the argument.",
      "Don't add fuel to the fire by bringing up old arguments.",
      "The manager's harsh email added fuel to the fire among the unhappy employees.",
    ],
    dialogue: {
      person1: "Souad",
      person2: "Rachid",
      lines: [
        { speaker: "Souad", text: "They're already arguing. Should I remind them about the deadline?" },
        { speaker: "Rachid", text: "No! That will just add fuel to the fire." },
        { speaker: "Souad", text: "You're right. I'll wait until they calm down." },
        { speaker: "Rachid", text: "Good idea. Timing is everything." },
      ],
    },
    image: "/idioms/add-fuel.png",
    difficulty: "Intermediate",
  },
  {
    id: "back-to-square-one",
    title: "Back to Square One",
    meaning: "Having to start something again from the beginning",
    explanation: "This idiom means that a plan or effort has failed and you must start over from the beginning. It comes from board games where landing on a certain square sends you back to the start.",
    examples: [
      "The project failed, so we're back to square one.",
      "After the client rejected our proposal, we went back to square one.",
      "My computer crashed and I lost all my work — back to square one!",
    ],
    dialogue: {
      person1: "Ismail",
      person2: "Houda",
      lines: [
        { speaker: "Ismail", text: "The client didn't like our design at all." },
        { speaker: "Houda", text: "So we're back to square one?" },
        { speaker: "Ismail", text: "Afraid so. We need to rethink the whole concept." },
        { speaker: "Houda", text: "Let's schedule a brainstorming session tomorrow." },
      ],
    },
    image: "/idioms/back-to-basics.png",
    difficulty: "Intermediate",
  },
  {
    id: "curiosity-killed-cat",
    title: "Curiosity Killed the Cat",
    meaning: "Being too nosy or curious can get you into trouble",
    explanation: "This idiom warns that being overly curious or nosy can lead to problems or danger. It's used to caution someone who is asking too many questions or prying into others' business.",
    examples: [
      "Don't open that box — curiosity killed the cat!",
      "She kept asking about the surprise and I told her: curiosity killed the cat.",
      "He snooped through his colleague's files. Curiosity killed the cat — he got fired.",
    ],
    dialogue: {
      person1: "Widad",
      person2: "Driss",
      lines: [
        { speaker: "Widad", text: "I wonder what's in that locked drawer in the office." },
        { speaker: "Driss", text: "Curiosity killed the cat! Leave it alone." },
        { speaker: "Widad", text: "But don't you want to know?" },
        { speaker: "Driss", text: "Some things are better left unknown." },
      ],
    },
    image: "/idioms/curiosity-killed-cat.png",
    difficulty: "Intermediate",
  },
  {
    id: "every-cloud",
    title: "Every Cloud Has a Silver Lining",
    meaning: "Every difficult situation has a positive aspect",
    explanation: "This idiom means that even in the worst situations, there is always something positive or hopeful to be found. It encourages optimism during hard times.",
    examples: [
      "I lost my job, but every cloud has a silver lining — I now have time to pursue my passion.",
      "The lockdown was hard, but every cloud has a silver lining: I learned new skills.",
      "She failed the exam, but every cloud has a silver lining — she studied harder and passed next time.",
    ],
    dialogue: {
      person1: "Ghita",
      person2: "Younes",
      lines: [
        { speaker: "Ghita", text: "I'm so upset. My flight was cancelled." },
        { speaker: "Younes", text: "Every cloud has a silver lining! You get to spend more time here." },
        { speaker: "Ghita", text: "I hadn't thought of it that way." },
        { speaker: "Younes", text: "We can visit that museum you wanted to see!" },
      ],
    },
    image: "/idioms/every-cloud.png",
    difficulty: "Beginner",
  },
  {
    id: "jump-on-bandwagon",
    title: "Jump on the Bandwagon",
    meaning: "To follow a trend or popular activity",
    explanation: "This idiom means to join or support something because it has become popular, not necessarily because you believe in it. It often implies following trends without thinking critically.",
    examples: [
      "Everyone is jumping on the bandwagon with this new diet trend.",
      "The company jumped on the bandwagon and created a TikTok account.",
      "Don't just jump on the bandwagon — research before you invest.",
    ],
    dialogue: {
      person1: "Najat",
      person2: "Fouad",
      lines: [
        { speaker: "Najat", text: "I'm thinking of starting a podcast. Everyone seems to have one." },
        { speaker: "Fouad", text: "Don't just jump on the bandwagon. Do you have something unique to say?" },
        { speaker: "Najat", text: "Good point. I should think about my niche first." },
        { speaker: "Fouad", text: "Exactly. Quality over trend!" },
      ],
    },
    image: "/idioms/jump-on-bandwagon.png",
    difficulty: "Intermediate",
  },
  {
    id: "miss-the-boat",
    title: "Miss the Boat",
    meaning: "To miss an opportunity",
    explanation: "This idiom means to fail to take advantage of an opportunity, often because you were too slow or too late. Like missing a boat that has already left the dock.",
    examples: [
      "I missed the boat on that investment — the price has doubled since.",
      "Don't miss the boat on this job offer. It's a great opportunity.",
      "She missed the boat by not applying for the scholarship in time.",
    ],
    dialogue: {
      person1: "Ilham",
      person2: "Badr",
      lines: [
        { speaker: "Ilham", text: "Did you apply for the early bird discount?" },
        { speaker: "Badr", text: "No, I forgot. I think I missed the boat on that one." },
        { speaker: "Ilham", text: "That's a shame. It was 40% off." },
        { speaker: "Badr", text: "I'll set a reminder next time. Lesson learned!" },
      ],
    },
    image: "/idioms/miss-the-boat.png",
    difficulty: "Intermediate",
  },
  {
    id: "no-pain-no-gain",
    title: "No Pain, No Gain",
    meaning: "You have to work hard and endure difficulty to achieve success",
    explanation: "This idiom means that achieving something worthwhile requires effort and sometimes discomfort. It's commonly used in fitness, education, and career contexts.",
    examples: [
      "Learning a language is hard, but no pain, no gain!",
      "She trained every day despite being tired. No pain, no gain.",
      "Starting a business is tough, but remember: no pain, no gain.",
    ],
    dialogue: {
      person1: "Samira",
      person2: "Adil",
      lines: [
        { speaker: "Samira", text: "I'm exhausted from studying every night." },
        { speaker: "Adil", text: "No pain, no gain! Your exams are next week." },
        { speaker: "Samira", text: "I know. I just need to push through." },
        { speaker: "Adil", text: "You'll thank yourself when you see the results." },
      ],
    },
    image: "/idioms/no-pain-no-gain.png",
    difficulty: "Beginner",
  },
  {
    id: "steal-thunder",
    title: "Steal Someone's Thunder",
    meaning: "To take attention or credit away from someone else",
    explanation: "This idiom means to do something that takes attention or recognition away from another person, often unintentionally. It can also mean to use someone else's idea before they do.",
    examples: [
      "She announced her promotion at my birthday party and stole my thunder.",
      "He presented the idea first and stole his colleague's thunder.",
      "Don't steal her thunder — let her share the good news herself.",
    ],
    dialogue: {
      person1: "Leila",
      person2: "Hamza",
      lines: [
        { speaker: "Leila", text: "I was about to announce my engagement, but my sister told everyone first!" },
        { speaker: "Hamza", text: "She totally stole your thunder!" },
        { speaker: "Leila", text: "I was so disappointed. It was my moment." },
        { speaker: "Hamza", text: "Talk to her about it. She probably didn't mean any harm." },
      ],
    },
    image: "/idioms/steal-thunder.png",
    difficulty: "Advanced",
  },
];

type TabType = "explanation" | "examples" | "dialogue";

function IdiomCard({ idiom }: { idiom: Idiom }) {
  const [activeTab, setActiveTab] = useState<TabType>("explanation");
  const [expanded, setExpanded] = useState(false);

  const difficultyColors: Record<string, string> = {
    Beginner: "bg-green-100 text-green-800 border-green-200",
    Intermediate: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Advanced: "bg-red-100 text-red-800 border-red-200",
  };

  return (
    <Card className="overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100">
      {/* Card Header - always visible */}
      <button
        className="w-full text-left"
        onClick={() => setExpanded(!expanded)}
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        <div className="flex items-center gap-4 p-4">
          <img
            src={idiom.image}
            alt={idiom.title}
            className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl flex-shrink-0"
            onError={(e) => {
              e.currentTarget.src = `https://placehold.co/80x80/e2e8f0/64748b?text=${encodeURIComponent(idiom.title[0])}`;
            }}
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">{idiom.title}</h3>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border flex-shrink-0 ${difficultyColors[idiom.difficulty]}`}>
                {idiom.difficulty}
              </span>
            </div>
            <p className="text-sm text-blue-600 font-medium mt-1 leading-snug">{idiom.meaning}</p>
          </div>
          <div className="flex-shrink-0 text-gray-400 ml-1">
            {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      {expanded && (
        <div className="border-t border-gray-100">
          {/* Large image on expand */}
          <div className="px-4 pt-4">
            <img
              src={idiom.image}
              alt={idiom.title}
              className="w-full max-h-56 object-cover rounded-xl"
              onError={(e) => {
                e.currentTarget.src = `https://placehold.co/400x200/e2e8f0/64748b?text=${encodeURIComponent(idiom.title)}`;
              }}
            />
          </div>

          {/* Tab buttons */}
          <div className="flex gap-2 px-4 pt-4 pb-1">
            <button
              onClick={() => setActiveTab("explanation")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "explanation"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Explain</span>
            </button>
            <button
              onClick={() => setActiveTab("examples")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "examples"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <List className="w-3.5 h-3.5" />
              <span>Examples</span>
            </button>
            <button
              onClick={() => setActiveTab("dialogue")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "dialogue"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Dialogue</span>
            </button>
          </div>

          {/* Tab content */}
          <div className="px-4 pb-4 pt-3">
            {activeTab === "explanation" && (
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{idiom.explanation}</p>
            )}
            {activeTab === "examples" && (
              <ul className="space-y-2">
                {idiom.examples.map((example, idx) => (
                  <li key={idx} className="flex gap-2 text-sm sm:text-base">
                    <span className="text-blue-500 font-bold flex-shrink-0 mt-0.5">•</span>
                    <span className="text-gray-700 italic">"{example}"</span>
                  </li>
                ))}
              </ul>
            )}
            {activeTab === "dialogue" && (
              <div className="bg-blue-50 rounded-xl p-3 space-y-2">
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-3">
                  Conversation Example
                </p>
                {idiom.dialogue.lines.map((line, idx) => (
                  <div key={idx} className={`flex gap-2 ${idx % 2 === 0 ? "" : "flex-row-reverse"}`}>
                    <div className={`max-w-[80%] rounded-xl px-3 py-2 text-sm ${
                      idx % 2 === 0
                        ? "bg-white text-gray-800 rounded-tl-none shadow-sm"
                        : "bg-blue-600 text-white rounded-tr-none"
                    }`}>
                      <span className={`text-xs font-semibold block mb-0.5 ${idx % 2 === 0 ? "text-blue-600" : "text-blue-100"}`}>
                        {line.speaker}
                      </span>
                      {line.text}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </Card>
  );
}

export default function IdiomGuide() {
  const [filter, setFilter] = useState<"All" | "Beginner" | "Intermediate" | "Advanced">("All");
  const [search, setSearch] = useState("");

  const filtered = idioms.filter((idiom) => {
    const matchesDifficulty = filter === "All" || idiom.difficulty === filter;
    const matchesSearch =
      search === "" ||
      idiom.title.toLowerCase().includes(search.toLowerCase()) ||
      idiom.meaning.toLowerCase().includes(search.toLowerCase());
    return matchesDifficulty && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">English Idioms Guide</h2>
        <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
          {idioms.length} common English idioms with explanations, examples, and real conversations
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search idioms..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2">
        {(["All", "Beginner", "Intermediate", "Advanced"] as const).map((level) => (
          <button
            key={level}
            onClick={() => setFilter(level)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === level
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            {level} {level !== "All" && `(${idioms.filter((i) => i.difficulty === level).length})`}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="text-center text-sm text-gray-400">
        Showing {filtered.length} of {idioms.length} idioms
      </p>

      {/* Idiom cards */}
      <div className="grid gap-3 sm:gap-4">
        {filtered.length > 0 ? (
          filtered.map((idiom) => <IdiomCard key={idiom.id} idiom={idiom} />)
        ) : (
          <div className="text-center py-12 text-gray-400">
            <p className="text-lg">No idioms found for "{search}"</p>
            <button
              onClick={() => { setSearch(""); setFilter("All"); }}
              className="mt-3 text-blue-600 hover:underline text-sm"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
