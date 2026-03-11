import CityPage from "./CityPage";
export default function EnglishCoachFes() {
  return (
    <CityPage
      city="Fes"
      cityAr="فاس"
      cityFr="Fès"
      region="Fès-Meknès"
      slug="fes"
      description="Private 1-on-1 English coaching for students and professionals in Fes, Morocco. TESOL-certified Mr. Ibrahim delivers personalised sessions online via Google Meet — results guaranteed."
      localContext="Fes is Morocco's intellectual and cultural capital, home to the world's oldest university and a growing number of students seeking to study abroad. English is essential for university applications, IELTS exams, and the growing number of international companies setting up operations in the Fès-Meknès region. Whether you're a student aiming for a scholarship, a professional in the industrial zone, or someone preparing for immigration, Fluentry delivers real results."
      industries={[
        "University students & scholarship applicants",
        "Industrial zone professionals (automotive, aerospace)",
        "Healthcare & pharmaceutical sector",
        "Education & academic research",
        "Tourism & cultural heritage sector",
        "Government & public administration",
      ]}
      nearbyAreas={["Meknès", "Sefrou", "Bhalil", "Ain Chkef", "Ain Bida", "Oued Fes", "Saiss"]}
      waMsg="Hi Ibrahim, I'm in Fes and I'm interested in English coaching. Can we schedule a free strategy call?"
    />
  );
}
