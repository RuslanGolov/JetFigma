import { HeroDemo } from "@/components/ui/demo";
import { CyberneticBentoDemo } from "@/components/ui/cybernetic-bento-demo";
import HowItWorksDemo from "@/components/ui/how-it-works-demo";

export default function Home() {
  return (
    <main>
      <HeroDemo />
      <CyberneticBentoDemo />
      <HowItWorksDemo />
    </main>
  );
}
