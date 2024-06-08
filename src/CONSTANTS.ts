import {
  AIServiceApproachList,
  AIServiceWhyChooseUsList,
  ApplicationDevelopmentIcon,
  ApplicationServiceApproachList,
  ApplicationServiceWhyChooseUsList,
  ArtificialIcon,
  BigDataIcon,
  BigDataServiceApproachList,
  BigDataServiceWhyChooseUsList,
  BusinessConsultingIcon,
  BusinessConsultingServiceApproachList,
  BusinessConsultingServiceWhyChooseUsList,
  CloudComputingIcon,
  CloudComputingServiceApproachList,
  CloudComputingServiceWhyChooseUsList,
  DataAnalyticsIcon,
  DataAnalyticsServiceApproachList,
  DataAnalyticsServiceWhyChooseUsList,
  DigitalMarketingIcon,
  DigitalMarketingServiceApproachList,
  DigitalMarketingServiceWhyChooseUsList,
  FinanceIndustryContent,
  FinancialServicesIcon,
  GovernmentIcon,
  GovernmentIndustryContent,
  HealthCareIcon,
  HealthcareIndustryContent,
  InsuranceIcon,
  InsuranceIndustryContent,
  LogisticIndustryContent,
  LogisticsIcon,
  MaintenanceIcon,
  MaintenanceServiceApproachList,
  MaintenanceServiceWhyChooseUsList,
  OutsourcingIcon,
  OutsourcingServiceApproachList,
  OutsourcingWhyChooseUsList,
  QAServiceApproachList,
  QAServiceWhyChooseUsList,
  RetailIcon,
  RetailIndustryContent,
  SEOServiceApproachList,
  SEOServiceWhyChooseUsList,
  SeoIcon,
  SharePointServiceApproachList,
  SharePointServiceWhyChooseUsList,
  SharepointIcon,
  TelecomIndustryContent,
  TelecommunicationIcon,
  TestingIcon,
  TransportationIcon,
  TransportationIndustryContent,
  UtilitiesIcon,
  UtilityIndustryContent,
} from "./CONSTANT_COMPONENTS";
import { getFullUrl } from "./lib/utils";
import { TCareer, TCarousel, TNav, TSection } from "./types";

export const blurBase64 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP88v1LPQAJJgNg0hw4hAAAAABJRU5ErkJggg==";

