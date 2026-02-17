import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CursorFollower } from "@/components/CursorFollower";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Monish Balusu | Entrepreneurial AI Engineer",
  description:
    "Bridging the gap between technical execution and business strategy. AI Engineer, QA Specialist, Fintech Enthusiast.",
  openGraph: {
    title: "Monish Balusu | Entrepreneurial AI Engineer",
    description:
      "Leveraging technology to solve real-world problems with an entrepreneurial mindset.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}
