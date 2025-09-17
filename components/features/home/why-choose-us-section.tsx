import { HomeSection } from "@/components/ui/home-section";
import { LinkChevron } from "@/components/ui/link-chevron";
import { registerFormUrl } from "@/config/config";
import { BirdIcon, GlobeIcon, PencilRulerIcon } from "lucide-react";

const whyChooseUsCards = [
  {
    icon: BirdIcon,
    title: "Nemokama įžanginė pamoka",
    description:
      "Susipažįstame, įsivertiname lygį, sudėliojame tikslus ir mokymosi planą. Jei tinka - tęsiame.",
    linkText: "Registruotis",
    linkHref: registerFormUrl,
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
      <h2 className="font-bree mx-auto mb-24 text-center text-[2.75rem] leading-[1.2] tracking-[-1%]">
        Kodėl verta rinktis 2minty?
      </h2>

      <div className="flex items-start justify-between gap-8">
        {whyChooseUsCards.map((card) => {
          const IconComponent = card.icon;
          return (
            <div key={card.title} className="flex w-full flex-col">
              <IconComponent className="mb-6 size-12 self-center" />

              <h3 className="font-bree mb-6 text-center text-3xl">
                {card.title}
              </h3>
              <p className="mb-8 text-center text-base">{card.description}</p>

              <LinkChevron href={card.linkHref} className="self-center">
                {card.linkText}
              </LinkChevron>
            </div>
          );
        })}
      </div>
    </HomeSection>
  );
}
