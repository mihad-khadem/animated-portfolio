// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mihad Khadem | Full-Stack Developer",
  description:
    "Modern & Minimal JS Animated Portfolio showcasing React, Next.js, Node.js, and more.",
  keywords: [
    "Full-stack Developer",
    "JavaScript",
    "Node.js",
    "Express.js",
    "Software Engineer",
    "TypeScript",
    "MERN",
    "Next.js",
    "React.js",
    "Portfolio",
    "Web Developer",
  ],
  authors: [
    {
      name: "Mihad Khadem",
      url: "https://mihad-khadem.vercel.app",
    },
  ],
  creator: "Mihad Khadem",
  publisher: "Mihad Khadem",
  robots: { index: true, follow: true },

  // ✅ Add this to resolve OG/twitter image URLs properly
  metadataBase: new URL("https://mihad-khadem.vercel.app"),

  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Mihad Khadem | Full-Stack Developer",
    description:
      "Modern & Minimal JS Animated Portfolio showcasing React, Next.js, Node.js, and more.",
    siteName: "Mihad Khadem Portfolio",
    images: [
      {
        url: "/portfolio_front.png", // relative path works now
        width: 1200,
        height: 630,
        alt: "Mihad Khadem Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mihad Khadem | Full-Stack Developer",
    description:
      "Modern & Minimal JS Animated Portfolio showcasing React, Next.js, Node.js, and more.",
    site: "@your_twitter_handle",
    creator: "@your_twitter_handle",
    images: ["/portfolio_front.png"],
  },
  icons: {
    icon: "/M.png",
    shortcut: "/M.png",
    apple: "/M.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/M.png" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
