import * as React from "react";

import { blurBase64 } from "@/CONSTANTS";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { ButtonOutline } from "./ButtonOutline";
import { useRouter } from "next/navigation";
import { TCarousel } from "@/types";
export function ServicesCarousel({
  dataSource,
  delay = 5000,
}: {
  dataSource: TCarousel[];
  delay?: number;
}) {
  const plugin = React.useRef(Autoplay({ delay, stopOnInteraction: false }));

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-11/12"
    >
      <CarouselContent>
        {dataSource.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            {item.readMoreBtn ? (
              <CardWithBtn item={item}></CardWithBtn>
            ) : (
              <CardAsLink item={item}></CardAsLink>
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-4 md:-left-12" />
      <CarouselNext className="-right-4 md:-right-12" />
    </Carousel>
  );
}
const CardWithBtn = ({ item }: { item: TCarousel }) => {
  const router = useRouter();
  return (
    <div className="p-1 flex h-full">
      <Card className="h-full">
        <CardContent className="flex flex-col text-primary p-6 pb-0 gap-3 transition duration-300 ease-in-out">
          {item.image && (
            <Image
              src={item.image}
              width={100}
              height={100}
              priority
              alt={item.title!}
              placeholder="blur"
              blurDataURL={blurBase64}
            ></Image>
          )}
          <h3 className="text-2xl font-bold">{item.title}</h3>
          <p className="font-regular text-regular pb-6">{item.content}</p>
          {!item.disabled && (
            <ButtonOutline
              onClick={() => {
                router.push(item.href ?? "/");
              }}
              size="sm"
            >
              Read more
            </ButtonOutline>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
const CardAsLink = ({ item }: { item: TCarousel }) => {
  return (
    <Link href={item.href ?? "/"} className="flex h-full">
      <div className="p-1">
        <Card className="h-full text-primary  hover:bg-primary hover:text-primary-foreground transition duration-300 ease-in-out">
          <CardContent className="flex flex-col aspect-square justify-between p-0 gap-3">
            {item.image && (
              <div className="relative w-full h-3/4">
                <Image
                  src={item.image}
                  fill
                  alt={item.title!}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full object-cover"
                  placeholder="blur"
                  blurDataURL={blurBase64}
                ></Image>
              </div>
            )}
            <h3 className="text-2xl font-bold px-6">{item.title}</h3>
            <p className="font-regular text-regular px-6 pb-6 justify-self-end">
              {item.content}
            </p>
          </CardContent>
        </Card>
      </div>
    </Link>
  );
};
