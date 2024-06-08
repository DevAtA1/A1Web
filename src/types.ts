import { IconType } from "react-icons/lib";

export type TNav = {
  title: string;
  key?: string;
  hiddenOnMobile?: boolean;
  mobileOnly?: boolean;
  subMenu?: TNav[];
  href: string;
  description?: string;
  logo?: JSX.Element;
  icon?: IconType;
};
export type TCarousel = {
  title?: string;
  image?: string;
  content?: string;
  href?: string;
  readMoreBtn?: boolean;
  disabled?: boolean;
};
export type TStat = {
  number: number;
  subtitle: string;
};
export type TSection = {
  [sectionName: string]: TSubSection[];
};
export type TSubSection = {
  title?: string;
  titleClassname?: string;
  content?: string;
  component?: TSubSectionComponent;
};
type TSubSectionComponent =
  | TSubSectionCustomComponent
  | TSubSectionImageComponent;
type TSubSectionCustomComponent = {
  type: "custom";
  element: JSX.Element;
};
type TSubSectionImageComponent = {
  type: "image";
  src?: string;
  imgClassName?: string;
};
export type TIndustry = {
  title: string;
  content: string;
};
export type TCareer = {
  title: string;
  location: string;
  experience: string;
  desc: string;
  code: string;
  employmentType: string;
};
export type TComboBox = {
  value: string;
  label: string;
  key?: string;
};
