import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, MessageCircle, Users, Coffee } from "lucide-react";

export default function HowToFindEnglishSpeakingPartnerMorocco() {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "How to Find an English Speaking Partner in Morocco (for Free)",
      description: "The ultimate guide to finding a language exchange partner in Morocco to practice your English speaking skills for free. Discover online platforms, local meetups, and expert tips.",
      mainHeading: "Can't Find Anyone to Practice English With? You're Not Alone.",
      intro: "One of the biggest challenges for English learners in Morocco is the lack of opportunities to practice speaking. You can study grammar for hours, but without real conversation, your progress will be slow. The good news? There are many ways to find a speaking partner, both online and in your city, for free!",
      onlinePlatforms: {
        heading: "1. Online Language Exchange Platforms",
        intro: "These websites and apps connect you with people from all over the world who want to learn your language in exchange for practicing English with you.",
        platforms: [
          { name: "Tandem", description: "A very popular app with millions of members. You can find partners for text, voice, and video chat.", link: "https://www.tandem.net" },
          { name: "HelloTalk", description: "Similar to Tandem, HelloTalk focuses on language learning through chat with native speakers.", link: "https://www.hellotalk.com" },
          { name: "MyLanguageExchange", description: "An older but still effective website for finding penpals and conversation partners.", link: "https://www.mylanguageexchange.com" },
        ],
        tip: "**Pro Tip:** Don't just say \"Hi\". Introduce yourself, mention you are from Morocco, and explain what you are looking for in a partner."
      },
      localMeetups: {
        heading: "2. Local Meetups & Language Cafes",
        intro: "If you prefer face-to-face conversation, look for language exchange events in your city. These are often held in cafes and are a great way to meet new people.",
        platforms: [
          { name: "Meetup.com", description: "Search for \"English conversation\" or \"language exchange\" groups in Casablanca, Rabat, and other big cities.", link: "https://www.meetup.com" },
          { name: "Facebook Groups", description: "Search for groups like \"English Club Casablanca\" or \"Language Exchange Morocco\".", link: "https://www.facebook.com" },
        ],
        tip: "**Don't be shy!** Everyone is there to practice and make mistakes. The atmosphere is usually very relaxed and friendly."
      },
      fluentryCommunity: {
        heading: "3. Join the Fluentry Community",
        intro: "At Fluentry, we believe in the power of community. We connect our students with each other so they can practice together in a safe and supportive environment.",
        cta: "Join a Fluentry course and get instant access to a community of motivated Moroccan learners just like you.",
      },
      ctaButton: "Explore Our Courses",
    },
    fr: {
      title: "Comment Trouver un Partenaire pour Pratiquer l'Anglais au Maroc (Gratuitement)",
      description: "Le guide ultime pour trouver un partenaire d'échange linguistique au Maroc pour pratiquer votre anglais gratuitement. Découvrez les plateformes en ligne, les rencontres locales et des conseils d'experts.",
      mainHeading: "Vous ne trouvez personne avec qui pratiquer l'anglais ? Vous n'êtes pas seul.",
      intro: "L'un des plus grands défis pour les apprenants d'anglais au Maroc est le manque d'opportunités pour pratiquer l'oral. Vous pouvez étudier la grammaire pendant des heures, mais sans conversation réelle, vos progrès seront lents. La bonne nouvelle ? Il existe de nombreuses façons de trouver un partenaire de conversation, en ligne et dans votre ville, gratuitement !",
      onlinePlatforms: {
        heading: "1. Plateformes d'échange linguistique en ligne",
        intro: "Ces sites web et applications vous mettent en relation avec des personnes du monde entier qui souhaitent apprendre votre langue en échange de la pratique de l'anglais avec vous.",
        platforms: [
          { name: "Tandem", description: "Une application très populaire avec des millions de membres. Vous pouvez trouver des partenaires pour le chat texte, vocal et vidéo.", link: "https://www.tandem.net" },
          { name: "HelloTalk", description: "Similaire à Tandem, HelloTalk se concentre sur l'apprentissage des langues par le biais de conversations avec des locuteurs natifs.", link: "https://www.hellotalk.com" },
          { name: "MyLanguageExchange", description: "Un site web plus ancien mais toujours efficace pour trouver des correspondants et des partenaires de conversation.", link: "https://www.mylanguageexchange.com" },
        ],
        tip: "**Conseil de pro :** Ne dites pas seulement \"Salut\". Présentez-vous, mentionnez que vous êtes du Maroc et expliquez ce que vous recherchez chez un partenaire."
      },
      localMeetups: {
        heading: "2. Rencontres locales et cafés linguistiques",
        intro: "Si vous préférez la conversation en face à face, recherchez des événements d'échange linguistique dans votre ville. Ils ont souvent lieu dans des cafés et sont un excellent moyen de rencontrer de nouvelles personnes.",
        platforms: [
          { name: "Meetup.com", description: "Recherchez des groupes \"English conversation\" ou \"language exchange\" à Casablanca, Rabat et dans d'autres grandes villes.", link: "https://www.meetup.com" },
          { name: "Groupes Facebook", description: "Recherchez des groupes comme \"English Club Casablanca\" ou \"Language Exchange Morocco\".", link: "https://www.facebook.com" },
        ],
        tip: "**Ne soyez pas timide !** Tout le monde est là pour pratiquer et faire des erreurs. L'ambiance est généralement très détendue et amicale."
      },
      fluentryCommunity: {
        heading: "3. Rejoignez la communauté Fluentry",
        intro: "Chez Fluentry, nous croyons au pouvoir de la communauté. Nous mettons nos étudiants en contact les uns avec les autres afin qu'ils puissent pratiquer ensemble dans un environnement sûr et favorable.",
        cta: "Rejoignez un cours Fluentry et accédez instantanément à une communauté d'apprenants marocains motivés comme vous.",
      },
      ctaButton: "Découvrez nos cours",
    },
  };

  const c = content[lang];

  return (
    <>
      <SEO title={c.title} description={c.description} />
      <div className="bg-white">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">{c.mainHeading}</h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">{c.intro}</p>
          </div>

          <div className="mt-12 space-y-10">
            {/* Online Platforms */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><MessageCircle className="w-6 h-6 mr-3 text-blue-500" />{c.onlinePlatforms.heading}</h2>
              <p className="text-gray-600 mb-6">{c.onlinePlatforms.intro}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {c.onlinePlatforms.platforms.map((p, i) => (
                  <a key={i} href={p.link} target="_blank" rel="noopener noreferrer" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="font-bold text-lg mb-2">{p.name}</h3>
                    <p className="text-sm text-gray-600">{p.description}</p>
                  </a>
                ))}
              </div>
              <p className="mt-6 text-sm text-blue-700 bg-blue-50 p-4 rounded-lg">{c.onlinePlatforms.tip}</p>
            </div>

            {/* Local Meetups */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Coffee className="w-6 h-6 mr-3 text-red-500" />{c.localMeetups.heading}</h2>
              <p className="text-gray-600 mb-6">{c.localMeetups.intro}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {c.localMeetups.platforms.map((p, i) => (
                  <a key={i} href={p.link} target="_blank" rel="noopener noreferrer" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="font-bold text-lg mb-2">{p.name}</h3>
                    <p className="text-sm text-gray-600">{p.description}</p>
                  </a>
                ))}
              </div>
              <p className="mt-6 text-sm text-red-700 bg-red-50 p-4 rounded-lg">{c.localMeetups.tip}</p>
            </div>

            {/* Fluentry Community */}
            <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 flex items-center justify-center"><Users className="w-6 h-6 mr-3" />{c.fluentryCommunity.heading}</h2>
              <p className="text-lg opacity-90 mb-6">{c.fluentryCommunity.intro}</p>
              <p className="text-lg font-semibold mb-6">{c.fluentryCommunity.cta}</p>
              <Link href={`/${lang}/courses`}>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg py-3 px-8">
                  {c.ctaButton} <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
