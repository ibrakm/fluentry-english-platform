import CityPage from "./CityPage";
export default function EnglishCoachMarrakech() {
  return (
    <CityPage
      city="Marrakech"
      cityAr="مراكش"
      cityFr="Marrakech"
      region="Marrakech-Safi"
      slug="marrakech"
      description="Private 1-on-1 English coaching for students and professionals in Marrakech, Morocco. TESOL-certified Mr. Ibrahim delivers personalised sessions online via Google Meet — no commute, no classroom, just real results."
      localContext="Marrakech is Morocco's tourism capital and one of the fastest-growing cities for hospitality, real estate, and international business. With the World Cup 2030 and a booming luxury hotel sector, English is no longer optional — it's the language of career advancement. Whether you need English for hotel management, tourism, IELTS for a visa, or professional communication, Fluentry delivers measurable results."
      industries={[
        "Luxury hospitality & hotel management (Four Seasons, Mandarin Oriental, Mamounia)",
        "Tourism & guided excursions",
        "Real estate & property development",
        "Retail & international fashion brands",
        "Event management & MICE industry",
        "World Cup 2030 infrastructure & logistics",
      ]}
      nearbyAreas={["Guéliz", "Hivernage", "Palmeraie", "Mellah", "Agdal", "Sidi Youssef Ben Ali", "Tamansourt"]}
      waMsg="Hi Ibrahim, I'm in Marrakech and I'm interested in English coaching. Can we schedule a free strategy call?"
    />
  );
}
