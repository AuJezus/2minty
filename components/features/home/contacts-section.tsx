import { Button } from "@/components/ui/button";
import { HomeSection } from "@/components/ui/home-section";
import { registerFormUrl } from "@/config/config";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    text: "+370 612 34 567",
    link: "tel:+37061234567",
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
      <div className="mb-20 flex items-start justify-between gap-20">
        <div className="w-2/3">
          <h2 className="font-base mb-4 font-semibold">Kontaktai</h2>

          <h3 className="font-bree mb-6 text-5xl">Susisiekime!</h3>

          <p className="mb-6 max-w-2xl text-lg">
            Parašykite ar užpildykite formą - atsakysime ir suderinsime patogų
            laiką pirmai nemokamai įžanginei pamokai.
          </p>

          <Button pgName="contact_section_register" asChild>
            <Link href={registerFormUrl}>Registruotis</Link>
          </Button>
        </div>

        <div className="flex w-1/3 flex-col gap-6">
          {contacts.map((contact) => {
            const IconComponent = contact.icon;
            return (
              <div key={contact.title} className="flex items-start gap-4">
                <IconComponent className="size-6" />

                <div>
                  <h4 className="font-bree mb-2 text-2xl">{contact.title}</h4>

                  {contact.link ? (
                    <Link href={contact.link} className="underline">
                      {contact.text}
                    </Link>
                  ) : (
                    <p>{contact.text}</p>
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
