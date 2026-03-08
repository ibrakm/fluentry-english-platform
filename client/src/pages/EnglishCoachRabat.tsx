import CityPage from "./CityPage";

export default function EnglishCoachRabat() {
  return (
    <CityPage
      city="Rabat"
      cityAr="الرباط"
      cityFr="Rabat"
      region="Rabat-Salé-Kénitra"
      slug="rabat"
      description="Private 1-on-1 English coaching for students, civil servants, and professionals in Rabat, Morocco. TESOL-certified Mr. Ibrahim delivers personalised sessions online via Google Meet — flexible scheduling around your work or studies."
      localContext="Rabat is Morocco's administrative capital and home to government ministries, embassies, international organisations, and Mohammed V University. English proficiency is increasingly required for civil servants, diplomats, NGO workers, and university students applying abroad. IELTS and Business English are the most in-demand programs in Rabat."
      industries={[
        "Government & public administration",
        "Embassies & diplomatic missions",
        "International NGOs & development agencies",
        "Mohammed V University & higher education",
        "Media & journalism (MAP, 2M, Radio)",
        "Healthcare & pharmaceutical sector",
      ]}
      nearbyAreas={["Salé", "Témara", "Kénitra", "Skhirat", "Harhoura", "Agdal", "Hay Riad", "Souissi"]}
      waMsg="Hi Ibrahim, I'm in Rabat and I'm interested in English coaching. Can we schedule a free strategy call?"
    />
  );
}
