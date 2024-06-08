"use client";
import { careersData } from "@/CONSTANTS";
import { DialogBox } from "@/components/DialogBox";
import { Card, CardContent } from "@/components/ui/card";
import { TCareer } from "@/types";
import { IconCircleArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CareerDetail({ params }: { params: { code: string } }) {
  const router = useRouter();
  return (
    <div className="mt-5 lg:mt-8 px-5 md:px-24">
      <div className="flex items-center gap-2">
        <IconCircleArrowLeft
          size={40}
          className=" cursor-pointer"
          onClick={() => {
            router.back();
          }}
        ></IconCircleArrowLeft>
        <h1 className="text-5xl font-bold tracking-wide uppercase">
          Job Detail
        </h1>
      </div>

      <div className="flex items-start mt-10 gap-5 flex-col lg:flex-row">
        {careersData
          .filter((career) => career.code === params.code)
          .map((career: TCareer) => {
            return (
              <div className="p-1 flex h-full w-full" key={career.title}>
                <Card className="h-full w-full">
                  <CardContent className="flex flex-col p-6 gap-5 ">
                    <div className="flex flex-col gap-5">
                      <h3 className="text-2xl font-semibold text-foreground">
                        {career.title}
                      </h3>
                      <div>
                        <p className="font-semibold text-foreground">
                          Job Code
                        </p>
                        <p className="text-muted-foreground">{career.code}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          Job Title
                        </p>
                        <p className="text-muted-foreground">{career.title}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          Job Description
                        </p>
                        <p className="text-muted-foreground">{career.desc}</p>
                      </div>
                      {
                        career.experience.length>0 &&
                      <div>
                        <p className="font-semibold text-foreground">
                          Experience Required
                        </p>
                        <p className="text-muted-foreground">
                          {career.experience}
                        </p>
                      </div>
                      }
                      <div>
                        <p className="font-semibold text-foreground">
                          Employment Type
                        </p>
                        <p className="text-muted-foreground">
                          {career.employmentType}
                        </p>
                      </div>
                     {
                      career.location.length>0 &&
                      <div>
                      <p className="font-semibold text-foreground ">
                        Location
                      </p>
                      <p className="text-muted-foreground">
                        {career.location}
                      </p>
                    </div>

                     }
                    </div>
                    <DialogBox
                      buttonName="Apply Now"
                      buttonClassName="text-foreground justify-self-end self-start hover:scale-105 font-semibold transition duration-300 ease-in-out"
                    ></DialogBox>
                  </CardContent>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
}
