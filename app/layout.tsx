import type { Metadata } from "next";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// by default nextjs create avalid fallback font automatically
// if you need to prevent default so => adjustFontFallback: false 
// adjustFontFallback: true,
const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const playfairFont = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"]
})


export const metadata: Metadata = {
  metadataBase: new URL("https://muhammed-soliman-portfolio.vercel.app"),
  
  title: {
    default: "Muhammed Soliman - Front End Developer",
    template: "%s - Muhammed Soliman",
  },
  
  description: "Front End Developer specializing in React, Next.js and TypeScript. Focus on building modern, responsive web application aligned with clean code and best practice.",
  
  keywords: [
    "Muhammed Soliman",
    "Front End Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Portfolio",
    "Egypt Developer",
  ],
  
  authors: [{name: "Muhammed Soliman", url: "https://muhammed-soliman-portfolio.vercel.app"}],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Muahmmed Soliman",
    title: "Muhammed Soliman Portfolio",
    description: "Front End Developer specializing in React, Nextjs and TypeScript.",
    images: [
      {
        url: "/imgs/og-homepage.png",
        width: 1200,
        height: 630,
        alt: "Muhammed Soliman Portfolio Preview"
      },
    ]
  },

  twitter: {
    card: "summary_large_image",
    // site: "",
    // creator: "",
    title: "Muhammed Soliman Portfolio",
    description: "Front End Developer specializing in React, Nextjs and TypeScript.",
    images: ["/imgs/og-homepage.png"]
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/"
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body 
        className={`${interFont.variable} ${playfairFont.variable} antialiased pt-20 overflow-visible`}
      >
        <div className="page-wrapper grid grid-cols-[minmax(0,1fr)] grid-rows-[auto_1fr_auto] min-h-screen">
          <Header />
          <main className="w-full">
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
