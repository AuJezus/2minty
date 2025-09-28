import { HomeSection } from "@/components/ui/home-section";
import { LinkChevron } from "@/components/ui/link-chevron";
import { registerFormUrl } from "@/config/config";
import { ArrowBigRight, ArrowBigRightDash } from "lucide-react";
import Image from "next/image";
import { Typography } from "../../ui/typography";

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
      <Typography as="h2" variant="tagline" className="mb-4">
        Online pamokos
      </Typography>

      <Typography as="h3" variant="h2" className="mb-6">
        Paprasta pradėti, aišku mokytis
      </Typography>

      <Typography
        as="p"
        variant="base"
        className="mb-10 sm:mb-12 md:mb-16 lg:mb-20"
      >
        Registracija, pirma pamoka ir skaitmeninė „lenta“ - viskas tavo tempu.
      </Typography>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:flex lg:items-stretch lg:justify-evenly">
        {processSteps.slice(0, 2).map((step) => {
          const IconComponent = step.icon;
          return (
            <div
              key={step.title}
              className="bg-card text-card-foreground w-full rounded-2xl px-4 py-8 md:px-6 md:py-10 lg:w-1/4"
            >
              {IconComponent && <IconComponent className="mb-4 size-10" />}

              <Typography as="h4" variant="h4" className="mb-2">
                {step.title}
              </Typography>

              <p className="mb-6 text-base">{step.description}</p>

              {step.url && (
                <div>
                  <LinkChevron
                    pgName="online_lesson_registration"
                    href={step.url}
                  >
                    Registruotis
                  </LinkChevron>
                </div>
              )}
            </div>
          );
        })}

        {processSteps.slice(2).map((step) => (
          <div
            key={step.title}
            className="flex w-full flex-col overflow-hidden rounded-2xl sm:col-span-2 sm:flex-row lg:w-1/2"
          >
            {step.illustration && (
              <div className="relative aspect-video w-full sm:aspect-square">
                <Image
                  src={step.illustration}
                  alt={step.title}
                  className="object-cover"
                  fill
                />
              </div>
            )}

            <div className="bg-card text-card-foreground flex w-full items-center px-4 py-6 sm:py-8 md:px-6 md:py-10">
              <div>
                <Typography as="h4" variant="tagline" className="mb-2">
                  {step.subheading}
                </Typography>

                <Typography as="h4" variant="h4" className="mb-2">
                  {step.title}
                </Typography>

                <Typography as="p" variant="base">
                  {step.description}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
    </HomeSection>
  );
}
