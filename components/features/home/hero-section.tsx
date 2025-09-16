import { Button } from "@/components/ui/button";
import { HomeSection } from "@/components/ui/home-section";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <HomeSection
      className="bg-accent text-accent-foreground"
      innerClassName="flex items-center justify-between gap-20"
    >
      <div className="flex w-full flex-col gap-8">
        <h1 className="font-bree text-7xl">Iš „neaišku" į „moku!" su 2minty</h1>

        <p className="text-lg">
          Individualios Google Meet pamokos su jaunais korepetitoriais. Daug
          dėmesio, aiškus planas ir realūs rezultatai.
        </p>

        <div className="flex gap-4">
          <Button asChild>
            <Link href="https://www.relume.io/app/project/P2378634_3g9WMXSF1ubObltSTac4OM_SToa5R4_mOwKC1sayCNE#mode=styleguide">
              Registruotis
            </Link>
          </Button>

          <Button asChild variant="secondary">
            <Link href="#contact">Susisiekti</Link>
          </Button>
        </div>
      </div>

      <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
        <Image
          src="/images/hero.png"
          alt="2minty"
          priority
          objectFit="cover"
          fill
        />
      </div>
    </HomeSection>
  );
}
