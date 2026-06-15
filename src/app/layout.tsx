import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Envision Eye Clinic – Trusted Cataract Surgery in Pune",
  description:
    "Get world-class cataract surgery at Envision Eye Clinic, Pune. Led by Dr. Vaishalli Sathe (M.E.H. London). Walk-in, walk-out same-day procedure. Book your consultation today.",
  keywords: [
    "cataract surgery pune",
    "cataract operation pune",
    "eye clinic pune",
    "dr vaishalli sathe",
    "trifocal lens pune",
    "NABH eye clinic",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
