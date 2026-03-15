/**
 * ListeningPractice — Interactive Listening Exercises
 *
 * Features:
 * - Real audio files (MP3) with a custom HTML5 audio player
 * - Play / Pause / Replay controls
 * - Animated progress bar
 * - Transcript reveal (hidden by default, shown on demand)
 * - Vocabulary flashcards
 * - Multiple-choice comprehension questions with instant feedback
 * - Score celebration with confetti-style animation
 * - Motivational CTA after completion → WhatsApp booking
 */

import { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Play, Pause, RotateCcw, Volume2, ChevronDown, ChevronUp,
  CheckCircle, XCircle, ArrowRight, MessageCircle, Star,
  BookOpen, Headphones, Trophy, Zap,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface VocabItem {
  word: string;
  meaning: string;
}

interface Exercise {
  id: string;
  title: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1";
  topic: string;
  emoji: string;
  duration: string;
  audioSrc: string;
  imageSrc: string;
  transcript: string;
  questions: Question[];
  vocabulary: VocabItem[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const exercises: Exercise[] = [
  {
    id: "ordering-coffee",
    title: "Ordering Coffee at a Café",
    level: "A1",
    topic: "Daily Life",
    emoji: "☕",
    duration: "~1 min",
    audioSrc: "/audio/ordering-coffee.mp3",
    imageSrc: "/audio/scene-ordering-coffee.webp",
    transcript: `Customer: Hi, I'd like to order a coffee, please.
Barista: Sure! What size would you like? Small, medium, or large?
Customer: I'll have a medium, please.
Barista: And what type of coffee? We have espresso, cappuccino, latte, or americano.
Customer: A cappuccino, please.
Barista: Great! That's one medium cappuccino. Would you like anything else?
Customer: No, that's all. How much is it?
Barista: That's $4.50.
Customer: Here you go. Keep the change.
Barista: Thank you! Your coffee will be ready in just a moment.`,
    questions: [
      {
        id: "q1",
        question: "What size coffee does the customer order?",
        options: ["Small", "Medium", "Large", "Extra Large"],
        correctAnswer: 1,
        explanation: "The customer says 'I'll have a medium, please.'",
      },
      {
        id: "q2",
        question: "What type of coffee does the customer choose?",
        options: ["Espresso", "Cappuccino", "Latte", "Americano"],
        correctAnswer: 1,
        explanation: "The customer specifically asks for 'A cappuccino, please.'",
      },
      {
        id: "q3",
        question: "How much does the coffee cost?",
        options: ["$3.50", "$4.50", "$5.50", "$6.50"],
        correctAnswer: 1,
        explanation: "The barista says 'That's $4.50.'",
      },
    ],
    vocabulary: [
      { word: "Cappuccino", meaning: "A coffee drink made with espresso and steamed milk" },
      { word: "Barista", meaning: "A person who makes and serves coffee" },
      { word: "Keep the change", meaning: "Tell someone to keep the extra money as a tip" },
    ],
  },
  {
    id: "hotel-reservation",
    title: "Making a Hotel Reservation",
    level: "A2",
    topic: "Travel",
    emoji: "🏨",
    duration: "~2 min",
    audioSrc: "/audio/hotel-reservation.mp3",
    imageSrc: "/audio/scene-hotel-reservation.webp",
    transcript: `Receptionist: Good morning! Welcome to the Grand Hotel. How can I help you?
Guest: Hi, I'd like to make a reservation for next week.
Receptionist: Of course! What dates would you like to stay?
Guest: From Monday to Wednesday. That's three nights.
Receptionist: Perfect! What type of room would you prefer? We have single, double, or suite rooms.
Guest: I'd like a double room with a view of the city, please.
Receptionist: Excellent choice! We have a beautiful double room on the 5th floor with a city view. The rate is $150 per night.
Guest: That sounds great. What's included in the room?
Receptionist: The room includes free Wi-Fi, a flat-screen TV, air conditioning, and complimentary breakfast.
Guest: Perfect! I'll take it. What's your cancellation policy?
Receptionist: You can cancel up to 48 hours before your arrival without any charge.
Guest: Great! Here's my credit card.`,
    questions: [
      {
        id: "q1",
        question: "How many nights does the guest want to stay?",
        options: ["One night", "Two nights", "Three nights", "Four nights"],
        correctAnswer: 2,
        explanation: "The guest says 'From Monday to Wednesday. That's three nights.'",
      },
      {
        id: "q2",
        question: "What is the price per night?",
        options: ["$100", "$125", "$150", "$175"],
        correctAnswer: 2,
        explanation: "The receptionist states 'The rate is $150 per night.'",
      },
      {
        id: "q3",
        question: "What is NOT included in the room?",
        options: ["Wi-Fi", "Breakfast", "Parking", "TV"],
        correctAnswer: 2,
        explanation: "Wi-Fi, TV, air conditioning, and breakfast are mentioned — but not parking.",
      },
      {
        id: "q4",
        question: "What is the cancellation policy?",
        options: [
          "Cancel anytime",
          "Cancel up to 24 hours before",
          "Cancel up to 48 hours before",
          "No cancellations allowed",
        ],
        correctAnswer: 2,
        explanation: "'You can cancel up to 48 hours before your arrival without any charge.'",
      },
    ],
    vocabulary: [
      { word: "Reservation", meaning: "A booking made in advance" },
      { word: "Suite", meaning: "A set of luxurious hotel rooms" },
      { word: "Complimentary", meaning: "Given free of charge" },
      { word: "Cancellation policy", meaning: "The rules about canceling a booking" },
    ],
  },
  {
    id: "job-interview",
    title: "Job Interview Conversation",
    level: "B1",
    topic: "Work & Career",
    emoji: "💼",
    duration: "~3 min",
    audioSrc: "/audio/job-interview.mp3",
    imageSrc: "/audio/scene-job-interview.webp",
    transcript: `Interviewer: Good morning! Thank you for coming in today. I'm Sarah, the HR manager. How are you?
Candidate: Good morning! I'm doing well, thank you for having me.
Interviewer: Great! Can you tell me about your previous work experience?
Candidate: Of course. I've worked in marketing for five years. My most recent position was as a Marketing Coordinator at Tech Solutions Inc.
Interviewer: That's impressive! What were your main responsibilities?
Candidate: I was responsible for managing social media campaigns, creating content, and analyzing market trends. I also collaborated with the sales team to develop marketing strategies.
Interviewer: Excellent! Why are you interested in this position?
Candidate: I'm very interested because your company is known for innovation and creativity. I believe my skills in digital marketing align well with your needs.
Interviewer: What are your strengths?
Candidate: I'm a quick learner, detail-oriented, and I work well in teams. I'm also proficient in various marketing tools and software.
Interviewer: And what areas would you like to improve?
Candidate: I'd like to develop my leadership skills further. I'm currently taking courses in project management.
Interviewer: That's admirable! Do you have any questions for me?
Candidate: Yes, could you tell me more about the team I'd be working with?`,
    questions: [
      {
        id: "q1",
        question: "How many years of experience does the candidate have in marketing?",
        options: ["Two years", "Three years", "Five years", "Seven years"],
        correctAnswer: 2,
        explanation: "The candidate states 'I've worked in marketing for five years.'",
      },
      {
        id: "q2",
        question: "What was the candidate's most recent job title?",
        options: ["Marketing Manager", "Marketing Coordinator", "Marketing Director", "Social Media Manager"],
        correctAnswer: 1,
        explanation: "'My most recent position was as a Marketing Coordinator at Tech Solutions Inc.'",
      },
      {
        id: "q3",
        question: "Which is NOT mentioned as a responsibility?",
        options: ["Managing social media", "Creating content", "Analyzing market trends", "Managing finances"],
        correctAnswer: 3,
        explanation: "Social media, content, and market trends are mentioned — but not managing finances.",
      },
      {
        id: "q4",
        question: "What area does the candidate want to improve?",
        options: ["Digital marketing", "Social media", "Leadership skills", "Communication"],
        correctAnswer: 2,
        explanation: "'I'd like to develop my leadership skills further.'",
      },
    ],
    vocabulary: [
      { word: "HR manager", meaning: "Human Resources manager who handles hiring" },
      { word: "Proficient", meaning: "Competent or skilled in doing something" },
      { word: "Detail-oriented", meaning: "Paying careful attention to small details" },
      { word: "Align", meaning: "To match or correspond with something" },
    ],
  },
  {
    id: "travel-plans",
    title: "Planning a Vacation",
    level: "B2",
    topic: "Travel & Leisure",
    emoji: "✈️",
    duration: "~2.5 min",
    audioSrc: "/audio/travel-plans.mp3",
    imageSrc: "/audio/scene-travel-plans.webp",
    transcript: `Friend 1: I'm thinking about taking a vacation next month. Do you have any suggestions?
Friend 2: That's exciting! Where are you thinking of going?
Friend 1: I'm considering either Thailand or Portugal. I want somewhere warm with beautiful beaches.
Friend 2: Both are amazing! Thailand is known for its tropical climate, stunning islands, and affordable prices. Plus, the food is incredible.
Friend 1: That sounds great! What about Portugal?
Friend 2: Portugal is wonderful too. It has beautiful coastal towns, rich history, and excellent wine. The weather is pleasant, and it's less crowded than Thailand.
Friend 1: How long would you recommend staying?
Friend 2: For Thailand, I'd suggest at least two weeks to explore different islands and cities. For Portugal, one to two weeks is ideal.
Friend 1: What about the best time to visit?
Friend 2: Thailand is best from November to February when it's dry and cool. Portugal is lovely year-round, but spring and fall are particularly nice.
Friend 1: Thanks for the advice! I think I'll go with Thailand. Can you recommend some specific places?
Friend 2: Absolutely! I'd definitely visit Bangkok, Phuket, and the Phi Phi Islands. And don't miss the night markets for authentic food!`,
    questions: [
      {
        id: "q1",
        question: "What are the two destinations being considered?",
        options: ["Thailand and Vietnam", "Thailand and Portugal", "Portugal and Spain", "Thailand and Greece"],
        correctAnswer: 1,
        explanation: "'I'm considering either Thailand or Portugal.'",
      },
      {
        id: "q2",
        question: "How long does Friend 2 recommend for Thailand?",
        options: ["One week", "One to two weeks", "At least two weeks", "Three weeks"],
        correctAnswer: 2,
        explanation: "'For Thailand, I'd suggest at least two weeks.'",
      },
      {
        id: "q3",
        question: "What is the best time to visit Thailand?",
        options: ["March to May", "June to August", "November to February", "September to October"],
        correctAnswer: 2,
        explanation: "'Thailand is best from November to February when it's dry and cool.'",
      },
      {
        id: "q4",
        question: "Which destination does Friend 1 choose?",
        options: ["Portugal", "Thailand", "Both equally", "Neither"],
        correctAnswer: 1,
        explanation: "'I think I'll go with Thailand.'",
      },
    ],
    vocabulary: [
      { word: "Tropical", meaning: "Relating to warm regions near the equator" },
      { word: "Coastal", meaning: "Located near or along the coast" },
      { word: "Authentic", meaning: "Genuine or real" },
      { word: "Crowded", meaning: "Filled with many people" },
    ],
  },

  // ── Exercise 5: At the Doctor's Office (A2) ──────────────────────────────────
  {
    id: "doctor-visit",
    title: "At the Doctor's Office",
    level: "A2",
    topic: "Health",
    emoji: "🏥",
    duration: "~3 min",
    audioSrc: "/audio/doctor-visit.mp3",
    imageSrc: "/audio/scene-doctor-visit.webp",
    transcript: `Doctor: Good morning! I'm Dr. Carter. What brings you in today?
Patient: Good morning, Doctor. I've had a sore throat and a headache for the past three days.
Doctor: I see. Have you had a fever?
Patient: Yes, a mild one. Around 37.8 degrees.
Doctor: Any coughing or difficulty swallowing?
Patient: A little coughing, yes. And swallowing is slightly painful.
Doctor: Let me take a look. Open your mouth and say 'ah', please.
Patient: Ahh.
Doctor: Your throat is a bit red. It looks like a mild throat infection. I'll prescribe some antibiotics and a throat spray.
Patient: Should I stay home from work?
Doctor: I'd recommend resting for two days. Drink plenty of fluids and avoid cold drinks. Come back if you don't feel better in five days.
Patient: Thank you, Doctor. How many times a day should I take the antibiotics?
Doctor: Twice a day — once in the morning and once in the evening, after meals. Do you have any allergies to medication?
Patient: No, none that I know of.
Doctor: Perfect. Take care and feel better soon!`,
    questions: [
      {
        id: "dq1",
        question: "How long has the patient had symptoms?",
        options: ["One day", "Two days", "Three days", "A week"],
        correctAnswer: 2,
        explanation: "The patient says 'I've had a sore throat and a headache for the past three days.'",
      },
      {
        id: "dq2",
        question: "What does the doctor prescribe?",
        options: ["Vitamins and rest", "Antibiotics and a throat spray", "Painkillers and cough syrup", "Only rest and fluids"],
        correctAnswer: 1,
        explanation: "The doctor says 'I'll prescribe some antibiotics and a throat spray.'",
      },
      {
        id: "dq3",
        question: "How many times a day should the patient take the antibiotics?",
        options: ["Once a day", "Twice a day", "Three times a day", "Four times a day"],
        correctAnswer: 1,
        explanation: "The doctor says 'Twice a day — once in the morning and once in the evening.'",
      },
      {
        id: "dq4",
        question: "When should the patient return if not better?",
        options: ["After two days", "After three days", "After five days", "After one week"],
        correctAnswer: 2,
        explanation: "The doctor says 'Come back if you don't feel better in five days.'",
      },
    ],
    vocabulary: [
      { word: "Prescription", meaning: "A doctor's written instruction to get medicine" },
      { word: "Antibiotics", meaning: "Medicine that kills bacteria and treats infections" },
      { word: "Symptoms", meaning: "Signs of illness, like a fever or sore throat" },
      { word: "Fluids", meaning: "Liquids — water, juice, soup — important when sick" },
    ],
  },

  // ── Exercise 6: Renting an Apartment (B1) ────────────────────────────────────
  {
    id: "renting-apartment",
    title: "Renting an Apartment",
    level: "B1",
    topic: "Housing",
    emoji: "🏠",
    duration: "~3 min",
    audioSrc: "/audio/renting-apartment.mp3",
    imageSrc: "/audio/scene-renting-apartment.webp",
    transcript: `Caller: Hi, I'm calling about the apartment you have listed online. Is it still available?
Agent: Yes, it is! It's a two-bedroom apartment on the fourth floor. Would you like to arrange a viewing?
Caller: Absolutely. Can you tell me a bit more about it first? What's the monthly rent?
Agent: It's 4,500 dirhams per month, utilities not included. The apartment is fully furnished with a modern kitchen and two bathrooms.
Caller: That sounds good. Is there parking available?
Agent: Yes, there's one covered parking space included in the rent. The building also has a lift and a security guard.
Caller: Great. What's the minimum lease period?
Agent: We require a minimum of six months. There's also a two-month security deposit required upfront.
Caller: I see. Is the neighbourhood quiet? I work from home and need a calm environment.
Agent: It's a very quiet residential area. Most neighbours are professionals or families. There's also a supermarket and a pharmacy just five minutes away on foot.
Caller: That's perfect. When can I come to see it?
Agent: How about tomorrow afternoon at four o'clock?
Caller: That works for me. I'll see you then. Thank you!
Agent: See you tomorrow. Don't forget to bring your ID and a recent pay slip if you have one.`,
    questions: [
      {
        id: "rq1",
        question: "What is the monthly rent for the apartment?",
        options: ["3,500 dirhams", "4,000 dirhams", "4,500 dirhams", "5,000 dirhams"],
        correctAnswer: 2,
        explanation: "The agent says 'It's 4,500 dirhams per month.'",
      },
      {
        id: "rq2",
        question: "What is included in the rent?",
        options: ["Utilities", "Covered parking", "Furniture and utilities", "A gym membership"],
        correctAnswer: 1,
        explanation: "The agent says 'there's one covered parking space included in the rent.'",
      },
      {
        id: "rq3",
        question: "What is the minimum lease period?",
        options: ["Three months", "Four months", "Six months", "One year"],
        correctAnswer: 2,
        explanation: "The agent says 'We require a minimum of six months.'",
      },
      {
        id: "rq4",
        question: "What should the caller bring to the viewing?",
        options: ["A bank statement", "ID and a recent pay slip", "References from previous landlord", "A deposit cheque"],
        correctAnswer: 1,
        explanation: "The agent says 'Don't forget to bring your ID and a recent pay slip.'",
      },
    ],
    vocabulary: [
      { word: "Lease", meaning: "A rental agreement for a fixed period of time" },
      { word: "Security deposit", meaning: "Money paid upfront to cover any damage — returned when you leave" },
      { word: "Utilities", meaning: "Electricity, water, and gas bills" },
      { word: "Residential area", meaning: "A neighbourhood where people live, not a business district" },
    ],
  },

  // ── Exercise 7: Phone Call to Customer Support (A2) ───────────────────────────
  {
    id: "customer-support",
    title: "A Call to Customer Support",
    level: "A2",
    topic: "Everyday Life",
    emoji: "📞",
    duration: "~2.5 min",
    audioSrc: "/audio/customer-support.mp3",
    imageSrc: "/audio/scene-customer-support.webp",
    transcript: `Agent: Thank you for calling Bright Mobile. My name is Sarah. How can I help you today?
Customer: Hi Sarah. I'm calling because I've been charged twice for my monthly subscription this month.
Agent: I'm sorry to hear that. I'd be happy to look into that for you. Can I have your account number or the phone number linked to your account?
Customer: Sure, it's 0661 234 567.
Agent: Thank you. And can you confirm your full name and date of birth for security purposes?
Customer: Yes, it's Karim Benali, and my date of birth is the fifteenth of March, nineteen ninety.
Agent: Thank you, Karim. I can see your account here. You're right — there are two charges of 99 dirhams on the third of this month. That's definitely an error on our side.
Customer: Yes, exactly. I'd like a refund for the duplicate charge.
Agent: Of course. I'll process the refund right now. It should appear in your account within three to five business days.
Customer: Will I receive a confirmation by email?
Agent: Yes, you'll receive an email confirmation within the next hour. Is there anything else I can help you with today?
Customer: No, that's all. Thank you for sorting it out so quickly.
Agent: You're welcome, Karim. Have a great day!`,
    questions: [
      {
        id: "cq1",
        question: "Why is the customer calling?",
        options: ["To cancel his subscription", "Because he was charged twice", "To change his phone plan", "To report a lost phone"],
        correctAnswer: 1,
        explanation: "The customer says 'I've been charged twice for my monthly subscription this month.'",
      },
      {
        id: "cq2",
        question: "How much was the duplicate charge?",
        options: ["49 dirhams", "79 dirhams", "99 dirhams", "119 dirhams"],
        correctAnswer: 2,
        explanation: "The agent says 'there are two charges of 99 dirhams.'",
      },
      {
        id: "cq3",
        question: "How long will the refund take?",
        options: ["Same day", "1-2 business days", "3-5 business days", "7-10 business days"],
        correctAnswer: 2,
        explanation: "The agent says 'It should appear in your account within three to five business days.'",
      },
      {
        id: "cq4",
        question: "How will the customer receive confirmation of the refund?",
        options: ["By SMS", "By phone call", "By email", "By post"],
        correctAnswer: 2,
        explanation: "The agent says 'you'll receive an email confirmation within the next hour.'",
      },
    ],
    vocabulary: [
      { word: "Subscription", meaning: "A regular payment for a service (monthly or yearly)" },
      { word: "Duplicate charge", meaning: "Being billed twice for the same thing by mistake" },
      { word: "Refund", meaning: "Money returned to you after an incorrect or cancelled payment" },
      { word: "Security purposes", meaning: "To verify your identity and protect your account" },
    ],
  },

  // ── Exercise 8: Discussing a News Article (B2) ────────────────────────────────
  {
    id: "news-discussion",
    title: "Discussing a News Article",
    level: "B2",
    topic: "Current Affairs",
    emoji: "📰",
    duration: "~3.5 min",
    audioSrc: "/audio/news-discussion.mp3",
    imageSrc: "/audio/scene-news-discussion.webp",
    transcript: `Friend 1: Did you read that article about electric cars becoming mandatory by 2035 in the EU?
Friend 2: Yes, I did! It's a big step. Personally, I think it's necessary. We can't keep relying on petrol cars if we want to meet climate targets.
Friend 1: I agree with the goal, but I'm worried about the transition. Not everyone can afford an electric car right now. They're still quite expensive.
Friend 2: That's a fair point. But the article mentioned that prices are expected to drop significantly over the next decade as battery technology improves.
Friend 1: True. And governments are offering subsidies and tax incentives to make them more accessible. But what about charging infrastructure? In rural areas, there are barely any charging stations.
Friend 2: That's probably the biggest challenge. The infrastructure needs to catch up with the policy. It would be pointless to ban petrol cars if people can't charge their electric ones conveniently.
Friend 1: Exactly. And what about countries outside the EU? If they don't follow suit, it might just shift the pollution problem elsewhere.
Friend 2: That's a global issue. But I think the EU taking a strong stance could push other major economies to follow. It happened with data privacy laws — the GDPR influenced regulations worldwide.
Friend 1: That's a good comparison. I suppose change has to start somewhere. I just hope the transition is managed fairly so that lower-income families aren't left behind.
Friend 2: Absolutely. Policy needs to be both ambitious and equitable. It'll be interesting to see how it unfolds over the next ten years.`,
    questions: [
      {
        id: "nq1",
        question: "What is the main topic of the article they are discussing?",
        options: ["Climate change in Africa", "Electric cars becoming mandatory in the EU by 2035", "Rising petrol prices in Europe", "New battery technology breakthroughs"],
        correctAnswer: 1,
        explanation: "Friend 1 asks about 'electric cars becoming mandatory by 2035 in the EU.'",
      },
      {
        id: "nq2",
        question: "What does Friend 1 identify as the biggest practical challenge?",
        options: ["The high cost of electric cars", "Lack of government support", "Charging infrastructure in rural areas", "Battery technology limitations"],
        correctAnswer: 2,
        explanation: "Friend 1 asks 'what about charging infrastructure? In rural areas, there are barely any charging stations.'",
      },
      {
        id: "nq3",
        question: "What example does Friend 2 use to argue that EU policy can influence the world?",
        options: ["The Paris Climate Agreement", "GDPR data privacy laws", "The Euro currency adoption", "EU trade agreements"],
        correctAnswer: 1,
        explanation: "Friend 2 says 'It happened with data privacy laws — the GDPR influenced regulations worldwide.'",
      },
      {
        id: "nq4",
        question: "What is Friend 1 most concerned about regarding the transition?",
        options: ["Speed of the change", "Impact on car manufacturers", "Lower-income families being left behind", "Loss of jobs in the oil industry"],
        correctAnswer: 2,
        explanation: "Friend 1 says 'I just hope the transition is managed fairly so that lower-income families aren't left behind.'",
      },
    ],
    vocabulary: [
      { word: "Mandatory", meaning: "Required by law — you must do it" },
      { word: "Infrastructure", meaning: "The basic systems a society needs — roads, power, internet, etc." },
      { word: "Subsidy", meaning: "Money given by the government to reduce the cost of something" },
      { word: "Equitable", meaning: "Fair and just — giving everyone what they need" },
    ],
  },
  // ─── B2: Academic Discussion ─────────────────────────────────────────────────
  {
    id: "academic-discussion",
    title: "University Lecture: Carbon Tax & Climate Policy",
    level: "B2",
    topic: "Academic English",
    emoji: "🎓",
    duration: "~3 min",
    audioSrc: "/audio/academic-discussion.mp3",
    imageSrc: "/audio/scene-academic-discussion.webp",
    transcript: `Professor: Good morning everyone. Today we're continuing our discussion on climate change and its economic implications. Last week we looked at the science. Today I want to focus on policy responses. Can anyone summarise the key arguments for a carbon tax?

Student: Yes, Professor. The main argument is that a carbon tax internalises the external costs of carbon emissions. Basically, it forces companies and consumers to pay the true cost of their pollution, which currently falls on society as a whole.

Professor: Excellent. And what are the counterarguments?

Student: Critics argue that a carbon tax is regressive — it hits lower-income households harder because they spend a larger proportion of their income on energy and transport. There's also the competitiveness issue: if one country imposes a carbon tax and others don't, domestic industries may be disadvantaged.

Professor: Good. So how do economists propose to address the regressivity problem?

Student: One solution is to use the revenue from the carbon tax to fund direct cash transfers to lower-income households — sometimes called a carbon dividend. This way, the poorest households actually come out ahead financially, even though they pay more for energy.

Professor: Precisely. This is the approach Canada has taken. Studies show that British Columbia's carbon tax, introduced in 2008, reduced fuel consumption by 15 percent compared to the rest of Canada, with no measurable negative impact on GDP. What does this tell us?

Student: It suggests that well-designed carbon pricing can achieve environmental goals without harming economic growth — at least in the short to medium term.`,
    questions: [
      {
        id: "adq1",
        question: "What is the main economic argument FOR a carbon tax?",
        options: [
          "It raises government revenue for public services",
          "It forces polluters to pay the true cost of their emissions",
          "It makes domestic industries more competitive globally",
          "It reduces income inequality between households",
        ],
        correctAnswer: 1,
        explanation: "The student explains that a carbon tax 'internalises the external costs of carbon emissions' — making companies pay the true cost of their pollution.",
      },
      {
        id: "adq2",
        question: "Why do critics call a carbon tax 'regressive'?",
        options: [
          "It slows economic growth",
          "It is difficult to enforce internationally",
          "It takes a larger share of income from lower-income households",
          "It does not reduce carbon emissions effectively",
        ],
        correctAnswer: 2,
        explanation: "The student says it 'hits lower-income households harder because they spend a larger proportion of their income on energy and transport.'",
      },
      {
        id: "adq3",
        question: "What is a 'carbon dividend'?",
        options: [
          "A fine paid by companies that exceed emission limits",
          "A cash transfer to lower-income households funded by carbon tax revenue",
          "A government subsidy for renewable energy companies",
          "A tax rebate for businesses that reduce their emissions",
        ],
        correctAnswer: 1,
        explanation: "The student defines it as using carbon tax revenue 'to fund direct cash transfers to lower-income households.'",
      },
      {
        id: "adq4",
        question: "What did British Columbia's carbon tax achieve, according to the professor?",
        options: [
          "A 15% increase in GDP",
          "A 15% reduction in fuel consumption with no negative GDP impact",
          "A 15% reduction in carbon emissions across Canada",
          "A 15% increase in renewable energy adoption",
        ],
        correctAnswer: 1,
        explanation: "The professor states it 'reduced fuel consumption by 15 percent compared to the rest of Canada, with no measurable negative impact on GDP.'",
      },
    ],
    vocabulary: [
      { word: "Internalise", meaning: "To include an external cost within the price of a product or activity" },
      { word: "Regressive", meaning: "A tax that takes a larger percentage of income from lower earners than higher earners" },
      { word: "Carbon dividend", meaning: "Cash payments to citizens funded by carbon tax revenue" },
      { word: "Competitiveness", meaning: "The ability of a business or country to compete effectively in the market" },
    ],
  },
  // ─── C1: Business Negotiation ───────────────────────────────────────────────
  {
    id: "business-negotiation",
    title: "Business Negotiation: Partnership Deal",
    level: "C1",
    topic: "Business English",
    emoji: "🤝",
    duration: "~3 min",
    audioSrc: "/audio/business-negotiation.mp3",
    imageSrc: "/audio/scene-business-negotiation.webp",
    transcript: `Sarah: Thank you for coming in today, Mr. Benali. We've reviewed your proposal and we're genuinely interested in moving forward with a partnership.

Mr. Benali: Thank you, Sarah. We're equally enthusiastic. We believe our logistics network in North Africa would complement your distribution capabilities in Europe very well.

Sarah: Absolutely. Now, before we get into the specifics, I want to address the revenue-sharing model you proposed. You suggested a 60-40 split in your favour. Our board feels that doesn't adequately reflect the investment we'd be making in technology and infrastructure.

Mr. Benali: I understand your concern. However, we're bringing an established client base of over 200 companies across Morocco, Algeria, and Tunisia. Building that from scratch would take your company years and significant capital.

Sarah: That's a fair point. What if we proposed a tiered model? For the first two years, we accept a 55-45 split in your favour while we build the client relationships. After year two, once our technology platform is fully integrated, we move to a 50-50 split.

Mr. Benali: That's an interesting proposal. I could accept the 55-45 for the first eighteen months, but I'd want to revisit the split at the eighteen-month mark rather than waiting two full years.

Sarah: We could work with that. I'd also want to include a performance clause — if the combined revenue exceeds our projections by more than 20 percent, we revisit the split immediately.

Mr. Benali: Agreed. That seems fair to both parties. Shall we have our legal teams draft a heads of agreement?

Sarah: Let's do that. I'll have our lawyers send over a draft by end of week.`,
    questions: [
      {
        id: "bnq1",
        question: "What revenue split did Mr. Benali originally propose?",
        options: ["50-50", "55-45 in his favour", "60-40 in his favour", "70-30 in his favour"],
        correctAnswer: 2,
        explanation: "Sarah says 'You suggested a 60-40 split in your favour.'",
      },
      {
        id: "bnq2",
        question: "What is Mr. Benali's main argument for a higher share?",
        options: [
          "His company has superior technology",
          "He is taking on more financial risk",
          "He brings an established client base of 200+ companies",
          "His logistics network is more efficient",
        ],
        correctAnswer: 2,
        explanation: "Mr. Benali says 'we're bringing an established client base of over 200 companies across Morocco, Algeria, and Tunisia.'",
      },
      {
        id: "bnq3",
        question: "What tiered model does Sarah propose?",
        options: [
          "55-45 for 1 year, then 50-50",
          "55-45 for 2 years, then 50-50",
          "60-40 for 1 year, then 55-45",
          "50-50 from the start with a performance bonus",
        ],
        correctAnswer: 1,
        explanation: "Sarah proposes '55-45 split in your favour' for the first two years, then a '50-50 split' after year two.",
      },
      {
        id: "bnq4",
        question: "What does the 'performance clause' Sarah proposes mean?",
        options: [
          "The deal is cancelled if targets are missed",
          "The split is revisited immediately if revenue exceeds projections by 20%",
          "Mr. Benali receives a bonus if he exceeds his sales targets",
          "The contract is extended automatically if performance is strong",
        ],
        correctAnswer: 1,
        explanation: "Sarah says 'if the combined revenue exceeds our projections by more than 20 percent, we revisit the split immediately.'",
      },
    ],
    vocabulary: [
      { word: "Revenue-sharing model", meaning: "An agreement on how profits or income will be divided between partners" },
      { word: "Tiered model", meaning: "A structure with different levels or stages, each with different terms" },
      { word: "Performance clause", meaning: "A contract condition that triggers a change based on results" },
      { word: "Heads of agreement", meaning: "A preliminary document outlining the key terms of a deal before the final contract" },
    ],
  },
  // ─── C1: University Presentation ───────────────────────────────────────────────
  {
    id: "university-presentation",
    title: "Academic Presentation: Social Media & Mental Health",
    level: "C1",
    topic: "Academic English",
    emoji: "📊",
    duration: "~4 min",
    audioSrc: "/audio/university-presentation.mp3",
    imageSrc: "/audio/scene-university-presentation.webp",
    transcript: `Presenter: Good afternoon. My presentation today is on the psychological impact of social media on adolescent mental health, with a specific focus on the mechanisms behind the correlation between heavy social media use and increased rates of anxiety and depression in teenagers.

I'll structure my talk in three parts: first, the current evidence base; second, the proposed psychological mechanisms; and third, the implications for policy and parental guidance.

Starting with the evidence. A landmark longitudinal study by Twenge and colleagues, published in 2018, analysed data from over half a million American adolescents and found a significant increase in depressive symptoms and suicidal ideation correlating with the rise of smartphone adoption after 2012. Crucially, the effect was stronger for girls than boys.

However, I want to be careful about causality here. Correlation does not imply causation. A competing hypothesis is that adolescents who are already anxious or depressed are more likely to use social media heavily — what researchers call a selection effect.

Moving to mechanisms. The most compelling explanation is social comparison theory. Social media platforms are optimised to show users idealised, curated versions of other people's lives. This constant upward social comparison triggers feelings of inadequacy and low self-worth.

A second mechanism is sleep disruption. Studies show that teenagers who use their phones after 10 PM sleep on average 45 minutes less per night, and sleep deprivation is one of the strongest predictors of adolescent depression.

In terms of policy implications, the evidence supports three interventions: age verification requirements for social media platforms, digital literacy education in schools, and parental guidance programmes that focus on sleep hygiene rather than blanket bans.

Audience Member: How do you account for the positive effects of social media, such as community building for marginalised groups?

Presenter: That's an excellent point. The evidence suggests a dose-response relationship — moderate use, particularly for passive consumption, is harmful, while active, community-oriented use can be beneficial.`,
    questions: [
      {
        id: "upq1",
        question: "According to the 2018 Twenge study, when did depressive symptoms among adolescents increase significantly?",
        options: [
          "After the introduction of Facebook in 2004",
          "After the rise of smartphone adoption after 2012",
          "After the COVID-19 pandemic in 2020",
          "After the launch of TikTok in 2018",
        ],
        correctAnswer: 1,
        explanation: "The presenter says the study found 'a significant increase in depressive symptoms correlating with the rise of smartphone adoption after 2012.'",
      },
      {
        id: "upq2",
        question: "What is the 'selection effect' mentioned by the presenter?",
        options: [
          "Social media algorithms select content that increases anxiety",
          "Adolescents who are already anxious are more likely to use social media heavily",
          "Social media companies select which users to target with advertising",
          "Schools select which students receive digital literacy education",
        ],
        correctAnswer: 1,
        explanation: "The presenter explains it as 'adolescents who are already anxious or depressed are more likely to use social media heavily.'",
      },
      {
        id: "upq3",
        question: "How much less sleep do teenagers who use phones after 10 PM get, on average?",
        options: ["15 minutes", "30 minutes", "45 minutes", "60 minutes"],
        correctAnswer: 2,
        explanation: "The presenter states 'teenagers who use their phones after 10 PM sleep on average 45 minutes less per night.'",
      },
      {
        id: "upq4",
        question: "According to the presenter, what type of social media use can actually be BENEFICIAL?",
        options: [
          "Passive scrolling through news feeds",
          "Watching short-form video content",
          "Active, community-oriented use",
          "Following celebrity accounts",
        ],
        correctAnswer: 2,
        explanation: "The presenter says 'active, community-oriented use can be beneficial,' contrasting it with passive consumption.",
      },
    ],
    vocabulary: [
      { word: "Longitudinal study", meaning: "Research that follows the same subjects over a long period of time" },
      { word: "Suicidal ideation", meaning: "Thoughts about or an unusual preoccupation with suicide" },
      { word: "Social comparison theory", meaning: "The idea that people determine their own worth by comparing themselves to others" },
      { word: "Dose-response relationship", meaning: "A relationship where the effect changes proportionally with the amount of exposure" },
    ],
  },
  // ─── B2: Performance Review ───────────────────────────────────────────────────
  {
    id: "performance-review",
    title: "Six-Month Performance Review",
    level: "B2",
    topic: "Business English",
    emoji: "📈",
    duration: "~3 min",
    audioSrc: "/audio/performance-review.mp3",
    imageSrc: "/audio/scene-performance-review.webp",
    transcript: `Manager: Come in, Youssef. Thanks for making time. As you know, this is your six-month performance review. Overall, I have to say the feedback has been very positive.

Youssef: Thank you. I've really enjoyed the role and I feel like I've grown a lot since joining.

Manager: It shows. Your client retention rate is 94 percent — that's 8 points above the team average. And the feedback from the Casablanca account was particularly strong. They specifically mentioned your ability to anticipate their needs before they even raise them.

Youssef: I spent a lot of time in the first two months just listening and mapping their processes. I think understanding their workflow made it much easier to add value proactively.

Manager: That's exactly the kind of strategic thinking we want to see more of. Now, I also want to be honest about one area for development. Your written reports — the monthly summaries you send to senior management — they're accurate, but they tend to be quite long. Senior managers are time-poor. They need the key insight in the first paragraph, not buried on page three.

Youssef: That's fair feedback. I think I've been trying to show all the work behind the conclusion rather than leading with the conclusion itself.

Manager: Exactly. I'd suggest looking at the Pyramid Principle — it's a communication framework that teaches you to lead with the recommendation and then provide supporting evidence.

Youssef: I'd really appreciate that. Is there anything else I should be focusing on in the next six months?

Manager: Yes. We're considering you for the senior account manager role that's opening up in Q3. To be competitive for that position, you'll need to demonstrate you can manage a small team. I'd like to give you the opportunity to mentor our two new analysts starting next month.

Youssef: That sounds like a fantastic opportunity. I'm very interested.

Manager: Good. Let's set a follow-up in three months to review how the mentoring is going.`,
    questions: [
      {
        id: "prq1",
        question: "How does Youssef's client retention rate compare to the team average?",
        options: [
          "It is 8 points below the team average",
          "It is equal to the team average",
          "It is 8 points above the team average",
          "It is 14 points above the team average",
        ],
        correctAnswer: 2,
        explanation: "The manager says 'Your client retention rate is 94 percent — that's 8 points above the team average.'",
      },
      {
        id: "prq2",
        question: "What is the main criticism the manager has of Youssef's written reports?",
        options: [
          "They contain factual errors",
          "They are too short and lack detail",
          "The key insight is buried — reports are too long",
          "They are not submitted on time",
        ],
        correctAnswer: 2,
        explanation: "The manager says the reports 'tend to be quite long' and that 'the key insight' is 'buried on page three' instead of in the first paragraph.",
      },
      {
        id: "prq3",
        question: "What is the 'Pyramid Principle' the manager recommends?",
        options: [
          "A management framework for building teams",
          "A communication framework: lead with the recommendation, then provide evidence",
          "A sales technique for presenting to senior clients",
          "A time management system for busy professionals",
        ],
        correctAnswer: 1,
        explanation: "The manager describes it as 'a communication framework that teaches you to lead with the recommendation and then provide supporting evidence.'",
      },
      {
        id: "prq4",
        question: "What opportunity does the manager offer Youssef to prepare for the senior role?",
        options: [
          "Lead a client presentation in Casablanca",
          "Attend a management training course",
          "Mentor two new analysts starting next month",
          "Manage the Rabat office for three months",
        ],
        correctAnswer: 2,
        explanation: "The manager says 'I'd like to give you the opportunity to mentor our two new analysts starting next month.'",
      },
    ],
    vocabulary: [
      { word: "Client retention rate", meaning: "The percentage of clients a business keeps over a given period" },
      { word: "Proactively", meaning: "Acting in advance to deal with an expected situation, rather than waiting for it to happen" },
      { word: "Pyramid Principle", meaning: "A communication method where you state the conclusion first, then support it with evidence" },
      { word: "Mentor", meaning: "To guide and support a less experienced person in their professional development" },
    ],
  },
];

// ─── Level badge colours ───────────────────────────────────────────────────────
const levelColors: Record<string, string> = {
  A1: "bg-emerald-100 text-emerald-800 border-emerald-300",
  A2: "bg-green-100 text-green-800 border-green-300",
  B1: "bg-yellow-100 text-yellow-800 border-yellow-300",
  B2: "bg-orange-100 text-orange-800 border-orange-300",
  C1: "bg-red-100 text-red-800 border-red-300",
};

// ─── Audio Player ─────────────────────────────────────────────────────────────
function AudioPlayer({ src, title }: { src: string; title: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onLoaded = () => { setDuration(audio.duration); setLoaded(true); };
    const onTime = () => setCurrentTime(audio.currentTime);
    const onEnded = () => setPlaying(false);
    const onError = () => setError(true);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);
    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
    };
  }, [src]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) { audio.pause(); setPlaying(false); }
    else { audio.play(); setPlaying(true); }
  };

  const replay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    setPlaying(true);
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Number(e.target.value);
    setCurrentTime(Number(e.target.value));
  };

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const pct = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-5 text-white shadow-lg">
      <audio ref={audioRef} src={src} preload="auto" />
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
          <Headphones className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm truncate">{title}</p>
          <p className="text-blue-200 text-xs">
            {error ? "Audio unavailable — read the transcript below" : loaded ? `${fmt(currentTime)} / ${fmt(duration)}` : "Loading audio..."}
          </p>
        </div>
      </div>

      {!error && (
        <>
          {/* Progress bar */}
          <div className="relative mb-3">
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all"
                style={{ width: `${pct}%` }}
              />
            </div>
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={seek}
              className="absolute inset-0 w-full opacity-0 cursor-pointer h-2"
            />
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 justify-center">
            <button
              onClick={replay}
              className="w-9 h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              title="Replay from start"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={togglePlay}
              className="w-14 h-14 bg-white text-blue-700 hover:bg-blue-50 rounded-full flex items-center justify-center shadow-lg transition-colors"
            >
              {playing
                ? <Pause className="w-6 h-6" />
                : <Play className="w-6 h-6 ml-0.5" />}
            </button>
            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
              <Volume2 className="w-4 h-4" />
            </div>
          </div>

          <p className="text-center text-blue-200 text-xs mt-3">
            💡 Tip: Listen once without reading, then check the transcript.
          </p>
        </>
      )}

      {error && (
        <p className="text-center text-blue-200 text-sm">
          📖 Read the transcript below to follow the conversation.
        </p>
      )}
    </div>
  );
}

