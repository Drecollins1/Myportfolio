import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { Toaster } from "sonner";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akingbade Damilare Moses — Frontend Developer",
  description:
    "Frontend Developer specializing in React.js, Next.js, Tailwind CSS, and React Native. High-performance, accessible, and maintainable web & mobile interfaces.",
  openGraph: {
    title: "Akingbade Damilare Moses — Frontend Developer",
    description:
      "Frontend Developer specializing in React.js, Next.js, Tailwind CSS, and React Native.",
    type: "website",
  },
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${grotesk.variable}`}>
      <head>
        <Script crossOrigin="anonymous" src="//unpkg.com/same-runtime/dist/index.global.js" />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
        <Toaster theme="dark" position="top-right" richColors />
      </body>
    </html>
  );
}
