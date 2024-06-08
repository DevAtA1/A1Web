import { BsGlobe2 } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { MdDeveloperMode } from "react-icons/md";
import { TiBusinessCard } from "react-icons/ti";

import {
  IconBuildingBank,
  IconBuildingCommunity,
  IconBuildingHospital,
  IconBus,
  IconDeviceLandlinePhone,
  IconSettingsCog,
  IconShieldCheckered,
  IconTags,
  IconTruckDelivery,
} from "@tabler/icons-react";
import { BiSupport } from "react-icons/bi";
import { GiArtificialIntelligence } from "react-icons/gi";
import { GrAndroid } from "react-icons/gr";
import { LiaUsersCogSolid } from "react-icons/lia";
import { SiMicrosoftsharepoint } from "react-icons/si";
import { TbCloudComputing, TbDeviceAnalytics } from "react-icons/tb";
import Image from "next/image";
import { cn } from "./lib/utils";
import { blurBase64 } from "./CONSTANTS";
import {
  bigData_Approach,
  bigData_WhyChooseUs,
  qa_Approach,
  qa_WhyChooseUs,
  maintenace_Approach,
  maintenance_WhyChooseUs,
  businessConsulting_Approach,
  businessConsulting_WhyChooseUs,
  application_Approach,
  application_WhyChooseUs,
  ai_Approach,
  ai_WhyChooseUs,
  cloudComputing_Approach,
  cloudComputing_WhyChooseUs,
  dataAnalytics_Approach,
  dataAnalytics_WhyChooseUs,
  digitalMarketing_Approach,
  digitalMarketing_WhyChooseUs,
  outsourcing_Approach,
  outsourcing_WhyChooseUs,
  seo_Approach,
  seo_WhyChooseUs,
} from "./CONSTANT_INDUSTRY_DATA";
import { BlurImage } from "./components/BlurImage";
export const Hello = (
  <div className="text-secondary flex">
    <div>
      Ullamco aute commodo velit. Minim incididunt reprehenderit ut esse anim
      consequat est in fugiat eu enim laboris laborum consectetur occaecat.
      Veniam cupidatat duis veniam eu incididunt est aute et.
    </div>
    <div>
      <Image
        src="/assets/brand-about-us.JPG"
        width={300}
        height={500}
        alt="image"
      ></Image>
    </div>
  </div>
);
// Industries Section Icons
export const FinancialServicesIcon = <IconBuildingBank size={20} />;
export const TelecommunicationIcon = <IconDeviceLandlinePhone size={20} />;
export const HealthCareIcon = <IconBuildingHospital size={20} />;
export const InsuranceIcon = <IconShieldCheckered size={20} />;
export const GovernmentIcon = <IconBuildingCommunity size={20} />;
export const RetailIcon = <IconTags size={20} />;
export const UtilitiesIcon = <IconSettingsCog size={20} />;
export const LogisticsIcon = <IconTruckDelivery size={20} />;
export const TransportationIcon = <IconBus size={20} />;

// Services Section Icons

export const ApplicationDevelopmentIcon = <MdDeveloperMode size={20} />;
export const MobileAppIcon = <GrAndroid size={20} />;
export const SharepointIcon = <SiMicrosoftsharepoint size={20} />;
export const BusinessConsultingIcon = <TiBusinessCard size={20} />;
export const MaintenanceIcon = <BiSupport size={20} />;
export const TestingIcon = <LiaUsersCogSolid size={20} />;
export const OutsourcingIcon = <FaLaptopCode size={20} />;
export const BigDataIcon = <FiDatabase size={20} />;
export const CloudComputingIcon = <TbCloudComputing size={20} />;
export const DigitalMarketingIcon = <BsGlobe2 size={20} />;
export const ArtificialIcon = <GiArtificialIntelligence size={20} />;
export const DataAnalyticsIcon = <TbDeviceAnalytics size={20} />;
export const SeoIcon = <GoGraph size={20} />;

