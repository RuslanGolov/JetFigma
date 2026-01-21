import { HeroDemo } from "@/components/ui/demo";
import { CyberneticBentoDemo } from "@/components/ui/cybernetic-bento-demo";
import HowItWorksDemo from "@/components/ui/how-it-works-demo";
import { SimpleHeader } from "@/components/ui/simple-header";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";
import { Github, Twitter } from "lucide-react";

export default function Home() {
  return (
    <main>
      <SimpleHeader />
      <HeroDemo />
      <CyberneticBentoDemo />
      <HowItWorksDemo />
      <Footer 
        logo={
          <Image 
            src="/logo.png" 
            alt="DesignToCode Logo" 
            width={32} 
            height={32} 
            className="size-8"
          />
        }
        brandName="DesignToCode"
        socialLinks={[
          {
            icon: <Twitter className="h-5 w-5" />,
            href: "https://x.com/figma",
            label: "Twitter",
          },
          {
            icon: <Github className="h-5 w-5" />,
            href: "https://github.com/figma",
            label: "GitHub",
          },
        ]}
        mainLinks={[
          { href: "#key-features", label: "Features" },
          { href: "#how-it-works", label: "How it works" },
        ]}
        legalLinks={[]}
        copyright={{
          text: `© ${new Date().getFullYear()} DesignToCode`,
          license: "All rights reserved",
        }}
      />
    </main>
  );
}
