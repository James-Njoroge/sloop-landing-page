import CTA from "@/components/cta.client";
import Hero from "@/components/hero";
import Mission from "@/components/mission";
import Team from "@/components/team";

export default function Home() {
  return (
    <section className="pb-8 md:pb-10">
      <div className="max-w-[1440px] w-full mx-auto">
        <Hero />
        <Mission />
        <Team />
        <CTA />
      </div>
    </section>
  );
}
