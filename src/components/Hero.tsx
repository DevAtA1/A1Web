import Link from "next/link";
import { SideCarousel } from "./SideCarousel";
import Stats from "./Stats";
import { Button } from "@/components/ui/button";
import { carouselData, stats } from "@/CONSTANTS";
import { ArrowRightIcon } from "@radix-ui/react-icons";
const Hero = () => {
  return (
    <>
      <div className="block md:flex mt-10 lg:mt-20 px-5 md:px-24 h-full">
        <div className="flex flex-col items-center md:items-start gap-10 h-full md:h-4/5">
          <div className="w-full text-3xl md:text-6xl text-primary font-bold uppercase leading-relaxed text-center md:text-left">
            <p className="w-full text-2xl text-primary tracking-widest font-semibold uppercase mb-10 hidden sm:inline-block">
              a1 associates
            </p>
            <p>
              <span className="text-secondary">Crafting </span> solutions,
            </p>
            <p className="mt-2">
              building <span className="text-secondary">futures</span>
            </p>
            <p className="w-full md:w-4/5 text-sm lg:text-lg text-primary font-normal leading-relaxed mt-8 normal-case text-center md:text-left text-gray-700">
              {`Get Tailored Solutions for Your Unique Business Needs. Our
              expert team works closely with you to address your unique
              challenges and opportunities, ensuring tailored strategies that
              drive growth and success. Partner with us to unlock your
              business's full potential.`}
            </p>
          </div>
          <div className="flex gap-5">
            <Button
              variant="outline"
              asChild
              size="xl"
              className="px-3 md:px-8 bg-primary text-primary-foreground hover:scale-105 font-semibold transition duration-300 ease-in-out "
            >
              <Link href="#homeAbout">Discover more</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              size="xl"
              className="px-3 md:px-8 hover:scale-105 font-semibold transition duration-300 ease-in-out"
            >
              <Link href="#contact">
                Get in Touch <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Stats stats={stats}></Stats>
        </div>
        <SideCarousel dataSource={carouselData}></SideCarousel>
      </div>
    </>
  );
};
export default Hero;
