import { servicesCarousel } from "@/CONSTANTS";
import { ServicesCarousel } from "./ServicesCarousel";
const HomeServices = () => {
  return (
    <div
      id="homeAbout"
      className="flex flex-col px-5 md:px-24 justify-between my-20"
    >
      <div className="uppercase flex flex-col items-center gap-2">
        <div className="text-center md:text-left md:self-start mb-5">
          <h3 className="text-xl font-light">What we do</h3>
          <h1 className="text-5xl font-bold">Our Services</h1>
        </div>
        <ServicesCarousel dataSource={servicesCarousel}></ServicesCarousel>
      </div>
    </div>
  );
};
export default HomeServices;
