import { fallbackUrl } from "@/app/sitemap";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL ?? fallbackUrl}/sitemap.xml`,
  };
}
