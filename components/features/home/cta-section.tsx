import { Button } from "@/components/ui/button";
import { HomeSection } from "@/components/ui/home-section";
import { registerFormUrl } from "@/config/config";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "../../ui/typography";

export function CtaSection() {
  return (
    <HomeSection
      id="cta"
      className="text-accent-foreground bg-[#B443B0]"
      innerClassName="flex md:flex-row flex-col items-center justify-between lg:gap-20 md:gap-16 sm:gap-12 gap-10"
    >
      <div className="w-full">
        <Typography as="h2" variant="h2" className="mb-6">
          Pradėk savo mokymosi kelionę šiandien
        </Typography>

        <Typography as="p" variant="lg" className="mb-8">
          Individualios Google Meet pamokos 5-12 klasei - aiškiai, jaukiai ir su
          nemokama įžanga.
        </Typography>

        <Button pgName="cta_register" asChild>
          <Link href={registerFormUrl} target="_blank">
            Registruotis
          </Link>
        </Button>
      </div>

      <div className="w-full">
        <Image
          src="/images/cta.png"
          alt="2minty"
          className="max-h-[25rem] rounded-2xl object-cover"
          width={600}
          height={400}
        />
      </div>
    </HomeSection>
  );
}
