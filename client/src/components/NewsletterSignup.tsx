import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { toast } from "sonner";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate submission - you can connect to Mailchimp API later
    setTimeout(() => {
      toast.success("Thanks for subscribing! Check your email for confirmation.");
      setEmail("");
      setIsSubmitting(false);
      
      // TODO: Connect to Mailchimp API
      // For now, you can manually add emails or integrate Mailchimp later
      console.log("Newsletter signup:", email);
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Mail className="w-8 h-8" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-3">
            Get Weekly English Tips
          </h2>
          <p className="text-blue-100 mb-6">
            Join hundreds of students receiving free English learning tips, grammar explanations, and study strategies every week.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white text-gray-900 border-0"
              disabled={isSubmitting}
            />
            <Button 
              type="submit" 
              size="lg"
              disabled={isSubmitting}
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe Free"}
            </Button>
          </form>
          
          <p className="text-sm text-blue-100 mt-4">
            No spam. Unsubscribe anytime. 100% free forever.
          </p>
        </div>
      </div>
    </div>
  );
}