export const PATH = {
  home: "/",
  industries: {
    root: "industries",
    financialServices: {
      path: "financialServices",
    },
    healthcare: {
      path: "healthcare",
    },
    telecommunication: {
      path: "telecommunication",
    },
    government: {
      path: "government",
    },
    retail: {
      path: "retail",
    },
    insurance: {
      path: "insurance",
    },
    logistics: {
      path: "logistics",
    },
    utilities: {
      path: "utilities",
    },
    transportation: {
      path: "transportation",
    },
  },
  services: {
    root: "services",
    applicationDevelopment: {
      path: "applicationDevelopment",
    },
    mobileApps: {
      path: "mobileApps",
    },
    sharepointDevelopment: {
      path: "sharepointDevelopment",
    },
    businessConsulting: {
      path: "businessConsulting",
    },
    maintenance: {
      path: "maintenance",
    },
    testing: {
      path: "testing",
    },
    outsourcing: {
      path: "outsourcing",
    },
    bigData: {
      path: "bigData",
    },
    cloudComputing: {
      path: "cloudComputing",
    },
    digitalMarketing: {
      path: "digitalMarketing",
    },
    ai: {
      path: "ai",
    },
    dataAnalytics: {
      path: "dataAnalytics",
    },
    seo: {
      path: "seo",
    },
  },
  aboutUs: "/about",
  contactUs: "/#contact",
  careers: "/careers",
  applyOnline: "/applyOnline",
  employeeCentral: "/employeeCentral",
} as const;
export const navData: TNav[] = [
  {
    title: "Home",
    href: "/",
    hiddenOnMobile: true,
  },
  {
    title: "About us",
    href: PATH.aboutUs,
  },
  {
    title: "Services",
    key: "services",
    subMenu: [
      {
        title: "Application Development",
        href: getFullUrl(
          PATH.services.root,
          PATH.services.applicationDevelopment.path
        ),
        logo: ApplicationDevelopmentIcon,
        key: PATH.services.applicationDevelopment.path,
      },
      {
        title: "Sharepoint Development",
        href: getFullUrl(
          PATH.services.root,
          PATH.services.sharepointDevelopment.path
        ),
        logo: SharepointIcon,
        key: PATH.services.sharepointDevelopment.path,
      },
      {
        title: "Business Consulting",
        href: getFullUrl(
          PATH.services.root,
          PATH.services.businessConsulting.path
        ),
        logo: BusinessConsultingIcon,
        key: PATH.services.businessConsulting.path,
      },
      {
        title: "Maintenance & Support",
        href: getFullUrl(PATH.services.root, PATH.services.maintenance.path),
        logo: MaintenanceIcon,
        key: PATH.services.maintenance.path,
      },
      {
        title: "QA & Testing",
        href: getFullUrl(PATH.services.root, PATH.services.testing.path),
        logo: TestingIcon,
        key: PATH.services.testing.path,
      },
      {
        title: "Outsourcing",
        href: getFullUrl(PATH.services.root, PATH.services.outsourcing.path),
        logo: OutsourcingIcon,
        key: PATH.services.outsourcing.path,
      },
      {
        title: "Big Data",
        href: getFullUrl(PATH.services.root, PATH.services.bigData.path),
        logo: BigDataIcon,
        key: PATH.services.bigData.path,
      },
      {
        title: "Cloud Computing",
        href: getFullUrl(PATH.services.root, PATH.services.cloudComputing.path),
        logo: CloudComputingIcon,
        key: PATH.services.cloudComputing.path,
      },
      {
        title: "Digital Marketing",
        href: getFullUrl(
          PATH.services.root,
          PATH.services.digitalMarketing.path
        ),
        logo: DigitalMarketingIcon,
        key: PATH.services.digitalMarketing.path,
      },
      {
        title: "Artificial Intelligence",
        href: getFullUrl(PATH.services.root, PATH.services.ai.path),
        logo: ArtificialIcon,
        key: PATH.services.ai.path,
      },
      {
        title: "Data Analytics",
        href: getFullUrl(PATH.services.root, PATH.services.dataAnalytics.path),
        logo: DataAnalyticsIcon,
        key: PATH.services.dataAnalytics.path,
      },
      {
        title: "SEO",
        href: getFullUrl(PATH.services.root, PATH.services.seo.path),
        logo: SeoIcon,
        key: PATH.services.seo.path,
      },
    ],
    href: PATH.services.root,
  },
  {
    title: "Industries",
    subMenu: [
      {
        title: "Financial Services",
        href: getFullUrl(
          PATH.industries.root,
          PATH.industries.financialServices.path
        ),
        logo: FinancialServicesIcon,
        key: PATH.industries.financialServices.path,
      },
      {
        title: "Healthcare",
        href: getFullUrl(PATH.industries.root, PATH.industries.healthcare.path),
        logo: HealthCareIcon,
        key: PATH.industries.healthcare.path,
      },
      {
        title: "Telecom",
        href: getFullUrl(
          PATH.industries.root,
          PATH.industries.telecommunication.path
        ),
        logo: TelecommunicationIcon,
        key: PATH.industries.telecommunication.path,
      },
      {
        title: "Government",
        href: getFullUrl(PATH.industries.root, PATH.industries.government.path),
        logo: GovernmentIcon,
        key: PATH.industries.government.path,
      },
      {
        title: "Insurance",
        href: getFullUrl(PATH.industries.root, PATH.industries.insurance.path),
        logo: InsuranceIcon,
        key: PATH.industries.insurance.path,
      },
      {
        title: "Logistics",
        href: getFullUrl(PATH.industries.root, PATH.industries.logistics.path),
        logo: LogisticsIcon,
        key: PATH.industries.logistics.path,
      },
      {
        title: "Utilities",
        href: getFullUrl(PATH.industries.root, PATH.industries.utilities.path),
        logo: UtilitiesIcon,
        key: PATH.industries.utilities.path,
      },
      {
        title: "Transportation",
        href: getFullUrl(
          PATH.industries.root,
          PATH.industries.transportation.path
        ),
        logo: TransportationIcon,
        key: PATH.industries.transportation.path,
      },
      {
        title: "Retail",
        href: getFullUrl(PATH.industries.root, PATH.industries.retail.path),
        logo: RetailIcon,
        key: PATH.industries.retail.path,
      },
    ],
    href: PATH.industries.root,
    key: "industries",
  },
  {
    title: "Careers",
    href: PATH.careers,
  },
  {
    title: "Contact",
    href: PATH.contactUs,
  },
  {
    title: "Apply Online",
    href: PATH.applyOnline,
    mobileOnly: true,
  },
  {
    title: "Employee Central",
    href: PATH.employeeCentral,
    mobileOnly: true,
  },
];
export const carouselData: TCarousel[] = [
  {
    title: "Web Development",
    content:
      "It is essential for businesses to create user-friendly websites and stay competitive in the digital age.",
    image: "/assets/service-web-dev.png",
  },
  {
    title: "Digital Marketing",
    content:
      "It is Crucial for businesses to reach their target audience, drive brand awareness, and achieve their marketing goals in the digital age.",
    image: "/assets/service-digital-marketing.png",
  },
  {
    title: "Mobile Development",
    content:
      "It is essential for businesses to create user-friendly mobile applications, reach a wider audience, and stay competitive in the mobile-first era.",
    image: "/assets/service-mob-dev.png",
  },
  {
    title: "Artifical Intelligence",
    content:
      "AI is essential for businesses to automate processes, enhance decision-making, and drive innovation in the AI-driven era.",
    image: "/assets/service-ai.png",
  },
  {
    title: "Maintenance and Support",
    content:
      "Maintenance and support are critical for businesses to ensure the smooth operation of their digital assets, minimize downtime, and provide a seamless user experience.",
    image: "/assets/service-support.png",
  },
  {
    title: "Data Analytics",
    content:
      "It is crucial for businesses to gain insights, make informed decisions, and optimize processes in the data-driven era.",
    image: "/assets/service-data-analytics.png",
  },
];
export const stats = [
  {
    number: 200,
    subtitle: "Works",
  },
  {
    number: 100,
    subtitle: "Services",
  },
  {
    number: 10,
    subtitle: "Industries",
  },
];