const ApplicationServicesList = ({
  content,
}: {
  content: { title: string; content: string }[];
}) => {
  return (
    <ul className="mt-2">
      {content.map((item, index) => (
        <li key={index} className="list-disc my-4 text-foreground">
          <p className="font-semibold opacity-90">{item.title}</p>
          <p>{item.content}</p>
        </li>
      ))}
    </ul>
  );
};

export const BigDataServiceApproachList = (
  <ApplicationServicesList content={bigData_Approach} />
);
export const BigDataServiceWhyChooseUsList = (
  <ApplicationServicesList content={bigData_WhyChooseUs} />
);

export const CloudComputingServiceApproachList = (
  <ApplicationServicesList content={cloudComputing_Approach} />
);
export const CloudComputingServiceWhyChooseUsList = (
  <ApplicationServicesList content={cloudComputing_WhyChooseUs} />
);

export const DigitalMarketingServiceApproachList = (
  <ApplicationServicesList content={digitalMarketing_Approach} />
);
export const DigitalMarketingServiceWhyChooseUsList = (
  <ApplicationServicesList content={digitalMarketing_WhyChooseUs} />
);

export const DataAnalyticsServiceApproachList = (
  <ApplicationServicesList content={dataAnalytics_Approach} />
);
export const DataAnalyticsServiceWhyChooseUsList = (
  <ApplicationServicesList content={dataAnalytics_WhyChooseUs} />
);

export const SEOServiceApproachList = (
  <ApplicationServicesList content={seo_Approach} />
);
export const SEOServiceWhyChooseUsList = (
  <ApplicationServicesList content={seo_WhyChooseUs} />
);

export const AIServiceApproachList = (
  <ApplicationServicesList content={ai_Approach} />
);
export const AIServiceWhyChooseUsList = (
  <ApplicationServicesList content={ai_WhyChooseUs} />
);

export const SharePointServiceApproachList = (
  <ApplicationServicesList content={ai_Approach} />
);
export const SharePointServiceWhyChooseUsList = (
  <ApplicationServicesList content={ai_WhyChooseUs} />
);

export const OutsourcingServiceApproachList = (
  <ApplicationServicesList content={outsourcing_Approach} />
);
export const OutsourcingWhyChooseUsList = (
  <ApplicationServicesList content={outsourcing_WhyChooseUs} />
);
export const QAServiceApproachList = (
  <ApplicationServicesList content={qa_Approach} />
);
export const QAServiceWhyChooseUsList = (
  <ApplicationServicesList content={qa_WhyChooseUs} />
);
export const MaintenanceServiceApproachList = (
  <ApplicationServicesList content={maintenace_Approach} />
);
export const MaintenanceServiceWhyChooseUsList = (
  <ApplicationServicesList content={maintenance_WhyChooseUs} />
);
export const BusinessConsultingServiceApproachList = (
  <ApplicationServicesList content={businessConsulting_Approach} />
);
export const BusinessConsultingServiceWhyChooseUsList = (
  <ApplicationServicesList content={businessConsulting_WhyChooseUs} />
);
export const ApplicationServiceApproachList = (
  <ApplicationServicesList content={application_Approach} />
);
export const ApplicationServiceWhyChooseUsList = (
  <ApplicationServicesList content={application_WhyChooseUs} />
);

const offeringsData = [
  "Data Integration",
  "BI & Data Visualization",
  "Data Harmonisation & Cleaning",
  "Data Warehouse",
  "Predictive Analysis",
  "Strategy & Consultation",
];
const DataAnalyticsOfferingsList = () => {
  return (
    <div className="flex gap-3 flex-col">
      {offeringsData.map((offering, index) => {
        return (
          <div key={index} className="p-5 border">
            {offering}
          </div>
        );
      })}
    </div>
  );
};
export const DataAnalyticsOfferingsListComp = <DataAnalyticsOfferingsList />;

