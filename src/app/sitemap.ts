import { getSideNavData } from "@/lib/utils";
import { MetadataRoute } from "next";
export const fallbackUrl = "https://a1associates.ai";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const industryEntries =
    getSideNavData("industries")?.map((entry) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL ?? fallbackUrl}/industries/${
        entry.key
      }`,
    })) ?? [];
  const serviceEntries =
    getSideNavData("services")?.map((entry) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL ?? fallbackUrl}/services/${
        entry.key
      }`,
    })) ?? [];

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL ?? fallbackUrl}/about`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL ?? fallbackUrl}/careers`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL ?? fallbackUrl}/#contact`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL ?? fallbackUrl}/employeecentral`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL ?? fallbackUrl}/`,
    },
    ...industryEntries,
    ...serviceEntries,
  ];
}
