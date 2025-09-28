import { HomeSection } from "@/components/ui/home-section";
import { Typography } from "@/components/ui/typography";
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
      innerClassName="flex items-center justify-between gap-10 sm:gap-14 lg:gap-20 lg:flex-row flex-col-reverse"
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

      <div className="flex w-full flex-col gap-8 sm:gap-10">
        <div className="flex flex-col gap-4 sm:gap-6">
          <Typography as="h2" variant="h3">
            Jauku, aišku ir veiksminga
          </Typography>

          <Typography as="p" variant="lg">
            {`2minty pamokose deriname švelnų tempą su aiškia struktūra: trumpa
            teorija, pavyzdys, praktika ir grįžtamasis ryšys. Taip iš „neaišku"
            pereiname į „moku!".`}
          </Typography>
        </div>

        <div className="flex items-start justify-between gap-4 text-base sm:gap-8 lg:gap-4">
          {gradeLevels.map((level) => (
            <div key={level.title} className="w-full">
              <Typography as="h3" variant="h2" className="mb-6">
                {level.title}
              </Typography>

              <Typography as="p" variant="base">
                {level.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </HomeSection>
  );
}
