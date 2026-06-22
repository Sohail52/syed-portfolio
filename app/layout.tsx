import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { generateStructuredData } from "@/lib/seo";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title:
    "Syed Sohail — Full-Stack Developer (Next.js, TypeScript, Node.js, PostgreSQL)",
  description:
    "Syed Sohail is a Full-Stack Developer specializing in Next.js, TypeScript, Node.js, PostgreSQL, and modern web technologies. Explore projects, engineering notes, and software development insights.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Java",
    "PostgreSQL",
    "MongoDB",
    "System Design",
    "Backend Development",
    "Web Development",
  ],
  authors: [
    {
      name: "Syed Sohail",
      url: "https://sohail-portfolio.vercel.app",
    },
  ],
  creator: "Syed Sohail",
  publisher: "Syed Sohail",
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sohail-portfolio.vercel.app"),
  alternates: {
    canonical: "https://sohail-portfolio.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sohail-portfolio.vercel.app",
    siteName: "Syed Sohail Portfolio",
    title:
      "Syed Sohail — Full-Stack Developer (Next.js, TypeScript, Node.js, PostgreSQL)",
    description:
      "Explore projects and engineering notes by Syed Sohail covering full-stack development, backend engineering, system design, and modern web technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Syed Sohail Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Syed Sohail — Full-Stack Developer (Next.js, TypeScript, Node.js, PostgreSQL)",
    description:
      "Software Developer building full-stack applications with Next.js, TypeScript, Node.js, and PostgreSQL.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = generateStructuredData("person", {
    name: "Syed Sohail",
    url: "https://sohail-portfolio.vercel.app",
    email: "ssohailm07@gmail.com",
    sameAs: [
      "https://github.com/Sohail52",
      "https://www.linkedin.com/in/syed-sohail-mehmood-848763229/",
      "https://x.com/syedsohail1",
    ],
  });

  const websiteSchema = generateStructuredData("website", {
    name: "Syed Sohail Portfolio",
    url: "https://sohail-portfolio.vercel.app",
    description:
      "Portfolio showcasing projects, engineering notes, and software development work by Syed Sohail.",
    authorName: "Syed Sohail",
  });

  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <ThemeProvider attribute="class" enableSystem defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
