import { industriesData } from "@/CONSTANTS";
import { BlurImage } from "@/components/BlurImage";
import { CollapsibleMenu } from "@/components/CollapsibleMenu";
import { Button } from "@/components/ui/button";
import {
  cn,
  getSideNavData,
  getSideNavDropdownData,
  sideLinkActiveStyle,
  sideLinkStyle,
} from "@/lib/utils";
import { TSubSection } from "@/types";
import Link from "next/link";
export default function Industries({
  params,
}: {
  params: { industryName: string };
}) {
  return (
    <div className="mt-5 lg:mt-8 px-5 md:px-24">
      <h1 className="text-5xl font-bold tracking-wide uppercase">Industries</h1>
      <div className="flex-col lg:flex lg:flex-row items-start mt-10">
        <div className="lg:hidden my-5">
          <CollapsibleMenu
            dataSource={getSideNavDropdownData("industries")}
            placeholder="Select Industry..."
            notFoundMsg="No Industry found"
            defaultValue={params.industryName}
          ></CollapsibleMenu>
        </div>
        <div className="hidden lg:flex lg:flex-col justify-start">
          {getSideNavData("industries")?.map((item) => {
            return (
              <Button
                key={item.title}
                variant="link"
                asChild
                size="xl"
                className={
                  params.industryName === item.key
                    ? sideLinkActiveStyle()
                    : sideLinkStyle()
                }
              >
                <Link href={item.href}>{item.title}</Link>
              </Button>
            );
          })}
        </div>
        <aside className="ml-0 lg:ml-10 w-full">
          {industriesData[params.industryName]?.map((section: TSubSection) => {
            return (
              <div key={section.title} className={"mb-4"}>
                {section.title && (
                  <h2
                    className={cn(
                      "text-xl font-semibold text-secondary",
                      section.titleClassname
                    )}
                  >
                    {section.title}
                  </h2>
                )}
                <p className="leading-loose text-justify">{section.content}</p>
                {section.component?.type === "image" ? (
                  <BlurImage
                    src={
                      section.component.src ??
                      `/assets/industry-${params.industryName}.jpg`
                    }
                    imgClassName={section.component.imgClassName}
                  ></BlurImage>
                ) : (
                  section.component?.element
                )}
              </div>
            );
          })}
        </aside>
      </div>
    </div>
  );
}
