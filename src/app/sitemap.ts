import { getSideNavData } from "@/lib/utils";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const industryEntries =
    getSideNavData("industries")?.map((entry) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/industries/${entry.key}`,
    })) ?? [];
  const serviceEntries =
    getSideNavData("services")?.map((entry) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/${entry.key}`,
    })) ?? [];

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/careers`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/#contact`,
    },
    ...industryEntries,
    ...serviceEntries,
  ];
}
