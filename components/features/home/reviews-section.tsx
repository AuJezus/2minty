import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HomeSection } from "@/components/ui/home-section";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { Typography } from "../../ui/typography";

const reviews = [
  {
    stars: 5,
    quoute:
      "Korepetitorė dirba atsakingai. Informaciją pateikia aiškiai, suprantamai, dukra labai patenkinta jos darbu. Sako, kad jaučia naudą. Mokymosi rezultatai pagerėjo.",
    authorImage: "/images/team-members/ula.png",
    authorName: "Inga J.",
    authorOrigin: "11 kl. mokinės mama",
  },
  {
    stars: 4,
    quoute:
      "Mūsų vaikas labai uždaras, bet korepetitorė puikiai rado bendrą kalbą, dėl ko pradžioje ir pergyvenome, tad labai džiaugiamės. Matom, kad reszultatai gerėja, o tai svarbiausia.",
    authorImage: "/images/team-members/ula.png",
    authorName: "Jelena G.",
    authorOrigin: "9 kl. mokinio mama",
  },
  {
    stars: 5,
    quoute:
      "Iš pradžių buvau skeptiškas dėl nuotolinių pamokų, bet sūnui su korepetitoriumi sekasi puikiai! Rezultatai mokykloje akivaizdūs!",
    authorImage: "/images/team-members/mantas.png",
    authorName: "Mindaugas L.",
    authorOrigin: "11 kl. mokinio tėtis",
  },
  {
    stars: 5,
    quoute:
      "Nesupratau matematikos išvis, bet su korepetitore Ūla viskas pasikeitė. Pamokos nenuobodžios, net sudėtingos temos tampa aiškios. Dabar jaučiuosi daug drąsiau artėjant egzaminams!",
    authorImage: "/images/team-members/mantas.png",
    authorName: "Lukas J.",
    authorOrigin: "12 kl. matematikos mokinys",
  },
];

export function ReviewsSection() {
  return (
    <HomeSection id="reviews" className="bg-muted text-muted-foreground">
      <Carousel
        className="w-full"
        opts={{ loop: true }}
        autoplay
        autoplayDelay={6000}
      >
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem
              key={review.authorName + review.stars}
              className="flex flex-col items-center gap-8"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon
                    key={index}
                    fill={index < review.stars ? "currentColor" : "none"}
                    className="size-5"
                  />
                ))}
              </div>

              <p className="font-bree max-w-3xl text-center text-xl sm:text-2xl md:text-3xl">
                {`„${review.quoute}”`}
              </p>

              <div className="flex items-center gap-5">
                <div className="relative aspect-square size-14 overflow-hidden rounded-full">
                  <Image
                    src={review.authorImage}
                    alt={review.authorName}
                    className="object-cover"
                    fill
                  />
                </div>

                <div>
                  <Typography as="p" variant="base" className="font-semibold">
                    {review.authorName}
                  </Typography>
                  <Typography as="p" variant="base">
                    {review.authorOrigin}
                  </Typography>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious variant="ghost" className="hidden lg:flex" />
        <CarouselNext variant="ghost" className="hidden lg:flex" />
      </Carousel>
    </HomeSection>
  );
}
