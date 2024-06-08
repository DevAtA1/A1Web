import { blurBase64 } from "@/CONSTANTS";
import { Card, CardContent } from "@/components/ui/card";
import { TCarousel } from "@/types";
import Image from "next/image";
const CarouselCard = ({ item }: { item: TCarousel }) => {
  return (
    <Card>
      <CardContent className="flex p-4 flex-col justify-between ">
        {item.image && (
          <div className="relative h-full">
            <Image
              src={item.image}
              fill
              priority
              placeholder="blur"
              blurDataURL={blurBase64}
              className="object-cover"
              alt={item.title ?? "image"}
            ></Image>
          </div>
        )}
        {item.title && (
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
        )}
      </CardContent>
    </Card>
  );
};
export default CarouselCard;
