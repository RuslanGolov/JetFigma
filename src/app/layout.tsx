import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://designtocode.io'),
  title: "Design to Code – Generate UI that respects your frameworks",
  description: "By combining Figma design with deep project awareness inside JetBrains IDEs or VS Code, it generates UI code that respects your frameworks, components, and APIs from the start.",
  keywords: ["Figma to code", "Design to React", "Figma to Vue", "UI code generation", "JetBrains plugin", "VS Code extension", "Design system automation"],
  authors: [{ name: "DesignToCode Team" }],
  openGraph: {
    title: "Design to Code – Generate UI that respects your frameworks",
    description: "By combining Figma design with deep project awareness inside JetBrains IDEs or VS Code, it generates UI code that respects your frameworks, components, and APIs from the start.",
    url: "https://designtocode.io", // Assuming the domain
    siteName: "DesignToCode",
    images: [
      {
        url: "/images/figma-to-code.png",
        width: 1200,
        height: 630,
        alt: "DesignToCode Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Design to Code – Generate UI that respects your frameworks",
    description: "By combining Figma design with deep project awareness inside JetBrains IDEs or VS Code, it generates UI code that respects your frameworks, components, and APIs from the start.",
    images: ["/images/figma-to-code.png"],
    creator: "@designtocode",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "v53551u706");
          `}
        </Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SJC7N5YBRX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-SJC7N5YBRX');
          `}
        </Script>
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
               (function(m,e,t,r,i,k,a){
                   m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                   m[i].l=1*new Date();
                   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
               })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106376078', 'ym');
           
               ym(106376078, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/106376078"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
