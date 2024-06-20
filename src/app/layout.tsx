import type { Metadata } from "next";
import { Inter, Montserrat, Lato, Poppins, Raleway } from "next/font/google";
import "./globals.css";
import { NavbarMenu } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "A1 Associates",
    template: "%s | A1 Associates",
  },
  description: "CRAFTING SOLUTIONS,BUILDING FUTURES",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${poppins.className}`}>
        <NavbarMenu></NavbarMenu>
        <main className="min-h-screen">{children}</main>
        <Analytics></Analytics>
        <SpeedInsights></SpeedInsights>
        <Toaster />
        <Footer></Footer>
      </body>
    </html>
  );
}
