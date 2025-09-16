import { HomeSection } from "@/components/ui/home-section";
import Image from "next/image";

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
      <h2 className="font-base mb-4 font-semibold">Komanda</h2>

      <h3 className="font-bree mb-6 text-5xl">
        Susipažinkite su 2minty korepetitoriais
      </h3>

      <p className="mb-20">
        Jauni, motyvuoti ir kantrūs - padedame suprasti matematiką ir pasitikėti
        savimi.
      </p>

      <div className="mb-6 flex items-start justify-between gap-8">
        {teamMembers.map((member) => (
          <div key={member.name} className="w-full">
            <div className="relative mb-4 aspect-square w-20 overflow-hidden rounded-full">
              <Image src={member.imageSrc} alt={member.name} fill />
            </div>

            <h4 className="text-xl font-bold">{member.name}</h4>
            <p className="mb-4 text-lg">{member.subheading}</p>

            <p className="text-base">{member.description}</p>
          </div>
        ))}
      </div>
    </HomeSection>
  );
}
