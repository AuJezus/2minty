import { HomeSection } from "@/components/ui/home-section";
import { LinkChevron } from "@/components/ui/link-chevron";
import { registerFormUrl } from "@/config/config";
import { ArrowBigRight, ArrowBigRightDash } from "lucide-react";
import Image from "next/image";

const processSteps = [
  {
    icon: ArrowBigRightDash,
    title: "Prisijunk ir išsirink laiką",
    description:
      "Užpildyk formą, suderinsime patogų grafiką ir gausi nuorodą į Google Meet. Pirmoji įžanginė - nemokama.",
    url: registerFormUrl,
  },
  {
    icon: ArrowBigRight,
    title: "Pirma pamoka online",
    description:
      "Susipažįstame per Google Meet, įsivertiname lygį ir startuojame nuo svarbiausių temų. Aiškiai ir patogiai iš namų.",
  },
  {
    illustration: "/images/online-lessons.png",
    title: "Mokomės kaip prie lentos",
    subheading: "Vizualus aiškinimas",
    description:
      "Naudojame skaitmeninę “lentą” (rašymo/drawing įrankius) - braižome, sprendžiame ir aiškiname taip, lyg būtum klasėje.",
  },
];

export function OnlineLessonsSection() {
  return (
    <HomeSection id="online-lessons" className="bg-background text-foreground">
      <h2 className="font-base mb-4 font-semibold">Online pamokos</h2>

      <h3 className="font-bree mb-6 text-5xl">
        Paprasta pradėti, aišku mokytis
      </h3>

      <p className="mb-20">
        Registracija, pirma pamoka ir skaitmeninė „lenta“ - viskas tavo tempu.
      </p>

      <div className="flex items-stretch justify-evenly gap-8">
        {processSteps.slice(0, 2).map((step) => {
          const IconComponent = step.icon;
          return (
            <div
              key={step.title}
              className="bg-card text-card-foreground w-1/4 rounded-2xl px-6 py-10"
            >
              {IconComponent && <IconComponent className="mb-4 size-10" />}

              <h4 className="font-bree mb-2 text-3xl">{step.title}</h4>

              <p className="mb-6 text-base">{step.description}</p>

              {step.url && (
                <LinkChevron href={step.url}>Registruotis</LinkChevron>
              )}
            </div>
          );
        })}

        {processSteps.slice(2).map((step) => (
          <div
            key={step.title}
            className="flex w-1/2 overflow-hidden rounded-2xl"
          >
            {step.illustration && (
              <div className="relative w-full">
                <Image
                  src={step.illustration}
                  alt={step.title}
                  fill
                  objectFit="cover"
                />
              </div>
            )}

            <div className="bg-card text-card-foreground flex w-full items-center px-6 py-8">
              <div>
                <h5 className="font-base mb-2 font-semibold">
                  {step.subheading}
                </h5>

                <h4 className="font-bree mb-2 text-3xl">{step.title}</h4>

                <p className="text-base">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </HomeSection>
  );
}