// ─── Vocabulary Flashcard ─────────────────────────────────────────────────────
function VocabCard({ word, meaning }: VocabItem) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="cursor-pointer select-none"
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`rounded-xl p-4 border-2 transition-all min-h-[80px] flex flex-col justify-center ${flipped ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-200 hover:border-blue-400"}`}>
        {flipped ? (
          <p className="text-sm text-center">{meaning}</p>
        ) : (
          <p className="font-bold text-center text-gray-900">{word}</p>
        )}
        <p className={`text-xs text-center mt-1 ${flipped ? "text-blue-200" : "text-gray-400"}`}>
          {flipped ? "← tap to flip back" : "tap to see meaning →"}
        </p>
      </div>
    </div>
  );
}

// ─── Score / CTA Panel ────────────────────────────────────────────────────────
function ResultPanel({
  score,
  total,
  exerciseTitle,
  onRetry,
  onBack,
}: {
  score: number;
  total: number;
  exerciseTitle: string;
  onRetry: () => void;
  onBack: () => void;
}) {
  const pct = Math.round((score / total) * 100);
  const perfect = score === total;
  const good = pct >= 60;

  const messages = perfect
    ? { emoji: "🏆", title: "Perfect Score!", subtitle: "You nailed every question. Your listening skills are excellent!" }
    : good
    ? { emoji: "🎉", title: "Well Done!", subtitle: "Great listening! A few more practice sessions and you'll be perfect." }
    : { emoji: "💪", title: "Keep Going!", subtitle: "Don't worry — every listen makes you better. Try again!" };

  return (
    <div className="space-y-6">
      {/* Score card */}
      <div className={`rounded-2xl p-8 text-center border-2 ${perfect ? "bg-yellow-50 border-yellow-400" : good ? "bg-green-50 border-green-400" : "bg-blue-50 border-blue-400"}`}>
        <div className="text-6xl mb-3">{messages.emoji}</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-1">{messages.title}</h3>
        <p className="text-gray-600 mb-4">{messages.subtitle}</p>
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-sm border">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <span className="text-2xl font-extrabold text-gray-900">{score} / {total}</span>
          <span className="text-gray-400 text-sm">({pct}%)</span>
        </div>
        {/* Star rating */}
        <div className="flex justify-center gap-1 mt-4">
          {[1, 2, 3].map((star) => (
            <Star
              key={star}
              className={`w-7 h-7 ${star <= Math.ceil((score / total) * 3) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button onClick={onRetry} variant="outline" className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50">
          <RotateCcw className="w-4 h-4 mr-2" />
          Try Again
        </Button>
        <Button onClick={onBack} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
          <ArrowRight className="w-4 h-4 mr-2" />
          Next Exercise
        </Button>
      </div>

      {/* Motivational CTA */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-6 text-white text-center shadow-xl">
        <div className="text-3xl mb-2">🎯</div>
        <h3 className="text-xl font-bold mb-2">
          You just practised real English — imagine doing this every day with a coach!
        </h3>
        <p className="text-blue-200 text-sm mb-5">
          Mr. Ibrahim builds personalised lessons around exactly the topics you need — whether it's IELTS, business English, or everyday conversation. One session is all it takes to feel the difference.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%20just%20finished%20a%20listening%20exercise%20on%20Fluentry%20and%20I%27d%20like%20to%20book%20a%20lesson!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-5 rounded-xl shadow-lg w-full sm:w-auto">
              <MessageCircle className="w-5 h-5 mr-2" />
              Book a Free Consultation Call
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
          <Button
            size="lg"
            variant="outline"
            onClick={onBack}
            className="border-white text-white hover:bg-blue-800 px-6 py-5 rounded-xl w-full sm:w-auto"
          >
            <Zap className="w-4 h-4 mr-2" />
            Practice More
          </Button>
        </div>
        <p className="text-blue-300 text-xs mt-4">
          ✅ Free 10-min call · ✅ No commitment · ✅ Results guaranteed
        </p>
      </div>
    </div>
  );
}

// ─── Exercise Detail View ─────────────────────────────────────────────────────
function ExerciseView({ exercise, onBack }: { exercise: Exercise; onBack: () => void }) {
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [answered, setAnswered] = useState(false);

  const score = exercise.questions.filter(
    (q) => userAnswers[q.id] === q.correctAnswer
  ).length;

  const allAnswered = exercise.questions.every((q) => userAnswers[q.id] !== undefined);

  const handleSelect = (qId: string, idx: number) => {
    if (showResults) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: idx }));
  };

  const handleSubmit = () => setShowResults(true);

  const handleRetry = () => {
    setUserAnswers({});
    setShowResults(false);
    setShowTranscript(false);
  };

  return (
    <div className="space-y-6">
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
      >
        ← Back to Exercises
      </button>

      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="text-4xl">{exercise.emoji}</div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <Badge className={`${levelColors[exercise.level]} border text-xs font-bold`}>
              {exercise.level}
            </Badge>
            <Badge variant="outline" className="text-xs">{exercise.topic}</Badge>
            <span className="text-gray-400 text-xs">{exercise.duration}</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">{exercise.title}</h2>
        </div>
      </div>

      {/* Scene Image */}
      <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
        <img loading="lazy"
          src={exercise.imageSrc}
          alt={`Scene: ${exercise.title}`}
          className="w-full h-48 md:h-64 object-cover"
        />
      </div>

      {/* Audio Player */}
      <AudioPlayer src={exercise.audioSrc} title={exercise.title} />

      {/* Transcript toggle */}
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <button
          onClick={() => setShowTranscript(!showTranscript)}
          className="w-full flex items-center justify-between px-5 py-4 bg-gray-50 hover:bg-gray-100 transition-colors font-semibold text-gray-700 text-sm"
        >
          <span className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-600" />
            {showTranscript ? "Hide Transcript" : "Show Transcript"}
          </span>
          {showTranscript ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {showTranscript && (
          <div className="px-5 py-4 bg-white space-y-2 max-h-64 overflow-y-auto">
            {exercise.transcript.split("\n").map((line, i) => {
              const [speaker, ...rest] = line.split(":");
              return (
                <p key={i} className="text-sm text-gray-700">
                  <span className="font-semibold text-blue-700">{speaker}:</span>
                  {rest.join(":")}
                </p>
              );
            })}
          </div>
        )}
      </div>

      {/* Vocabulary flashcards */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span className="text-lg">📚</span> Key Vocabulary
          <span className="text-xs font-normal text-gray-400">(tap each card to see the meaning)</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {exercise.vocabulary.map((v, i) => (
            <VocabCard key={i} word={v.word} meaning={v.meaning} />
          ))}
        </div>
      </div>

      {/* Questions */}
      {!showResults ? (
        <div>
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-lg">🧠</span> Comprehension Questions
            <span className="text-xs font-normal text-gray-400">
              ({Object.keys(userAnswers).length}/{exercise.questions.length} answered)
            </span>
          </h3>
          <div className="space-y-5">
            {exercise.questions.map((q, qIdx) => (
              <div key={q.id} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <p className="font-semibold text-gray-900 mb-3 text-sm">
                  {qIdx + 1}. {q.question}
                </p>
                <div className="space-y-2">
                  {q.options.map((opt, optIdx) => {
                    const selected = userAnswers[q.id] === optIdx;
                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelect(q.id, optIdx)}
                        className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg border-2 transition-all text-sm font-medium ${
                          selected
                            ? "border-blue-600 bg-blue-50 text-blue-900"
                            : "border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 text-gray-700"
                        }`}
                      >
                        <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-xs font-bold ${selected ? "border-blue-600 bg-blue-600 text-white" : "border-gray-300 text-gray-400"}`}>
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <Button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-6 text-base font-bold rounded-xl disabled:opacity-50"
          >
            {allAnswered ? "✅ Submit Answers" : `Answer all ${exercise.questions.length} questions to submit`}
          </Button>
        </div>
      ) : (
        <div>
          {/* Show answered questions with feedback */}
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-lg">📝</span> Your Answers
          </h3>
          <div className="space-y-4 mb-6">
            {exercise.questions.map((q, qIdx) => {
              const userAns = userAnswers[q.id];
              const correct = userAns === q.correctAnswer;
              return (
                <div key={q.id} className={`rounded-xl p-5 border-2 ${correct ? "bg-green-50 border-green-400" : "bg-red-50 border-red-400"}`}>
                  <div className="flex items-start gap-3 mb-3">
                    {correct
                      ? <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      : <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />}
                    <p className="font-semibold text-gray-900 text-sm">{qIdx + 1}. {q.question}</p>
                  </div>
                  <div className="space-y-1.5 ml-8">
                    {q.options.map((opt, optIdx) => {
                      const isCorrect = optIdx === q.correctAnswer;
                      const isUser = optIdx === userAns;
                      return (
                        <div
                          key={optIdx}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                            isCorrect ? "bg-green-100 text-green-800 font-semibold" :
                            isUser && !isCorrect ? "bg-red-100 text-red-700 line-through" :
                            "text-gray-500"
                          }`}
                        >
                          <span className="font-bold">{String.fromCharCode(65 + optIdx)}.</span>
                          {opt}
                          {isCorrect && <CheckCircle className="w-4 h-4 text-green-600 ml-auto" />}
                        </div>
                      );
                    })}
                  </div>
                  <div className="ml-8 mt-3 p-3 bg-white/70 rounded-lg border border-blue-200">
                    <p className="text-xs text-blue-800">
                      <span className="font-bold">💡 Explanation:</span> {q.explanation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <ResultPanel
            score={score}
            total={exercise.questions.length}
            exerciseTitle={exercise.title}
            onRetry={handleRetry}
            onBack={onBack}
          />
        </div>
      )}
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function ListeningPractice() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = exercises.find((e) => e.id === selectedId);

  if (selected) {
    return <ExerciseView exercise={selected} onBack={() => setSelectedId(null)} />;
  }

  return (
    <div className="space-y-8">
      {/* Preload all audio + images in background so they're instant when clicked */}
      <div className="hidden" aria-hidden="true">
        {exercises.map((ex) => (
          <span key={ex.id}>
            <audio src={ex.audioSrc} preload="auto" />
            <img loading="lazy" src={ex.imageSrc} alt="English coaching session with Fluentry in Morocco" />
          </span>
        ))}
      </div>

      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          <Headphones className="w-4 h-4" />
          8 Real Conversations · All Levels
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Listening Practice</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Listen to real English conversations, build your vocabulary, and test your comprehension. Pick a topic and level to get started.
        </p>
      </div>

      {/* Exercise cards */}
      <div className="grid md:grid-cols-2 gap-5">
        {exercises.map((ex) => (
          <button
            key={ex.id}
            onClick={() => setSelectedId(ex.id)}
            className="text-left bg-white border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg rounded-2xl p-5 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl group-hover:scale-110 transition-transform">{ex.emoji}</div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge className={`${levelColors[ex.level]} border text-xs font-bold`}>{ex.level}</Badge>
                  <span className="text-xs text-gray-400">{ex.topic}</span>
                  <span className="text-xs text-gray-400">· {ex.duration}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{ex.title}</h3>
                <p className="text-gray-500 text-xs">
                  {ex.questions.length} questions · vocabulary flashcards · audio included
                </p>
              </div>
              <div className="w-9 h-9 bg-blue-100 group-hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors flex-shrink-0">
                <Play className="w-4 h-4 text-blue-600 group-hover:text-white ml-0.5" />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 text-center">
        <p className="font-bold text-gray-900 mb-1">Want to practise speaking too?</p>
        <p className="text-gray-500 text-sm mb-4">
          These exercises train your ear. A 1-on-1 session with Mr. Ibrahim trains your mouth — the part that matters most.
        </p>
        <a
          href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27ve%20been%20using%20the%20free%20resources%20on%20Fluentry%20and%20I%27d%20like%20to%20book%20a%20lesson!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl shadow-md">
            <MessageCircle className="w-4 h-4 mr-2" />
            Book a Free Consultation Call
          </Button>
        </a>
      </div>
    </div>
  );
}
