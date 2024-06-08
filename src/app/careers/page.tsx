"use client";
import { careersData } from "@/CONSTANTS";
import { ButtonOutline } from "@/components/ButtonOutline";
import { CardContent, Card } from "@/components/ui/card";
import { TCareer } from "@/types";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
export default function Careers() {
  const router = useRouter();

  return (
    <div className="mt-5 lg:mt-8 px-5 md:px-24">
      <h1 className="text-5xl font-bold tracking-wide uppercase">
        Current Jobs
      </h1>
      <div className="flex items-start mt-10 gap-5 flex-col lg:flex-row">
        {careersData.map((career: TCareer) => {
          return (
            <div
              className="p-1 flex h-full lg:basis-1/4 w-full"
              key={career.title}
            >
              <Card className="h-full w-full">
                <CardContent className="flex flex-col text-primary p-6 gap-5 transition duration-300 ease-in-out justify-between">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold">
                      {career.title}, {career.code}
                    </h3>
                   { 
                   career.location.length>0 || career.experience.length>0 &&
                   <div className="flex gap-10 opacity-70">
                      {
                        career.location.length>0 &&
                        <div className="flex items-end gap-2">
                        <IconMapPin size={20}></IconMapPin>
                        <span className="text-sm">{career.location}</span>
                      </div>
                      }

                      {
                        career.experience.length>0 &&
                        <div className="flex items-end gap-2">
                        <IconBriefcase size={20}></IconBriefcase>
                        <span className="text-sm">{career.experience}</span>
                      </div>
                      }
                    </div>
                    }

                    <p className="font-regular text-regular">
                      {career.desc.slice(0, 30)}...
                    </p>
                  </div>
                  <ButtonOutline
                    className="justify-self-end"
                    onClick={() => {
                      router.push(`careerDetail/${career.code}`);
                    }}
                    size="sm"
                  >
                    Apply Now
                  </ButtonOutline>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
