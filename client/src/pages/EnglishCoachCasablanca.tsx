import CityPage from "./CityPage";

export default function EnglishCoachCasablanca() {
  return (
    <CityPage
      city="Casablanca"
      cityAr="الدار البيضاء"
      cityFr="Casablanca"
      region="Grand Casablanca-Settat"
      slug="casablanca"
      description="Private 1-on-1 English coaching for students and professionals in Casablanca, Morocco. TESOL-certified Mr. Ibrahim delivers personalised sessions online via Google Meet — no commute, no classroom, just real results."
      localContext="Casablanca is Morocco's economic capital and the hub of international business, finance, logistics, and tourism. English is increasingly required for career advancement in multinationals, call centres, and the growing tech sector. Whether you need IELTS for a visa, Business English for your job, or conversational fluency for daily life — Fluentry delivers results."
      industries={[
        "Finance & banking (Attijariwafa, BMCE, CIH)",
        "Logistics & port operations (Tanger Med group)",
        "Call centres & BPO (Teleperformance, Webhelp)",
        "Hospitality & tourism (Four Seasons, Sofitel)",
        "Technology & startups (CasaTech ecosystem)",
        "International trade & import/export",
      ]}
      nearbyAreas={["Mohammedia", "Bouskoura", "Nouaceur", "Ain Sebaa", "Hay Hassani", "Anfa", "Maarif", "Ain Chock"]}
      waMsg="Hi Ibrahim, I'm in Casablanca and I'm interested in English coaching. Can we schedule a free strategy call?"
    />
  );
}
