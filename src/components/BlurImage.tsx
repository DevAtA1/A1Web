"use client";
import { blurBase64 } from "@/CONSTANTS";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
export const BlurImage = ({
  src,
  imgClassName,
}: {
  src: string;
  imgClassName?: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="relative w-full h-[200px] lg:h-[400px]">
      <Image
        src={src}
        fill
        priority
        blurDataURL={blurBase64}
        placeholder="blur"
        alt="Industry"
        onLoad={() => {
          setIsLoading(false);
        }}
        className={cn(
          "object-cover h-auto w-full object-top",
          imgClassName,
          isLoading ? "blur-2xl grayscale" : "blur-0 grayscale-0"
        )}
      ></Image>
    </div>
  );
};