export const IndustryHeaderImage = ({
  img,
  imgClassName,
}: {
  img: string;
  imgClassName?: string;
}) => {
  return (
    <div className="relative w-full h-[200px] lg:h-[400px]">
      <Image
        src={img}
        fill
        priority
        blurDataURL={blurBase64}
        placeholder="blur"
        alt="Telecom industry"
        className={cn("object-cover h-auto w-full object-top", imgClassName)}
      ></Image>
    </div>
  );
};
export const TelecomIndustryContent = (
  <div className="flex flex-col gap-5 mt-10">
    <h3 className="text-4xl font-bold">
      Empowering Telecom Industries with Digital Innovation
    </h3>
    <div className="flex flex-col gap-4 text-foreground text-justify leading-loose">
      <p>
        The evolution of communication technologies is closely linked to the
        creativity and ingenuity of the rapidly expanding telecom sector. In an
        era of convergence and exploration, we offer tailored solutions designed
        to enhance various communication channels with a focus on customer
        satisfaction. Our unique ability to design comprehensive solutions spans
        application development, infrastructure management, and process
        outsourcing. Through this approach, we deliver tangible business
        benefits such as enhanced productivity, cost-effective deployment, and
        faster market responsiveness for our clients.
      </p>
      <p>
        We at A1 Associates are poised to provide a unified perspective across
        the Tele-Media value chain, serving as a consultant, vendor, and
        strategic partner. We specialize in transforming legacy systems,
        creating and implementing integrated, scalable next-generation services,
        understanding and tackling challenges arising from convergence, and
        swiftly adopting new technologies as a Communications Service Provider
        (CSP). Our aim is to support the evolution of communication services for
        a higher return on investment.
      </p>
      <p>
        {` Through collaborative partnerships with telecom companies and industry
        experts, we develop innovative solutions that improve network
        performance, enhance customer satisfaction, and drive business growth.
        Our focus on leveraging technology and best practices ensures that
        telecom companies can navigate the complexities of the industry and
        remain competitive in today's fast-paced market.`}
      </p>
    </div>
  </div>
);
export const RetailIndustryContent = (
  <div className="flex flex-col gap-5 mt-10">
    <h3 className="text-4xl font-bold">
      Maximizing Profitability in Your Retail Operations
    </h3>
    <div className="flex flex-col gap-4 text-foreground text-justify leading-loose">
      <p>
        The retail landscape is constantly evolving to meet the demands of
        customers seeking efficient services and competitive pricing. This
        evolution presents significant challenges for your retail business as
        you aim to optimize costs and implement effective processes.
      </p>
      <p>
        With our extensive knowledge of the retail industry, we possess the
        expertise and project management skills to deliver tailored solutions in
        CRM e-business, CRM, SCM, Technology Infrastructure, ERP, Data
        Warehousing, and Business Intelligence. Collaborating with industry
        experts and clients through our Centers of Excellence, we specialize in
        supply chain planning and execution, merchandising and pricing, RFID,
        pharmacy in retail, in-store solutions, and data analytics.
      </p>
      <p>
        {`Through collaborative partnerships with retailers and industry experts,
        we develop innovative solutions that improve operational efficiency,
        drive sales, and enhance customer engagement. Our focus on leveraging
        technology and best practices ensures that retailers can adapt to the
        changing landscape of the industry and thrive in today's competitive
        market.`}
      </p>
    </div>
  </div>
);
export const GovernmentIndustryContent = (
  <div className="flex flex-col gap-5 mt-10">
    <h3 className="text-4xl font-bold">
      Enhancing Operational Efficiency and Service Delivery in the Government
      Sector
    </h3>
    <div className="flex flex-col gap-4 text-foreground text-justify leading-loose">
      <p>
        The government sector plays a crucial role in society, providing
        essential services and ensuring the well-being of citizens. However, as
        citizen expectations evolve and technology advances, government agencies
        face increasing pressure to deliver services efficiently and
        transparently.
      </p>
      <p>
        At our firm, we understand the unique challenges faced by government
        agencies and have developed a deep expertise in addressing them. We
        offer a range of services tailored to the needs of the government
        sector, including citizen services, digital transformation,
        cybersecurity, data analytics, and infrastructure management.
      </p>
      <p>
        {`Our approach is collaborative and innovative, working closely with
        government agencies and industry experts to develop solutions that
        enhance service delivery and drive operational excellence. Through our
        commitment to excellence and our focus on leveraging technology, we help
        government agencies meet the demands of today's dynamic environment
        while ensuring the best possible outcomes for citizens.`}
      </p>
    </div>
  </div>
);
export const InsuranceIndustryContent = (
  <div className="flex flex-col gap-5 mt-10">
    <h3 className="text-4xl font-bold">
      Optimizing Operations and Customer Experience
    </h3>
    <div className="flex flex-col gap-4 text-foreground text-justify leading-loose">
      <p>
        The insurance sector is undergoing rapid transformation, driven by
        technological advancements and changing customer expectations. As
        insurers strive to enhance their operations and deliver superior
        customer experiences, they face a myriad of challenges.
      </p>
      <p>
        Our firm specializes in providing tailored solutions for the insurance
        industry, leveraging our deep understanding of the sector and our
        expertise in areas such as digital transformation, customer relationship
        management (CRM), claims processing, data analytics, and regulatory
        compliance.
      </p>
      <p>
        {`Through collaborative partnerships with insurers and industry experts, we develop innovative solutions that improve operational efficiency, enhance customer engagement, and drive business growth. Our focus on leveraging technology and best practices ensures that insurers can adapt to the evolving landscape of the insurance industry and remain competitive in today's dynamic.`}
      </p>
    </div>
  </div>
);
export const TransportationIndustryContent = (
  <div className="flex flex-col gap-5 mt-10">
    <h3 className="text-4xl font-bold">
      Driving Efficiency and Customer Satisfaction
    </h3>
    <div className="flex flex-col gap-4 text-foreground text-justify leading-loose">
      <p>
        The transportation industry is at the forefront of innovation, facing
        challenges and opportunities driven by technological advancements and
        changing consumer expectations. As companies in this sector strive to
        optimize their operations and deliver superior customer experiences,
        they require tailored solutions to meet their unique needs.
      </p>
      <p>
        Our firm specializes in providing customized solutions for the
        transportation industry, leveraging our deep understanding of the sector
        and our expertise in areas such as route optimization, fleet management,
        logistics planning, and regulatory compliance.
      </p>
      <p>
        {`Through collaborative partnerships with transportation companies and industry experts, we develop innovative solutions that improve operational efficiency, reduce costs, and enhance customer satisfaction. Our focus on leveraging technology and best practices ensures that transportation companies can adapt to the evolving landscape of the industry and remain competitive in today's dynamic market.`}
      </p>
    </div>
  </div>
);
export const LogisticIndustryContent = (
  <div className="flex flex-col gap-5 mt-10">
    <h3 className="text-4xl font-bold">
      Streamlining Operations and Enhancing Customer Experience
    </h3>
    <div className="flex flex-col gap-4 text-foreground text-justify leading-loose">
      <p>
        The logistics industry plays a crucial role in the global economy,
        ensuring the efficient movement of goods from manufacturers to
        consumers. However, as the industry evolves and becomes increasingly
        complex, logistics companies face challenges in optimizing their
        operations and meeting the demands of their customers.
      </p>
      <p>
        Our firm specializes in providing tailored solutions for the logistics
        industry, leveraging our expertise in areas such as supply chain
        management, warehouse optimization, inventory tracking, and last-mile
        delivery.
      </p>
      <p>
        {`Through collaborative partnerships with logistics companies and industry experts, we develop innovative solutions that streamline operations, reduce costs, and enhance customer experience. Our focus on leveraging technology and best practices ensures that logistics companies can navigate the challenges of the industry and remain competitive in today's fast-paced market.`}
      </p>
    </div>
  </div>
);
export const UtilityIndustryContent = (
  <div className="flex flex-col gap-5 mt-10">
    <h3 className="text-4xl font-bold">
      Empowering Efficiency and Sustainability in the Utilities Sector
    </h3>
    <div className="flex flex-col gap-4 text-foreground text-justify leading-loose">
      <p>
        The utilities industry is undergoing a profound transformation, driven
        by the need for greater efficiency, sustainability, and resilience. As
        utilities companies seek to modernize their infrastructure and meet the
        evolving needs of customers and regulators, they face a host of
        challenges.
      </p>
      <p>
        Our firm specializes in providing tailored solutions for the utilities
        industry, leveraging our expertise in areas such as smart grid
        technology, renewable energy integration, demand response programs, and
        regulatory compliance.
      </p>
      <p>
        {`Through collaborative partnerships with utilities companies and industry experts, we develop innovative solutions that improve operational efficiency, reduce costs, and enhance sustainability. Our focus on leveraging technology and best practices ensures that utilities companies can navigate the complexities of the industry and achieve their goals in an increasingly dynamic market.`}
      </p>
    </div>
  </div>
);
export const FinanceIndustryContent = (
  <div className="flex flex-col gap-5 mt-10">
    <h3 className="text-4xl font-bold">
      Driving Innovation and Security in the Financial Sector
    </h3>
    <div className="flex flex-col gap-4 text-foreground text-justify leading-loose">
      <p>
        The financial industry is in a state of constant evolution, driven by
        technological advancements, regulatory changes, and shifting customer
        expectations. As financial institutions strive to deliver innovative
        services and ensure the security of financial transactions, they face
        numerous challenges.
      </p>
      <p>
        Our firm specializes in providing customized solutions for the financial
        industry, leveraging our deep understanding of the sector and our
        expertise in areas such as fintech, cybersecurity, risk management, and
        compliance.
      </p>
      <p>
        {`Through collaborative partnerships with financial institutions and industry experts, we develop innovative solutions that improve operational efficiency, enhance customer experience, and ensure regulatory compliance. Our focus on leveraging technology and best practices ensures that financial institutions can adapt to the changing landscape of the industry and remain competitive in today's dynamic market.`}
      </p>
    </div>
  </div>
);

