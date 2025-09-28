import { Button } from "@/components/ui/button";
import { HomeSection } from "@/components/ui/home-section";
import { registerFormUrl } from "@/config/config";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "../../ui/typography";

const contacts = [
  {
    icon: MailIcon,
    title: "El. paštas",
    text: "info@2minty.lt",
    link: "mailto:info@2minty.lt",
  },
  {
    icon: PhoneIcon,
    title: "Telefonas",
    text: "+370 653 96700",
    link: "tel:+37065396700",
  },
  {
    icon: MapPinIcon,
    title: "Adresas",
    text: "Online per Google Meet (visoje Lietuvoje)",
  },
];

export function ContactsSection() {
  return (
    <HomeSection id="contacts" className="bg-background text-foreground">
      <div className="mb-10 flex flex-col items-start justify-between gap-8 sm:mb-12 sm:flex-row sm:gap-10 md:mb-20 md:gap-20">
        <div className="sm:w-2/3">
          <Typography as="h2" variant="tagline" className="mb-4">
            Kontaktai
          </Typography>

          <Typography as="h3" variant="h2" className="mb-6">
            Susisiekime!
          </Typography>

          <Typography as="p" variant="lg" className="mb-6 sm:max-w-2xl">
            Parašykite ar užpildykite formą - atsakysime ir suderinsime patogų
            laiką pirmai nemokamai įžanginei pamokai.
          </Typography>

          <Button pgName="contact_section_register" asChild>
            <Link href={registerFormUrl}>Registruotis</Link>
          </Button>
        </div>

        <div className="flex flex-col gap-6 sm:w-1/3">
          {contacts.map((contact) => {
            const IconComponent = contact.icon;
            return (
              <div key={contact.title} className="flex items-start gap-4">
                <IconComponent className="size- flex-shrink-0" />

                <div>
                  <Typography as="h4" variant="h5" className="mb-2">
                    {contact.title}
                  </Typography>

                  {contact.link ? (
                    <Link href={contact.link} className="underline">
                      {contact.text}
                    </Link>
                  ) : (
                    <Typography as="p" variant="base">
                      {contact.text}
                    </Typography>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Image
        src="/images/contacts.png"
        alt="2minty"
        className="max-h-[45rem] w-full rounded-2xl object-cover"
        width={1280}
        height={720}
      />
    </HomeSection>
  );
}
