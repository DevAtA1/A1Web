import { navData } from "@/CONSTANTS";
import { TComboBox } from "@/types";
import { cva } from "class-variance-authority";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const sideLinkStyle = cva(
  "p-0 justify-start items-start hover:scale-105 font-semibold transition duration-300 ease-in-out text-md font-light h-10"
);
export const sideLinkActiveStyle = cva(
  "p-0 justify-start items-start hover:scale-105 font-semibold transition duration-300 ease-in-out text-xl h-10"
);
export function getSideNavData(key: string) {
  return navData.filter((item) => item.key === key)[0].subMenu;
}
export function getSideNavDropdownData(key: string): TComboBox[] | undefined {
  return navData
    .filter((item) => item.key === key)[0]
    .subMenu?.map((item) => {
      return { label: item.title, value: item.href, key: item.key };
    });
}

export function getFullUrl(baseUrl: string, path?: string) {
  if (!path) return `/${baseUrl}`;
  return `/${baseUrl}/${path}`;
}
