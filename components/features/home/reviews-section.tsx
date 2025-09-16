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

const reviews = [
  {
    stars: 5,
    quoute:
      "Ūla made math so much fun and easy to understand! My grades improved dramatically thanks to her engaging lessons.",
    authorImage: "/images/team-members/ula.png",
    authorName: "Ūla Č.",
    authorOrigin: "9-12 kl. matematikos mokinys",
  },
  {
    stars: 3,
    quoute:
      "Ūla made math so much fun and easy to understand! My grades improved dramatically thanks to her engaging lessons.",
    authorImage: "/images/team-members/ula.png",
    authorName: "Ūla Č.",
    authorOrigin: "9-12 kl. matematikos mokinys",
  },
];

export function ReviewsSection() {
  return (
    <HomeSection id="reviews" className="bg-muted text-muted-foreground">
      <Carousel className="w-full" opts={{ loop: true }}>
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

              <p className="font-bree max-w-3xl text-center text-3xl">
                &ldquo;{review.quoute}&rdquo;
              </p>

              <div className="flex items-center gap-5">
                <div className="relative aspect-square size-14 overflow-hidden rounded-full">
                  <Image
                    src={review.authorImage}
                    alt={review.authorName}
                    fill
                    objectFit="cover"
                  />
                </div>

                <div>
                  <p className="font-semibold">{review.authorName}</p>
                  <p>{review.authorOrigin}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious variant="ghost" />
        <CarouselNext variant="ghost" />
      </Carousel>
    </HomeSection>
  );
}
