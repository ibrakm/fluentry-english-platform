import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Testimonials() {
  const { t, isRTL } = useLanguage();

  const testimonials = [
    {
      nameKey: "testimonials.1.name",
      locationKey: "testimonials.1.location",
      quoteKey: "testimonials.1.quote",
      avatar: "/avatars/fatima.png",
    },
    {
      nameKey: "testimonials.2.name",
      locationKey: "testimonials.2.location",
      quoteKey: "testimonials.2.quote",
      avatar: "/avatars/youssef.png",
    },
    {
      nameKey: "testimonials.3.name",
      locationKey: "testimonials.3.location",
      quoteKey: "testimonials.3.quote",
      avatar: "/avatars/amina.png",
    },
    {
      nameKey: "testimonials.4.name",
      locationKey: "testimonials.4.location",
      quoteKey: "testimonials.4.quote",
      avatar: "/avatars/mehdi.png",
    },
    {
      nameKey: "testimonials.5.name",
      locationKey: "testimonials.5.location",
      quoteKey: "testimonials.5.quote",
      avatar: "/avatars/salma.png",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-12 ${isRTL ? "text-right" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-white shadow-lg rounded-xl transform hover:-translate-y-2 transition-transform duration-300 flex flex-col"
            >
              <div className="flex-grow">
                <div className={`flex gap-1 mb-4 text-yellow-400 ${isRTL ? "flex-row-reverse" : ""}`}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className={`text-gray-700 italic text-lg mb-6 ${isRTL ? "text-right" : ""}`}>
                  "{t(testimonial.quoteKey)}"
                </p>
              </div>
              <div className={`flex items-center mt-auto ${isRTL ? "flex-row-reverse" : ""}`}>
                <img
                  loading="lazy"
                  src={testimonial.avatar}
                  alt={t(testimonial.nameKey)}
                  className={`w-14 h-14 rounded-full object-cover bg-gray-200 ${isRTL ? "ml-4" : "mr-4"}`}
                />
                <div className={isRTL ? "text-right" : ""}>
                  <p className="font-bold text-gray-900 text-lg">{t(testimonial.nameKey)}</p>
                  <p className="text-gray-500">{t(testimonial.locationKey)}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
