import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReviewPing — Turn Every Finished Job Into a 5-Star Google Review",
  description:
    "Send one text after every job. Get more Google reviews automatically. Built for plumbers, cleaners, HVAC, landscapers, and electricians. $29/month.",
  openGraph: {
    title: "ReviewPing — Automated Google Reviews for Home Service Businesses",
    description:
      "Send one text after every job. Get more Google reviews automatically. $29/month.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
