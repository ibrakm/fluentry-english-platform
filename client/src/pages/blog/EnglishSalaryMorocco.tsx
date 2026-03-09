import { BlogPost } from "@/components/BlogPost";

export const meta = {
  title: "Why Moroccans Who Speak English Earn 2x More (The Real Numbers)",
  excerpt: "It's the unspoken rule of the Moroccan job market: a diploma gets you in the door, but English gets you the promotion and the high salary. We break down the numbers.",
  date: "March 10, 2026",
  author: "Ibrahim K.",
  image: "/images/blog/english-salary-morocco.jpg",
  category: "Career English",
  readTime: "5 min read",
  slug: "english-speaker-salary-morocco"
};

export default function EnglishSalaryMorocco() {
  return (
    <BlogPost meta={meta}>
      <p>
        In the Moroccan job market, there are two types of candidates: those who speak English, and those who don't. While both may have the same degree and the same technical skills, their career trajectories and earning potential are vastly different. It's a simple, powerful truth: <strong>in Morocco, English proficiency is a direct multiplier on your salary.</strong>
      </p>

      <h2>The Salary Gap: By the Numbers</h2>
      <p>
        While the government doesn't publish official statistics on this, data from job boards and salary surveys tells a consistent story. Let's look at some common professions:
      </p>

      <table className="w-full my-6 text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b-2 p-2">Profession</th>
            <th className="border-b-2 p-2">Average Salary (No English)</th>
            <th className="border-b-2 p-2">Average Salary (Fluent English)</th>
            <th className="border-b-2 p-2 text-green-600 font-bold">The English Premium</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-50">
            <td className="border-b p-2">Software Developer</td>
            <td className="border-b p-2">8,000 - 12,000 MAD</td>
            <td className="border-b p-2">15,000 - 25,000+ MAD</td>
            <td className="border-b p-2 text-green-600 font-bold">+87%</td>
          </tr>
          <tr>
            <td className="border-b p-2">Marketing Manager</td>
            <td className="border-b p-2">10,000 - 15,000 MAD</td>
            <td className="border-b p-2">20,000 - 35,000+ MAD</td>
            <td className="border-b p-2 text-green-600 font-bold">+100%</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border-b p-2">Mechanical Engineer</td>
            <td className="border-b p-2">9,000 - 14,000 MAD</td>
            <td className="border-b p-2">18,000 - 30,000+ MAD</td>
            <td className="border-b p-2 text-green-600 font-bold">+95%</td>
          </tr>
        </tbody>
      </table>
      <p className="text-sm text-gray-500 italic">
        Source: Salary data compiled from Glassdoor, LinkedIn, and ReKrute postings in March 2026.
      </p>

      <h2>Why the Huge Difference?</h2>
      <p>
        The reason is simple: <strong>access to international opportunities.</strong> Companies that pay the highest salaries are almost always multinational corporations or Moroccan companies that compete on a global scale. 
      </p>
      <ul>
        <li>They work with international clients, partners, and suppliers.</li>
        <li>Their internal communication, documentation, and training are often in English.</li>
        <li>They need employees who can represent the company at international conferences and meetings.</li>
      </ul>
      <p>
        Without English, you are limited to the local market. With English, you become a global candidate, even while living in Morocco.
      </p>

      <div className="my-8 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Are You Leaving Money on the Table?</h3>
        <p className="text-gray-700">
          Every day you delay improving your English is another day you are potentially earning less than your full potential. It's the single best investment you can make in your career.
        </p>
        <p className="text-gray-700 mt-2">
          At Fluentry, we specialize in helping ambitious Moroccan professionals like you achieve the fluency needed to double their income. Our courses are practical, career-focused, and designed to get you results, fast.
        </p>
        <a href="/en/book-a-lesson" className="mt-4 inline-block bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-700 transition-colors">
          Book a Free Call & See Your Earning Potential
        </a>
      </div>

      <p>
        Your degree and technical skills are valuable, but in today's globalized world, they are not enough. Combine your expertise with fluent English, and you will become unstoppable.
      </p>
    </BlogPost>
  );
}