export const HealthcareIndustryContent = (
  <div className="flex flex-col gap-5 mt-10">
    <h3 className="text-4xl font-bold">Your Reliable Healthcare Allies</h3>
    <div className="flex flex-col gap-4 text-foreground text-justify leading-loose">
      <p>
        {`Today's healthcare industry is incredibly intricate, relying heavily on IT infrastructure to provide enhanced services to a more discerning consumer base. The challenges it faces are vast, spanning regulatory compliance, state and federal mandates, and the demand for personalized services. Furthermore, precision is essential, as even minor errors can result in serious repercussions, tarnished brand reputation, and legal entanglements. What's crucial now is the ability to access a sophisticated and effective system to tackle these challenges across all sectors of the industry.`}
      </p>
      <p>
        Our firm specializes in tailored solutions for healthcare, leveraging
        expertise in electronic health records (EHR), telemedicine, patient
        engagement, and healthcare analytics.
      </p>
      <p>
        {`Through collaborations with providers and experts, we develop innovative solutions for improved patient outcomes, streamlined operations, and enhanced efficiency. Our focus on technology and best practices helps providers navigate complexities and deliver exceptional care.`}
      </p>
    </div>
  </div>
);

export const TelecomIndustryOfferings = () => {
  return (
    <div className="flex gap-3 flex-col mt-5">
      {offeringsData.map((offering, index) => {
        return (
          <div key={index} className="p-5 border">
            {offering}
          </div>
        );
      })}
    </div>
  );
};

export const TelecomIndustryOfferingsComp = (
  <TelecomIndustryOfferings></TelecomIndustryOfferings>
);
