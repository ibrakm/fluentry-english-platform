import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Fatima Z.",
    location: "IELTS Student, Casablanca",
    avatar: "/avatars/fatima.png",
    quote: "Ibrahim's coaching completely changed how I approach English. I went from translating every word to actually thinking in English. My IELTS score improved by 1.5 bands!",
  },
  {
    name: "Youssef B.",
    location: "Marketing Manager, Rabat",
    avatar: "/avatars/youssef.png",
    quote: "As a business professional, I needed to improve my presentation skills fast. Ibrahim's Business English course gave me the confidence to lead international meetings.",
  },
  {
    name: "Amina K.",
    location: "University Student, Tangier",
    avatar: "/avatars/amina.png",
    quote: "The free resources are amazing! The idiom guide and listening exercises helped me so much with my daily practice. It's the best place to learn English in Morocco.",
  },
  {
    name: "Mehdi L.",
    location: "Software Developer, Marrakech",
    avatar: "/avatars/mehdi.png",
    quote: "I was stuck at an intermediate level for years. The personalized 1-on-1 sessions helped me break through that plateau. I can finally communicate complex ideas clearly.",
  },
  {
    name: "Salma C.",
    location: "TOEFL Student, Fes",
    avatar: "/avatars/salma.png",
    quote: "The speaking practice was invaluable. Mr. Ibrahim is patient and knows exactly how to correct pronunciation for Arabic speakers. I scored 28/30 on the TOEFL speaking section!",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Learners Across Morocco</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Real stories and real results from students who transformed their English with Fluentry.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-white shadow-lg rounded-xl transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <div className="flex-grow">
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic text-lg mb-6">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center mt-auto">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4 object-cover bg-gray-200" />
                <div>
                  <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
