import { HomeSection } from "@/components/ui/home-section";
import { DynamicDescription } from "@/components/ui/dynamic-description";
import Image from "next/image";
import { Typography } from "../../ui/typography";

const teamMembers = [
  {
    name: "Ūla Č.",
    imageSrc: "/images/team-members/ula.png",
    subheading: "9-12 kl. matematikos korepetitorė",
    description:
      "Esu VU Finansų ir draudimo matematikos 2 kurso studentė. Matematiką aiškinu paprastai: trumpa teorija, pavyzdys ir tiksli praktika. Sudarau aiškų mokymosi planą, parenku užduotis pagal lygį ir po kiekvienos pamokos duodu grįžtamąjį ryšį. Tikslas - kad suprastum logiką ir jaustumeisi užtikrintai per atsiskaitymus bei egzaminus.",
  },
  {
    name: "Mantas V.",
    imageSrc: "/images/team-members/mantas.png",
    subheading: "5-9 kl. matematikos korepetitorius",
    description:
      "Studijuoju bioinžineriją ir nuo mažens myliu matematiką. Pamokose judame draugiškai ir struktūruotai: pavyzdys, praktika, patarimai. Sutvirtiname pagrindus, auginame pasitikėjimą ir po truputį kylame iki sudėtingesnių uždavinių. Tikslas - kad matematika taptų aiški ir įveikiama.",
  },
];

export function TeamSection() {
  return (
    <HomeSection id="team" className="bg-primary/40 text-primary-foreground">
      <Typography as="h2" variant="tagline" className="mb-4">
        Komanda
      </Typography>

      <Typography as="h3" variant="h2" className="mb-6">
        Susipažinkite su 2minty korepetitoriais
      </Typography>

      <Typography as="p" variant="base" className="mb-10 sm:mb-16 md:mb-20">
        Jauni, motyvuoti ir kantrūs - padedame suprasti matematiką ir pasitikėti
        savimi.
      </Typography>

      <div className="mb-6 flex flex-col items-start justify-between gap-10 sm:flex-row md:gap-8">
        {teamMembers.map((member) => (
          <div key={member.name} className="w-full">
            <div className="relative mb-4 aspect-square w-20 overflow-hidden rounded-full">
              <Image src={member.imageSrc} alt={member.name} fill />
            </div>

            <Typography as="h4" variant="lg" className="font-bold">
              {member.name}
            </Typography>
            <Typography as="p" variant="lg" className="mb-4">
              {member.subheading}
            </Typography>

            <DynamicDescription description={member.description} />
          </div>
        ))}
      </div>
    </HomeSection>
  );
}
