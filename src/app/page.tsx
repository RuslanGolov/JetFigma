import { HeroDemo } from "@/components/ui/demo";
import { CyberneticBentoDemo } from "@/components/ui/cybernetic-bento-demo";
import HowItWorksDemo from "@/components/ui/how-it-works-demo";
import { SimpleHeader } from "@/components/ui/simple-header";

export default function Home() {
  return (
    <main>
      <SimpleHeader />
      <HeroDemo />
      <CyberneticBentoDemo />
      <HowItWorksDemo />
    </main>
  );
}
