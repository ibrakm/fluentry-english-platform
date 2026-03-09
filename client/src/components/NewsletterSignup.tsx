import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

export function NewsletterSignup() {
  const { t, isRTL } = useLanguage();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error(t("newsletter.error"));
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      toast.success(t("newsletter.success"));
      setEmail("");
      setIsSubmitting(false);
      console.log("Newsletter signup:", email);
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-12">
      <div className="container mx-auto px-4">
        <div className={`max-w-2xl mx-auto text-center ${isRTL ? "text-right" : ""}`}>
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Mail className="w-8 h-8" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-3">
            {t("newsletter.title")}
          </h2>
          <p className="text-blue-100 mb-6">
            {t("newsletter.subtitle")}
          </p>

          <form
            onSubmit={handleSubmit}
            className={`flex flex-col sm:flex-row gap-3 max-w-md mx-auto ${isRTL ? "sm:flex-row-reverse" : ""}`}
          >
            <Input
              type="email"
              placeholder={t("newsletter.placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white text-gray-900 border-0"
              disabled={isSubmitting}
              dir="ltr"
            />
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              {isSubmitting ? t("newsletter.subscribing") : t("newsletter.button")}
            </Button>
          </form>

          <p className="text-sm text-blue-100 mt-4">
            {t("newsletter.disclaimer")}
          </p>
        </div>
      </div>
    </div>
  );
}
