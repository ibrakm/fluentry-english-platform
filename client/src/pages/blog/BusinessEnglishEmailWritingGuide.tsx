import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export default function BusinessEnglishEmailWritingGuide() {
  return (
    <>
      <Helmet>
        <title>Business English Email Writing: Professional Templates and Tips | Fluentry</title>
        <meta name="description" content="Learn how to write professional business emails in English with templates, phrases, and examples for common workplace situations." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="bg-gradient-to-br from-blue-600 to-blue-500 text-white py-8">
          <div className="container mx-auto px-4">
            <Link href="/blog">
              <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="mb-8">
                <Badge className="mb-4">Business English</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Business English Email Writing: Professional Templates and Tips
                </h1>
                <div className="flex items-center gap-6 text-gray-600">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    December 20, 2024
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    9 min read
                  </span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-6">
                  Writing professional emails in English is essential for career success. Whether you're communicating with international clients, colleagues, or partners, these templates and tips will help you write clear, professional emails every time.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">The Structure of a Professional Email</h2>
                
                <p>Every professional email should follow this structure:</p>

                <ol className="list-decimal pl-6 space-y-3 mb-6">
                  <li><strong>Subject Line:</strong> Clear and specific</li>
                  <li><strong>Greeting:</strong> Appropriate salutation</li>
                  <li><strong>Opening:</strong> State your purpose</li>
                  <li><strong>Body:</strong> Provide details and context</li>
                  <li><strong>Closing:</strong> Call to action or next steps</li>
                  <li><strong>Sign-off:</strong> Professional closing phrase</li>
                  <li><strong>Signature:</strong> Your name and contact information</li>
                </ol>

                <h2 className="text-2xl font-bold mt-8 mb-4">Subject Lines That Get Opened</h2>
                
                <p className="font-semibold">Good subject lines are:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Specific and descriptive</li>
                  <li>Brief (under 50 characters)</li>
                  <li>Action-oriented when appropriate</li>
                  <li>Professional in tone</li>
                </ul>

                <p className="font-semibold mt-4">Examples:</p>
                <div className="bg-slate-100 p-4 rounded-lg my-4">
                  <p className="text-green-600 font-semibold mb-2">✓ Good Subject Lines:</p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• Meeting Request: Q1 Budget Review</li>
                    <li>• Follow-up: Project Proposal Discussion</li>
                    <li>• Question About Invoice #12345</li>
                    <li>• Update: Marketing Campaign Results</li>
                  </ul>
                  
                  <p className="text-red-600 font-semibold mb-2">❌ Poor Subject Lines:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Hello</li>
                    <li>• Quick question</li>
                    <li>• Important!!!</li>
                    <li>• (no subject)</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">Professional Greetings</h2>
                
                <p className="font-semibold">Formal (when you don't know the person well):</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Dear Mr. Smith,</li>
                  <li>Dear Ms. Johnson,</li>
                  <li>Dear Dr. Ahmed,</li>
                  <li>Dear Sir/Madam, (when you don't know the name)</li>
                </ul>

                <p className="font-semibold">Semi-formal (colleagues you know):</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Hello John,</li>
                  <li>Hi Sarah,</li>
                  <li>Good morning/afternoon,</li>
                </ul>

                <p className="font-semibold text-red-600">Avoid:</p>
                <ul className="list-disc pl-6 space-y-1 mb-6">
                  <li>Hey! (too casual)</li>
                  <li>Dear Sir (use "Dear Sir/Madam" or find the person's name)</li>
                  <li>To whom it may concern (outdated)</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Email Templates for Common Situations</h2>
                
                <h3 className="text-xl font-bold mt-6 mb-3">1. Requesting Information</h3>
                <div className="bg-blue-50 p-4 rounded-lg my-4 text-sm">
                  <p className="font-semibold mb-2">Subject: Request for Product Catalog</p>
                  <p className="mb-2">Dear Mr. Hassan,</p>
                  <p className="mb-2">I hope this email finds you well.</p>
                  <p className="mb-2">I am writing to request a copy of your latest product catalog. Our company is interested in exploring potential partnerships with your organization.</p>
                  <p className="mb-2">Could you please send me the catalog along with current pricing information? Additionally, I would appreciate any information about bulk order discounts.</p>
                  <p className="mb-2">Thank you for your time and assistance. I look forward to hearing from you soon.</p>
                  <p className="mb-2">Best regards,<br/>Ibrahim Khalil<br/>Procurement Manager<br/>Email: ibrahim@company.com<br/>Phone: +212 XXX XXX XXX</p>
                </div>

                <h3 className="text-xl font-bold mt-6 mb-3">2. Making an Appointment</h3>
                <div className="bg-blue-50 p-4 rounded-lg my-4 text-sm">
                  <p className="font-semibold mb-2">Subject: Meeting Request - Project Discussion</p>
                  <p className="mb-2">Dear Ms. Amrani,</p>
                  <p className="mb-2">I hope you're doing well.</p>
                  <p className="mb-2">I would like to schedule a meeting with you to discuss the upcoming marketing project. I believe a 30-minute discussion would be beneficial to align our strategies.</p>
                  <p className="mb-2">Would you be available for a meeting next week? I am flexible with timing and can adjust to your schedule. Here are some options:</p>
                  <ul className="list-disc pl-6 mb-2">
                    <li>Tuesday, January 15th at 10:00 AM</li>
                    <li>Wednesday, January 16th at 2:00 PM</li>
                    <li>Thursday, January 17th at 11:00 AM</li>
                  </ul>
                  <p className="mb-2">Please let me know which time works best for you, or suggest an alternative if none of these suit your schedule.</p>
                  <p className="mb-2">Looking forward to our discussion.</p>
                  <p>Best regards,<br/>Ibrahim</p>
                </div>

                <h3 className="text-xl font-bold mt-6 mb-3">3. Following Up</h3>
                <div className="bg-blue-50 p-4 rounded-lg my-4 text-sm">
                  <p className="font-semibold mb-2">Subject: Follow-up: Proposal Sent on January 5th</p>
                  <p className="mb-2">Dear Mr. Benali,</p>
                  <p className="mb-2">I hope this message finds you well.</p>
                  <p className="mb-2">I wanted to follow up on the project proposal I sent on January 5th regarding the website redesign project.</p>
                  <p className="mb-2">I understand you have a busy schedule, but I wanted to check if you had any questions or needed any additional information from our side.</p>
                  <p className="mb-2">Would it be possible to schedule a brief call this week to discuss the proposal?</p>
                  <p className="mb-2">Thank you for your consideration.</p>
                  <p>Best regards,<br/>Ibrahim Khalil</p>
                </div>

                <h3 className="text-xl font-bold mt-6 mb-3">4. Apologizing for a Mistake</h3>
                <div className="bg-blue-50 p-4 rounded-lg my-4 text-sm">
                  <p className="font-semibold mb-2">Subject: Apology for Invoice Error</p>
                  <p className="mb-2">Dear Ms. Alami,</p>
                  <p className="mb-2">I am writing to sincerely apologize for the error in the invoice we sent you yesterday.</p>
                  <p className="mb-2">We discovered that the total amount was incorrectly calculated due to a system error. Please disregard the previous invoice.</p>
                  <p className="mb-2">I have attached the corrected invoice to this email. The accurate total is 15,000 MAD, not 18,000 MAD as previously stated.</p>
                  <p className="mb-2">We deeply regret any inconvenience this may have caused and have taken steps to prevent similar errors in the future.</p>
                  <p className="mb-2">If you have any questions or concerns, please don't hesitate to contact me directly.</p>
                  <p>Sincerely,<br/>Ibrahim Khalil<br/>Accounts Manager</p>
                </div>

                <h3 className="text-xl font-bold mt-6 mb-3">5. Declining a Request Politely</h3>
                <div className="bg-blue-50 p-4 rounded-lg my-4 text-sm">
                  <p className="font-semibold mb-2">Subject: Re: Partnership Proposal</p>
                  <p className="mb-2">Dear Mr. Tazi,</p>
                  <p className="mb-2">Thank you for reaching out and for your interest in partnering with our company.</p>
                  <p className="mb-2">After careful consideration, we have decided not to move forward with this partnership opportunity at this time. This decision is based on our current strategic priorities and resource allocation.</p>
                  <p className="mb-2">We appreciate the time and effort you invested in preparing the proposal. While we cannot proceed now, we would be happy to revisit this conversation in the future should circumstances change.</p>
                  <p className="mb-2">We wish you continued success with your projects.</p>
                  <p>Best regards,<br/>Ibrahim Khalil</p>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">Useful Phrases for Business Emails</h2>
                
                <p className="font-semibold">Opening Phrases:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>I hope this email finds you well.</li>
                  <li>Thank you for your email regarding...</li>
                  <li>I am writing to inquire about...</li>
                  <li>Further to our conversation...</li>
                  <li>With reference to your email...</li>
                </ul>

                <p className="font-semibold">Requesting:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Could you please...?</li>
                  <li>I would appreciate it if you could...</li>
                  <li>Would it be possible to...?</li>
                  <li>I would be grateful if you could...</li>
                </ul>

                <p className="font-semibold">Attaching Documents:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Please find attached...</li>
                  <li>I have attached... for your review.</li>
                  <li>Attached is the document you requested.</li>
                </ul>

                <p className="font-semibold">Closing Phrases:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Please let me know if you need any further information.</li>
                  <li>I look forward to hearing from you.</li>
                  <li>Thank you for your time and consideration.</li>
                  <li>Please feel free to contact me if you have any questions.</li>
                </ul>

                <p className="font-semibold">Sign-offs:</p>
                <ul className="list-disc pl-6 space-y-1 mb-6">
                  <li><strong>Formal:</strong> Sincerely, / Yours sincerely, / Respectfully,</li>
                  <li><strong>Semi-formal:</strong> Best regards, / Kind regards, / Warm regards,</li>
                  <li><strong>Friendly professional:</strong> Best, / Thanks, / Cheers, (use with caution)</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Common Mistakes to Avoid</h2>
                
                <ol className="list-decimal pl-6 space-y-3 mb-6">
                  <li><strong>Being too casual:</strong> Avoid slang, emojis, and informal language in professional emails</li>
                  <li><strong>Writing too much:</strong> Keep emails concise and to the point</li>
                  <li><strong>Forgetting to proofread:</strong> Always check for spelling and grammar errors</li>
                  <li><strong>Using ALL CAPS:</strong> This appears aggressive or like shouting</li>
                  <li><strong>Forgetting attachments:</strong> Double-check before sending</li>
                  <li><strong>Replying to all unnecessarily:</strong> Only include people who need to see the message</li>
                  <li><strong>Being too direct:</strong> Use polite language, especially when making requests</li>
                </ol>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                  <p className="font-semibold text-blue-900 mb-2">💡 Pro Tip:</p>
                  <p className="text-blue-800">
                    Before sending any important email, read it out loud. This helps you catch awkward phrasing and ensures your tone is appropriate.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">Email Etiquette Guidelines</h2>
                
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><strong>Response time:</strong> Reply within 24 hours, even if just to acknowledge receipt</li>
                  <li><strong>Tone:</strong> Be polite, professional, and positive</li>
                  <li><strong>Length:</strong> Keep emails under 200 words when possible</li>
                  <li><strong>Formatting:</strong> Use short paragraphs and bullet points for clarity</li>
                  <li><strong>Timing:</strong> Send emails during business hours when possible</li>
                  <li><strong>Urgency:</strong> Don't mark everything as "urgent" or "high priority"</li>
                </ul>

                <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg mt-12">
                  <h3 className="text-2xl font-bold mb-4">Master Business English Communication</h3>
                  <p className="mb-6">
                    Want to improve your overall business English skills? I offer specialized coaching for professionals who need to communicate confidently in English at work.
                  </p>
                  <Link href="/book-lesson">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                      Book Your Business English Consultation
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="mt-12 p-6 bg-slate-50 rounded-lg">
                <div className="flex items-start gap-4">
                  <img 
                    src="/ibrahim-photo.jpg" 
                    alt="Mr. Ibrahim K." 
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Mr. Ibrahim K.</h3>
                    <p className="text-gray-600 mb-2">TESOL-Certified English Language Coach</p>
                    <p className="text-sm text-gray-600">
                      Helping Moroccan professionals communicate effectively in international business environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

