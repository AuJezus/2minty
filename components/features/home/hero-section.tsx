import { Button } from "@/components/ui/button";
import { HomeSection } from "@/components/ui/home-section";
import { registerFormUrl } from "@/config/config";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <HomeSection
      className="bg-accent text-accent-foreground"
      innerClassName="flex items-center justify-between gap-20"
    >
      <div className="flex w-full flex-col gap-8">
        <h1 className="font-bree text-7xl">{`Iš „neaišku" į „moku!" su 2minty`}</h1>

        <p className="text-lg">
          Individualios Google Meet pamokos su jaunais korepetitoriais. Daug
          dėmesio, aiškus planas ir realūs rezultatai.
        </p>

        <div className="flex gap-4">
          <Button pgName="hero_register" asChild>
            <Link href={registerFormUrl}>Registruotis</Link>
          </Button>

          <Button pgName="hero_contact" asChild variant="secondary">
            <Link href="#contacts">Susisiekti</Link>
          </Button>
        </div>
      </div>

      <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
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
