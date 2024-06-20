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
  keywords: [
    "A1 Associates",
    "consulting services",
    "IT solutions",
    "business solutions provider",
    "financial services",
    "FinTech",
    "wealth management",
    "regulatory compliance",
    "healthcare",
    "HIT",
    "medical records management",
    "HIPAA compliance",
    "telecommunication",
    "telecom network security",
    "cloud communications",
    "5G solutions",
    "government",
    "government IT solutions",
    "cybersecurity for government agencies",
    "grant proposal writing",
    "insurance",
    "insurance claims processing",
    "insurance policy administration",
    "risk management",
    "logistics",
    "transportation",
    "supply chain management",
    "logistics automation",
    "TMS",
    "utilities",
    "retail",
    "CRM for utilities/retail",
    "data analytics for utilities/retail",
    "IT infrastructure management",
    "application development",
    "custom software development",
    "mobile app development",
    "web development",
    "SharePoint development",
    "SharePoint consulting",
    "SharePoint migration",
    "SharePoint customization",
    "business consulting",
    "business process improvement",
    "strategic planning",
    "IT consulting",
    "IT maintenance and support",
    "software testing",
    "IT outsourcing",
    "big data solutions",
    "cloud computing services",
    "digital marketing services",
    "artificial intelligence (AI) solutions",
    "data analytics solutions",
    "SEO services",
    "A1 Associates",
    "consulting services",
    "IT solutions",
    "business solutions provider",
    "financial services",
    "FinTech",
    "wealth management for high net worth individuals",
    "regulatory compliance for financial institutions",
    "healthcare",
    "HIT solutions for hospitals",
    "medical records management for clinics",
    "HIPAA compliance for healthcare providers",
    "telecommunication",
    "telecom network security for enterprises",
    "cloud communications for businesses",
    "5G solutions for manufacturers",
    "government",
    "government IT solutions for state agencies",
    "cybersecurity for government agencies",
    "grant proposal writing for non-profits",
    "insurance",
    "insurance claims processing for property damage",
    "insurance policy administration for life insurance",
    "risk management for the healthcare industry",
    "logistics",
    "transportation",
    "supply chain management for e-commerce",
    "logistics automation for warehouses",
    "TMS for trucking companies",
    "utilities",
    "retail",
    "CRM for utilities companies",
    "data analytics for retail marketing",
    "IT infrastructure management for manufacturing plants",
    "application development",
    "custom software development for mobile devices",
    "mobile app development for e-commerce stores",
    "web development for real estate agencies",
    "SharePoint development",
    "SharePoint consulting for legal firms",
    "SharePoint migration for government agencies",
    "SharePoint customization for educational institutions",
    "business consulting",
    "business process improvement for manufacturing",
    "strategic planning for startups",
    "IT consulting for small businesses",
    "IT maintenance and support for healthcare providers",
    "software testing for financial services",
    "IT outsourcing for e-commerce businesses",
    "big data solutions for logistics companies",
    "cloud computing services for government agencies",
    "digital marketing services for retail stores",
    "artificial intelligence (AI) solutions for healthcare",
    "data analytics solutions for financial institutions",
    "SEO services for law firms",
  ],
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
