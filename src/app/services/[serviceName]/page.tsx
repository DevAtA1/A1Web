import { servicesData } from "@/CONSTANTS";
import { CollapsibleMenu } from "@/components/CollapsibleMenu";
import { Button } from "@/components/ui/button";
import { getSideNavData, getSideNavDropdownData } from "@/lib/utils";
import { TSubSection } from "@/types";
import { cva } from "class-variance-authority";
import { Metadata } from "next";
import Link from "next/link";
const sideLinkStyle = cva(
  "p-0 justify-start items-start hover:scale-105 font-semibold transition duration-300 ease-in-out text-md h-10"
);
const sideLinkActiveStyle = cva(
  "p-0 justify-start items-start hover:scale-105 font-semibold transition duration-300 ease-in-out text-xl h-10"
);
export async function generateMetadata({
  params,
}: {
  params: { serviceName: string };
}): Promise<Metadata> {
  return {
    title: servicesData[params.serviceName]?.[0].title,
  };
}
export default function Services({
  params,
}: {
  params: { serviceName: string };
}) {
  return (
    <div className="mt-5 lg:mt-8 px-5 md:px-24">
      <h1 className="text-5xl font-bold tracking-wide">Services</h1>
      <div className="flex-col lg:flex lg:flex-row items-start mt-10">
        <div className="lg:hidden my-5">
          <CollapsibleMenu
            dataSource={getSideNavDropdownData("services")}
            placeholder="Select Service..."
            notFoundMsg="No Service found"
            defaultValue={params.serviceName}
          ></CollapsibleMenu>
        </div>
        <div className="hidden lg:flex lg:flex-col justify-start">
          {getSideNavData("services")?.map((item) => {
            return (
              <Button
                key={item.title}
                variant="link"
                asChild
                size="xl"
                className={
                  params.serviceName === item.key
                    ? sideLinkActiveStyle()
                    : sideLinkStyle()
                }
              >
                <Link href={item.href}>{item.title}</Link>
              </Button>
            );
          })}
        </div>
        <aside className="px-0 lg:px-10 flex gap-5 flex-col">
          {servicesData[params.serviceName]?.map((section: TSubSection) => {
            return (
              <div key={section.title} className="mb-4">
                {section.title && (
                  <h2 className="text-xl font-semibold text-secondary mb-2">
                    {section.title}
                  </h2>
                )}
                {section.content && (
                  <p className="leading-loose text-justify">
                    {section.content}
                  </p>
                )}
                {section.component?.type === "custom" &&
                  section.component.element}
              </div>
            );
          })}
        </aside>
      </div>
    </div>
  );
}
