import CityPage from "./CityPage";

export default function EnglishCoachTangier() {
  return (
    <CityPage
      city="Tangier"
      cityAr="طنجة"
      cityFr="Tanger"
      region="Tanger-Tétouan-Al Hoceïma"
      slug="tangier"
      description="Private 1-on-1 English coaching for students and professionals in Tangier, Morocco. TESOL-certified Mr. Ibrahim delivers personalised sessions online via Google Meet — ideal for Tangier's fast-growing international business community."
      localContext="Tangier is one of Morocco's fastest-growing cities, driven by the Tanger Med port (the largest port in Africa and the Mediterranean), a booming free trade zone, and a thriving automotive and aerospace manufacturing sector. English is the primary language of international business in Tangier's industrial zones, making it essential for career advancement in logistics, manufacturing, and trade."
      industries={[
        "Tanger Med port & logistics operations",
        "Automotive manufacturing (Renault, Stellantis)",
        "Aerospace & aeronautics (Safran, Daher)",
        "Free trade zone (TMSA) businesses",
        "Tourism & hospitality (growing sector)",
        "International trade & customs",
      ]}
      nearbyAreas={["Tétouan", "Asilah", "Larache", "Fnideq", "Martil", "M'diq", "Ksar el-Kébir"]}
      waMsg="Hi Ibrahim, I'm in Tangier and I'm interested in English coaching. Can we schedule a free strategy call?"
    />
  );
}
