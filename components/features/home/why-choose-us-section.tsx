import { HomeSection } from "@/components/ui/home-section";
import { LinkChevron } from "@/components/ui/link-chevron";
import { registerFormUrl } from "@/config/config";
import { BirdIcon, GlobeIcon, PencilRulerIcon } from "lucide-react";
import { Typography } from "../../ui/typography";

const whyChooseUsCards = [
  {
    icon: BirdIcon,
    title: "Nemokama įžanginė pamoka",
    description:
      "Susipažįstame, įsivertiname lygį, sudėliojame tikslus ir mokymosi planą. Jei tinka - tęsiame.",
    linkText: "Registruotis",
    linkHref: registerFormUrl,
    pgName: "why_choose_us_registration",
    target: "_blank",
  },
  {
    icon: PencilRulerIcon,
    title: "Daug dėmesio, aiškūs paaiškinimai",
    description:
      "Jauni dar vis studijuojantis universitete korepetitoriai, kurie neseniai praėjo egzaminus. Kantrybė, paprasta kalba ir struktūra, kuri veikia.",
    linkText: "Sužinoti daugiau",
    linkHref: "#team",
  },
  {
    icon: GlobeIcon,
    title: "Lankstu ir prieinama",
    description:
      "Online per Google Meet, patogūs laikai ir aiški kaina - 20 € už pamoką. Galimi nuolaidų planai augant pamokų skaičiui.",
    linkText: "Kaip tai veikia?",
    linkHref: "#online-lessons",
  },
];

export function WhyChooseUsSection() {
  return (
    <HomeSection className="bg-background text-foreground">
      <Typography
        as="h2"
        variant="h3"
        className="mx-auto mb-16 text-center md:mb-24"
      >
        Kodėl verta rinktis 2minty?
      </Typography>

      <div className="flex flex-wrap items-stretch justify-center gap-8 gap-y-12 lg:flex-nowrap lg:items-start lg:justify-between lg:gap-4 lg:gap-y-4 xl:gap-8">
        {whyChooseUsCards.map((card) => {
          const IconComponent = card.icon;
          return (
            <div
              key={card.title}
              className="flex w-full max-w-[19.5rem] flex-col lg:max-w-full"
            >
              <IconComponent className="mb-4 size-12 self-center md:mb-6" />

              <Typography
                as="h3"
                variant="h4"
                className="mb-4 text-center md:mb-6"
              >
                {card.title}
              </Typography>
              <Typography
                as="p"
                variant="base"
                className="mb-4 text-center md:mb-8"
              >
                {card.description}
              </Typography>

              <LinkChevron
                pgName={card.pgName}
                href={card.linkHref}
                target={card.target}
                className="mt-auto self-center lg:mt-0"
              >
                {card.linkText}
              </LinkChevron>
            </div>
          );
        })}
      </div>
    </HomeSection>
  );
}
