import { solutionsCarousel } from "@/CONSTANTS";
import { ServicesCarousel } from "./ServicesCarousel";
const HomeSolutions = () => {
  return (
    <div
      id="homeAbout"
      className="flex flex-col px-5 md:px-24 justify-between my-20"
    >
      <div className="uppercase flex flex-col items-center gap-2">
        <div className="text-center md:text-left md:self-start mb-5">
          <h3 className="text-xl font-light">What we offer</h3>
          <h1 className="text-5xl font-bold">Our Solutions</h1>
        </div>
        <ServicesCarousel
          delay={4000}
          dataSource={solutionsCarousel}
        ></ServicesCarousel>
      </div>
    </div>
  );
};
export default HomeSolutions;
