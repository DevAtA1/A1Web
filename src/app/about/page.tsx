import { aboutUsData } from "@/CONSTANTS";
import Divider from "@/components/Divider";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
};

export default function About() {
  return (
    <div className="mt-5 lg:mt-8 px-5 md:px-24">
      <h1 className="text-5xl font-bold tracking-wide uppercase">About us</h1>
      <p className="text-justify mt-5">{aboutUsData.desc}</p>
      <p className="text-justify mt-5">{aboutUsData.subDesc}</p>
      <div className="flex flex-col lg:flex-row items-center mt-16 gap-10 border-l-2 pl-2 lg:border-l-0 lg:pl-0">
        <div className="items-start flex flex-col lg:items-center">
          <h2 className="text-2xl uppercase font-bold">Mission</h2>
          <p className="text-left lg:text-center">
            {aboutUsData.missionContent}
          </p>
        </div>
        <Separator
          orientation="vertical"
          decorative
          className="hidden lg:block h-20"
        ></Separator>
        <div className="items-start flex flex-col lg:items-center">
          <h2 className="text-2xl uppercase font-bold">Vision</h2>
          <p className="text-left lg:text-center">
            {aboutUsData.visionContent}
          </p>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-left uppercase text-4xl lg:text-center">
          Our Values
        </h2>
        <div className="flex-col lg:flex-row flex gap-10 mt-5">
          {aboutUsData.values.map((item: Record<string, string>) => {
            return (
              <div key={item.title} className="px-0 lg:p-4">
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-justify">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