export const servicesCarousel: TCarousel[] = [
  {
    image: "/assets/web-dev-logo.png",
    title: "Web Development",
    content:
      "From simple websites to complex web applications, our team of experienced developers uses the latest technologies to create custom solutions that meet your unique needs.",
    href: getFullUrl(
      PATH.services.root,
      PATH.services.applicationDevelopment.path
    ),
  },
  {
    image: "/assets/mob-dev-logo.png",
    title: "Mobile Development",
    content:
      "Our mobile development team specializes in creating engaging and user-friendly mobile applications for both iOS and Android platforms.",
    href: getFullUrl(
      PATH.services.root,
      PATH.services.applicationDevelopment.path
    ),
  },
  {
    image: "/assets/business-consulting-logo.png",
    title: "Business Consulting",
    content:
      "Our expert consultants work closely with you to understand your business goals and challenges. We provide tailored solutions to help you streamline operations and improve efficiency.",
    href: getFullUrl(PATH.services.root, PATH.services.businessConsulting.path),
  },
  {
    image: "/assets/cloud-computing-logo.png",
    title: "Cloud Computing",
    content:
      "Move your business to the cloud with confidence. Our cloud computing services enable you to harness the power of the cloud to reduce costs, increase flexibility, and improve collaboration.",
    href: getFullUrl(PATH.services.root, PATH.services.cloudComputing.path),
  },
  {
    image: "/assets/maintenance-logo.png",
    title: "Maintenance and Support",
    content:
      "Keep your digital assets running smoothly with our maintenance and support services. Whether you need updates, security patches, or troubleshooting.",
    href: getFullUrl(PATH.services.root, PATH.services.maintenance.path),
  },
  {
    image: "/assets/digital-marketing-logo.png",
    title: "Digital Marketing",
    content:
      "Our digital marketing experts help you reach your target audience and drive results. From SEO and content marketing to social media and email campaigns.",
    href: getFullUrl(PATH.services.root, PATH.services.digitalMarketing.path),
  },
  {
    image: "/assets/qa-testing-logo.png",
    title: "Quality Assurance ",
    content:
      "Ensure your products and services meet the highest standards with our quality assurance services. Our experienced QA team tests your software, websites, and applications.",
    href: getFullUrl(PATH.services.root, PATH.services.testing.path),
  },
];
export const solutionsCarousel: TCarousel[] = [
  {
    title: "Cutting-edge AI Solutions",
    content:
      "We transform outdated systems into streamlined, efficient solutions, enabling businesses to harness the benefits of modern technologies. Powering them with AI driven solutions",
    readMoreBtn: true,
    disabled: true,
  },
  {
    title: "Recuritment Solutions",
    content:
      "We provide a cloud-based recruitment platform tailored for the technology industry, facilitating the sourcing and connection of suitable candidates with the perfect employer.",
    readMoreBtn: true,
    disabled: true,
  },
  {
    title: "Management Solutions",
    content:
      "We assist in integrating Growth-as-a-Service (GaaS) into your business, boosting productivity and accelerating growth through our comprehensive solutions.",
    readMoreBtn: true,
    disabled: true,
  },
  {
    title: "DevOps Management",
    content:
      "We empower software-driven enterprises to manage DevOps secrets effectively and enforce zero-trust access policies, ensuring the highest level of security for your business.",
    readMoreBtn: true,
    disabled: true,
  },
  {
    title: "Geographic Information",
    content:
      "We provide a comprehensive desktop mapping solution designed for Geographic Information System (GIS) analysts. Our solution enables users to visualize, analyze, edit, interpret, and output data effectively.",
    readMoreBtn: true,
    disabled: true,
  },
];
export const industriesData: TSection = {
  financialServices: [
    {
      component: {
        type: "image",
      },
    },
    {
      component: {
        type: "custom",
        element: FinanceIndustryContent,
      },
    },
  ],
  healthcare: [
    {
      component: {
        type: "image",
      },
    },
    {
      component: {
        type: "custom",
        element: HealthcareIndustryContent,
      },
    },
  ],
  government: [
    {
      component: {
        type: "image",
        imgClassName: "object-center",
      },
    },
    {
      component: {
        type: "custom",
        element: GovernmentIndustryContent,
      },
    },
  ],
  transportation: [
    {
      component: {
        type: "image",
      },
    },
    {
      component: {
        type: "custom",
        element: TransportationIndustryContent,
      },
    },
  ],
  telecommunication: [
    {
      component: {
        type: "image",
      },
    },
    {
      component: {
        type: "custom",
        element: TelecomIndustryContent,
      },
    },
  ],
  insurance: [
    {
      component: {
        type: "image",
        imgClassName: "object-center",
      },
    },
    {
      component: {
        type: "custom",
        element: InsuranceIndustryContent,
      },
    },
  ],
  logistics: [
    {
      component: {
        type: "image",
        imgClassName: "object-center",
      },
    },
    {
      component: {
        type: "custom",
        element: LogisticIndustryContent,
      },
    },
  ],
  utilities: [
    {
      component: {
        type: "image",
      },
    },
    {
      component: {
        type: "custom",
        element: UtilityIndustryContent,
      },
    },
  ],
  retail: [
    {
      component: {
        type: "image",
      },
    },
    {
      component: {
        type: "custom",
        element: RetailIndustryContent,
      },
    },
  ],
};
export const servicesData: TSection = {
  applicationDevelopment: [
    {
      title: "Application Development",
      content:
        "Our application development team specializes in creating innovative and user-centric applications for web, mobile, and other platforms. We leverage the latest technologies to build applications that are not only visually stunning but also highly functional.",
    },
    {
      title: "Our Approach",
      component: {
        type: "custom",
        element: ApplicationServiceApproachList,
      },
    },
    {
      title: "Why Choose us?",
      component: {
        type: "custom",
        element: ApplicationServiceWhyChooseUsList,
      },
    },
  ],
  sharepointDevelopment: [
    {
      title: "SharePoint Development",
      content:
        "Our SharePoint development services are designed to help businesses leverage the power of SharePoint to improve collaboration, streamline processes, and enhance productivity. We offer a range of SharePoint development services, including intranet portal development, document management solutions, and workflow automation, to help our clients achieve their business goals.",
    },
    {
      title: "Our Approach",
      component: {
        type: "custom",
        element: SharePointServiceApproachList,
      },
    },
    {
      title: "Why Choose us?",
      component: {
        type: "custom",
        element: SharePointServiceWhyChooseUsList,
      },
    },
  ],
  seo: [
    {
      title: "Search Engine Optimization (SEO)",
      content:
        "Our SEO services are designed to help businesses improve their online visibility and drive organic traffic to their website. We offer a range of SEO services, including on-page optimization, off-page optimization, and technical SEO, to help our clients rank higher in search engine results pages (SERPs) and attract more potential customers.",
    },
    {
      title: "Our Approach",
      component: {
        type: "custom",
        element: SEOServiceApproachList,
      },
    },
    {
      title: "Why Choose us?",
      component: {
        type: "custom",
        element: SEOServiceWhyChooseUsList,
      },
    },
  ],
  ai: [
    {
      title: "Artificial Intelligence (AI)",
      content:
        "Our AI services are designed to help businesses harness the power of artificial intelligence to drive innovation, improve efficiency, and gain a competitive edge. We offer a range of AI services, including machine learning, natural language processing, and computer vision, to help our clients leverage AI technologies to solve complex problems and achieve their business goals.",
    },
    {
      title: "Our Approach",
      component: {
        type: "custom",
        element: AIServiceApproachList,
      },
    },
    {
      title: "Why Choose us?",
      component: {
        type: "custom",
        element: AIServiceWhyChooseUsList,
      },
    },
  ],
  digitalMarketing: [
    {
      title: "Digital Marketing",
      content:
        "Our digital marketing services are designed to help businesses expand their online presence, reach their target audience, and achieve their marketing goals. We offer a range of digital marketing services, including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, and more, to help our clients grow their business online.",
    },
    {
      title: "Our Approach",
      component: {
        type: "custom",
        element: DigitalMarketingServiceApproachList,
      },
    },
    {
      title: "Why Choose us?",
      component: {
        type: "custom",
        element: DigitalMarketingServiceWhyChooseUsList,
      },
    },
  ],
  cloudComputing: [
    {
      title: "Cloud Computing",
      content:
        "Our cloud computing services are designed to help businesses leverage the power of the cloud to drive innovation, reduce costs, and improve agility. We offer a range of cloud computing services, including cloud migration, cloud management, and cloud security, to help our clients achieve their business goals.",
    },
    {
      title: "Our Approach",
      component: {
        type: "custom",
        element: CloudComputingServiceApproachList,
      },
    },
    {
      title: "Why Choose us?",
      component: {
        type: "custom",
        element: CloudComputingServiceWhyChooseUsList,
      },
    },
  ],
  bigData: [
    {
      title: "Big Data",
      content:
        "Our Big Data services are designed to help businesses unlock the value of their data, enabling them to make informed decisions and gain a competitive edge. We offer a range of Big Data services, including data integration, data warehousing, data analytics, and more, to help our clients harness the power of their data.",
    },
    {
      title: "Our Approach",

      component: {
        type: "custom",
        element: BigDataServiceApproachList,
      },
    },
    {
      title: "Why Choose us?",
      component: {
        type: "custom",
        element: BigDataServiceWhyChooseUsList,
      },
    },
  ],
  outsourcing: [
    {
      title: "Outsourcing",
      content:
        "Our outsourcing services are designed to help businesses reduce costs, improve efficiency, and focus on their core competencies. We offer a range of outsourcing services, including IT outsourcing, business process outsourcing, and more, to help our clients achieve their business goals.",
    },
    {
      title: "Our Approach",
      component: {
        type: "custom",
        element: OutsourcingServiceApproachList,
      },
    },
    {
      title: "Why Choose us?",
      component: {
        type: "custom",
        element: OutsourcingWhyChooseUsList,
      },
    },
  ],
  businessConsulting: [
    {
      title: "Business Consulting",
      content:
        "Our business consulting services are designed to help businesses achieve their goals, improve performance, and drive growth. We offer a range of consulting services, including strategy development, process improvement, organizational change management, and more.",
    },
    {
      title: "Our Approach",
      component: {
        type: "custom",
        element: BusinessConsultingServiceApproachList,
      },
    },
    {
      title: "Why Choose us?",
      component: {
        type: "custom",
        element: BusinessConsultingServiceWhyChooseUsList,
      },
    },
  ],
  testing: [
    {
      title: "QA & Testing",
      content:
        "Our QA & Testing services are designed to help businesses ensure the quality and reliability of their software applications. We offer a range of services, including manual testing, automated testing, performance testing, and more, to help our clients deliver high-quality software products to market.",
    },
    {
      title: "Our Approach",
      component: {
        type: "custom",
        element: QAServiceApproachList,
      },
    },
    {
      title: "Why Choose us?",
      component: {
        type: "custom",
        element: QAServiceWhyChooseUsList,
      },
    },
  ],
  maintenance: [
    {
      title: "Maintenance and Support",
      content:
        "Our maintenance and support services are designed to help businesses keep their applications and systems running smoothly and efficiently. We offer a range of services, including regular maintenance, troubleshooting, bug fixing, and more, to ensure that our clients' systems are always up and running.",
    },
    {
      title: "Our Approach",
      component: {
        type: "custom",
        element: MaintenanceServiceApproachList,
      },
    },
    {
      title: "Why Choose us?",
      component: {
        type: "custom",
        element: MaintenanceServiceWhyChooseUsList,
      },
    },
  ],
  dataAnalytics: [
    {
      title: "Data Analytics",
      content:
        "Our data analytics services are designed to help businesses unlock the value of their data, enabling them to make informed decisions and gain a competitive edge. We offer a range of data analytics services, including data visualization, predictive analytics, and data mining, to help our clients harness the power of their data.",
    },
    {
      title: "Our Approach",
      component: {
        type: "custom",
        element: DataAnalyticsServiceApproachList,
      },
    },
    {
      title: "Why Choose us?",
      component: {
        type: "custom",
        element: DataAnalyticsServiceWhyChooseUsList,
      },
    },
  ],
  // dataAnalytics: [
  //   {
  //     title: "Data analytics",
  //     content:
  //       "Our data analytics services help businesses gain valuable insights from their data, enabling them to make informed decisions and drive business growth. We offer a range of data analytics services, including data visualization, predictive analytics, and data mining, to help our clients unlock the full potential of their data.",
  //   },
  //   {
  //     title: "",
  //     content:
  //       "Transform your business operations by ensuring that your decisions are based on evidence rather than unfounded speculation or reactions to competitors. With the right mix of Big Data and Advanced Analytics, you can enhance customer experience, product support, and supply chain management, gaining a competitive advantage in today's dynamic market. Collaborating with us provides you access to data scientists, business intelligence, and analytics professionals, along with proven methodologies and tools necessary for successful implementation. Consider us your comprehensive source for all the analytics tools needed to become a data-driven organization",
  //   },
  //   {
  //     title: "Our offerings",
  //     component: DataAnalyticsOfferingsListComp,
  //   },
  // ],
};
export const aboutUsData = {
  desc: "At A1 Associates, we specialize in creating custom solutions tailored to meet your business needs. With a focus on providing the utmost quality, we are dedicated to helping businesses thrive in today's digital landscape. Our team of experts is passionate about technology and is committed to delivering innovative solutions that drive results. Whether you need a custom software application, a mobile app, or a website, we have the skills and experience to bring your vision to life. With a customer-centric approach, we strive to exceed your expectations and deliver solutions that not only meet your requirements but also exceed them. We understand that every business is unique, and we work closely with you to develop solutions that are tailored to your specific needs.",
  subDesc:
    "With our commitment to quality and customer satisfaction, you can trust A1 Associates to deliver reliable, scalable, and innovative solutions that help your business succeed.",
  missionContent:
    "Our mission at A1 Associates is to empower businesses with innovative technology solutions that drive growth, efficiency, and success. We strive to understand our clients' unique challenges and goals, and work tirelessly to deliver custom solutions that exceed their expectations. We recognize the uniqueness of each business and collaborate closely with them to create customized solutions that meet their specific requirements.",
  visionContent:
    "Our vision is to be a trusted partner for businesses seeking cutting-edge technology solutions. We aim to be at the forefront of technological innovation, constantly evolving and adapting to meet the changing needs of our clients. By providing the highest quality solutions and exceptional service, we aspire to be the go-to IT firm for businesses looking to thrive in the digital age.",
  values: [
    {
      title: "Consistency",
      desc: "We believe in delivering consistent results, meeting deadlines, and maintaining high-quality standards in every project we undertake.",
    },
    {
      title: "Expertise",
      desc: "With a team of experienced professionals, we provide expertise in the latest technologies and trends to deliver innovative solutions that drive success for our clients.",
    },
    {
      title: "Reliability",
      desc: "Our commitment to reliability means that our clients can trust us to deliver on our promises and provide dependable support whenever they need it.",
    },
    {
      title: "Transparency",
      desc: "Our commitment to reliability means that our clients can trust us to deliver on our promises and provide dependable support whenever they need it.",
    },
  ],
};
export const contactData = {
  location: "1309 Charleston Dr, Monroe, NJ 08831",
  phoneNumbers: ["(732) 554-1599"],
  email: "info@a1associates.net",
};

