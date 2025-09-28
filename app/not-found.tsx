import { Metadata } from "next";
import { LinkChevron } from "../components/ui/link-chevron";
import { Typography } from "../components/ui/typography";

export const metadata: Metadata = {
  title: "Puslapis nerastas",
  description: "Puslapis, kurį ieškote, neegzistuoja.",
};

export default function NotFound() {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center gap-4 text-center">
      <Typography as="h1" variant="h2">
        Puslapis nerastas
      </Typography>

      <Typography as="p" variant="base">
        Nepavyko rasti pageidaujamo puslapio
      </Typography>

      <LinkChevron href="/">Grįžti į pagrindinį puslapį</LinkChevron>
    </div>
  );
}
