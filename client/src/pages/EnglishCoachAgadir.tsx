import CityPage from "./CityPage";
export default function EnglishCoachAgadir() {
  return (
    <CityPage
      city="Agadir"
      cityAr="أكادير"
      cityFr="Agadir"
      region="Souss-Massa"
      slug="agadir"
      description="Private 1-on-1 English coaching for students and professionals in Agadir, Morocco. TESOL-certified Mr. Ibrahim delivers personalised sessions online via Google Meet — results guaranteed."
      localContext="Agadir is Morocco's premier beach resort city and a major hub for fishing, agriculture, and tourism. The city's growing international airport and expanding hotel industry create strong demand for English-speaking professionals. With the World Cup 2030 bringing new infrastructure and visitors, English skills are increasingly the difference between a good job and a great one in Agadir's competitive hospitality and trade sectors."
      industries={[
        "Tourism & beach resort hospitality",
        "Fishing & seafood export industry",
        "Agriculture & agri-food export",
        "International airport & logistics",
        "Real estate & construction",
        "World Cup 2030 hospitality & events",
      ]}
      nearbyAreas={["Inezgane", "Ait Melloul", "Dcheira El Jihadia", "Temsia", "Biougra", "Taroudant", "Tiznit"]}
      waMsg="Hi Ibrahim, I'm in Agadir and I'm interested in English coaching. Can we schedule a free strategy call?"
    />
  );
}