export const careersData: TCareer[] = [
  {
    title: "Database Administrator",
    location: "",
    experience: "",
    code: "JD-2024-1",
    employmentType: "Full Time",
    desc: "Install and configure Microsoft SQL on production, test, and development database environments. Manage SQL server databases through multiple product lifecycle environments, from development to mission-critical production systems. Configure and maintain database servers and processes, including monitoring of system health and performance, to ensure high levels of performance, availability, and security. Develop database configurations by creating database objects per specified business requirements and the necessary test environments. Perform development of complex SQL stored procedures. Use SQL tools for database tuning and troubleshooting. Develop a strategy and implement solutions for managing back-ups, restorations, and replication. Troubleshoot problem tickets using JIRA and resolve them in a timely manner. Participate in various projects intended to continuously improve and upgrade infrastructure. Perform database design, ongoing support, and administration of databases for various internal applications including JIRA, TFS (Team Foundation Server) and DSS internal applications. Create reports over multiple environments (SQL, DB2) using SQL Server Reporting services and Tableau. Build ETL pipelines to transfer data from multiple or more sources. Manage the performance, optimization, administration, and recovery of large databases. Write and debug complex SQL and understand the best ways to incorporate database requests into application programs. Assure that applications perform according to service level agreements, databases are administered properly, and data is sufficiently backed up. Use SQL Server services and tools to populate data from various data sources, creating packages for different data loading operations. Build, deploy and schedule reports using SSRS/Tableau to generate all daily, weekly, monthly, and quarterly reports. Will work in Monroe, NJ and/or various unanticipated client sites throughout the U.S. Must be willing to travel and/or relocate.",
  },
  // {
  //   title: "Software Engineer",
  //   location: "UK",
  //   experience: "1-2 years",
  //   code: "JD-20034",
  //   employmentType: "Permanent",
  //   desc: "Key Responsibilities • Monitor various monitoring facilities for software and hardware including operating systems, application systems, ATM and network equipment, and react to exceptions in accordance to Standard Operating Procedures • ",
  // },

  // {
  //   title: "Software Engineer 3",
  //   location: "Singapore",
  //   experience: "1-2 years",
  //   desc: "Looking for an experience SDE",
  //   code: "JD-20032",
  //   employmentType: "Permanent",
  // },
];
