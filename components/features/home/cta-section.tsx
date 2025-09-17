import { Button } from "@/components/ui/button";
import { HomeSection } from "@/components/ui/home-section";
import { registerFormUrl } from "@/config/config";
import Image from "next/image";
import Link from "next/link";

export function CtaSection() {
  return (
    <HomeSection
      id="cta"
      className="text-accent-foreground bg-[#B443B0]"
      innerClassName="flex items-center justify-between gap-20"
    >
      <div className="w-full">
        <h2 className="font-bree mb-6 text-5xl">
          Pradėk savo mokymosi kelionę šiandien
        </h2>

        <p className="mb-8">
          Individualios Google Meet pamokos 5-12 klasei - aiškiai, jaukiai ir su
          nemokama įžanga.
        </p>

        <Button asChild>
          <Link href={registerFormUrl}>Registruotis</Link>
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
