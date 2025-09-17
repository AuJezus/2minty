import { HomeSection } from "@/components/ui/home-section";
import Image from "next/image";

const gradeLevels = [
  {
    title: "5-8 kl.",
    description:
      "Aiškiai dėliojame sąvokas, daug praktikos ir mažais žingsniais auginam pasitikėjimą.",
  },
  {
    title: "9-12 kl.",
    description: `Sisteminis planas VBE/KP: teorijos „atgaivinimas", tipinių uždavinių treniruotės ir bandomieji mini testai.`,
  },
];

export function IntroSection() {
  return (
    <HomeSection
      id="about"
      className="bg-primary/40 text-primary-foreground"
      innerClassName="flex items-center justify-between gap-20"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
        <Image
          src="/images/intro.png"
          alt="2minty"
          className="object-cover"
          priority
          fill
        />
      </div>

      <div className="flex w-full flex-col gap-10">
        <div className="flex flex-col gap-6">
          <h2 className="font-bree text-[2.75rem] leading-[1.2] tracking-[-1%]">
            Jauku, aišku ir veiksminga
          </h2>

          <p className="text-lg">
            {`2minty pamokose deriname švelnų tempą su aiškia struktūra: trumpa
            teorija, pavyzdys, praktika ir grįžtamasis ryšys. Taip iš „neaišku"
            pereiname į „moku!".`}
          </p>
        </div>

        <div className="flex items-start justify-between gap-4 text-base">
          {gradeLevels.map((level) => (
            <div key={level.title} className="w-full">
              <h3 className="font-bree mb-4 text-6xl">{level.title}</h3>
              <p>{level.description}</p>
            </div>
          ))}
        </div>
      </div>
    </HomeSection>
  );
}
