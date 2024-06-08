import { blurBase64 } from "@/CONSTANTS";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="w-full">
      <Separator></Separator>
      <div className="flex flex-col items-center">
        <Image
          src="/assets/brand-logo.png"
          alt="A1 associates"
          width="100"
          height="100"
          priority
          placeholder="blur"
          blurDataURL={blurBase64}
        ></Image>
        <p className="text-center text-sm">
          Copyright © 2024, A1 Associates LLC. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
