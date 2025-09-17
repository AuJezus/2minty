import {
  HeroSection,
  IntroSection,
  OnlineLessonsSection,
  WhyChooseUsSection,
  TeamSection,
  ReviewsSection,
  ContactsSection,
  CtaSection,
} from "@/components/features/home";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <WhyChooseUsSection />
      <TeamSection />
      <OnlineLessonsSection />
      <ReviewsSection />
      <ContactsSection />
      <CtaSection />
    </>
  );
}
