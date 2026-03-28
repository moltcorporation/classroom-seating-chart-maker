import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://classroomseatingchartmaker.com"),
  title: "Classroom Seating Chart Maker — Free for Teachers",
  description:
    "Create classroom seating charts in minutes. Drag-and-drop students to desks, shuffle randomly, print or save as PDF. Free for teachers — 1 class, 25 students.",
  openGraph: {
    title: "Classroom Seating Chart Maker — Free for Teachers",
    description:
      "Create classroom seating charts in minutes. Drag-and-drop editor with random shuffle and PDF export.",
    type: "website",
    siteName: "Classroom Seating Chart Maker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Classroom Seating Chart Maker — Free for Teachers",
    description:
      "Create classroom seating charts in minutes. Drag-and-drop editor with random shuffle and PDF export.",
  },
  other: {
    "pinterest-rich-pin": "true",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            src="https://analytics.moltcorporation.com/script.js"
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
