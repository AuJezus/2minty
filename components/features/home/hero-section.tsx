import { Button } from "@/components/ui/button";
import { HomeSection } from "@/components/ui/home-section";
import { registerFormUrl } from "@/config/config";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "../../ui/typography";

export function HeroSection() {
  return (
    <HomeSection
      id="hero"
      className="bg-accent text-accent-foreground"
      innerClassName="flex items-center justify-between md:gap-20 gap-10 lg:flex-row flex-col"
    >
      <div className="text flex w-full flex-col gap-6 sm:gap-6 md:gap-8">
        <Typography
          as="h1"
          variant="h1"
        >{`Iš „neaišku" į „moku!" su 2minty`}</Typography>

        <Typography as="p" variant="lg">
          Individualios Google Meet pamokos su jaunais korepetitoriais. Daug
          dėmesio, aiškus planas ir realūs rezultatai.
        </Typography>

        <div className="flex gap-4">
          <Button pgName="hero_register" asChild>
            <Link href={registerFormUrl} target="_blank">
              Registruotis
            </Link>
          </Button>

          <Button pgName="hero_contact" asChild variant="secondary">
            <Link href="#contacts">Susisiekti</Link>
          </Button>
        </div>
      </div>

      <div className="max relative aspect-square w-full overflow-hidden rounded-2xl">
        <Image
          src="/images/hero.png"
          alt="2minty"
          className="object-cover"
          priority
          fill
        />
      </div>
    </HomeSection>
  );
}
