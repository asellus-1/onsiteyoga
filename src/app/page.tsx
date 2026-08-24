import { OnsiteHero } from "@/components/onsite/OnsiteHero";
import { OnsiteConcept } from "@/components/onsite/OnsiteConcept";
import { HotelProgram } from "@/components/onsite/HotelProgram";
import { WhyHotels } from "@/components/onsite/WhyHotels";
import { WhatsIncluded } from "@/components/onsite/WhatsIncluded";
import { PropertyPartnerships } from "@/components/onsite/PropertyPartnerships";
import { ComparisonTable } from "@/components/onsite/ComparisonTable";
import { HowItWorks } from "@/components/onsite/HowItWorks";
import { OnsiteFAQ } from "@/components/onsite/OnsiteFAQ";
import { OnsiteContact } from "@/components/onsite/OnsiteContact";

export default function OnsiteHomePage() {
  return (
    <main className="bg-[#FCFAF7] min-h-screen">
      <OnsiteHero />
      <OnsiteConcept />
      <HotelProgram />
      <WhyHotels />
      <WhatsIncluded />
      <PropertyPartnerships />
      <ComparisonTable />
      <HowItWorks />
      <OnsiteFAQ />
      <OnsiteContact />
    </main>
  );
}


