import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import { blurBase64 } from "@/CONSTANTS";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { TCarousel } from "@/types";
const CarouselBottomButtonGroup = ({
  dataSource,
  current,
  api,
}: {
  dataSource: TCarousel[];
  current: number;
  api: CarouselApi;
}) => {
  return (
    <div className="flex gap-2 justify-center mt-2">
      {dataSource?.map((_, index) => (
        <span
          key={index}
          className={cn(
            "h-4 w-4 cursor-pointer rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            current === index ? "bg-primary" : ""
          )}
          onClick={() => {
            api?.scrollTo(index);
          }}
        ></span>
      ))}
    </div>
  );
};
export function SideCarousel({ dataSource }: { dataSource: TCarousel[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <>
      <Carousel
        opts={{
          loop: true,
        }}
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full max-w-lg hidden md:block"
      >
        <CarouselContent>
          {dataSource.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square p-4 flex-col justify-between">
                    {item.image && (
                      <div className="relative h-full w-full">
                        <Image
                          src={item.image}
                          fill
                          priority
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                          alt={item.title ?? "image"}
                          placeholder="blur"
                          blurDataURL={blurBase64}
                        ></Image>
                      </div>
                    )}
                    <div className="bg-primary p-2">
                      <div className="border-l-2 px-2 flex flex-col justify-between">
                        <div className="text-lg text-primary-foreground">
                          {item.title}
                        </div>
                        <div className="text-sm text-primary-foreground">
                          {item.content}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselBottomButtonGroup
          dataSource={dataSource}
          api={api}
          current={current}
        ></CarouselBottomButtonGroup>
      </Carousel>
    </>
  );
}
