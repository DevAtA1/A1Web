import { PATH, blurBase64 } from "@/CONSTANTS";
import { Button } from "@/components/ui/button";
import { TCarousel } from "@/types";
import Image from "next/image";
import Link from "next/link";
const HomeAbout = () => {
  return (
    <div id="homeAbout" className="flex px-5 md:px-24 justify-between my-20">
      <div className="uppercase flex flex-col gap-5 items-center md:items-start">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-light">Who are we</h3>
          <h1 className="text-5xl font-bold">About us</h1>
          <p className="w-full md:w-3/4 text-md lg:text-lg text-primary font-normal leading-relaxed mt-8 normal-case">
            {`At A1 Associates, we specialize in creating custom solutions
            tailored to meet your business needs. With a focus on providing the
            utmost quality, we are dedicated to helping businesses thrive in
            today's digital landscape. Our team of experts is passionate about
            technology and is committed to delivering innovative solutions that
            drive results. Whether you need a custom software application, a
            mobile app, or a website, we have the skills and experience to bring
            your vision to life.`}
          </p>
          <p className="w-full md:w-3/4 text-md lg:text-lg text-primary font-normal leading-relaxed mt-8 normal-case">
            With our commitment to quality and customer satisfaction, you can
            trust A1 Associates to deliver reliable, scalable, and innovative
            solutions that help your business succeed.
          </p>
        </div>
        <Button
          variant="outline"
          asChild
          size="xl"
          className="normal-case bg-primary text-primary-foreground hover:scale-105 font-semibold transition duration-300 ease-in-out"
        >
          <Link href={PATH.aboutUs}>Read more</Link>
        </Button>
      </div>
      <div className="p-4 border aspect-square hidden md:block h-full">
        <Image
          src="/assets/brand-about-us.JPG"
          width={500}
          height={500}
          className="object-cover max-w-none"
          alt="/assets/brand-about-us.JPG"
          priority
          placeholder="blur"
          blurDataURL={blurBase64}
        ></Image>
      </div>
    </div>
  );
};
export default HomeAbout;
