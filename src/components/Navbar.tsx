"use client";

import Link from "next/link";
import * as React from "react";

import { PATH, blurBase64, navData } from "@/CONSTANTS";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { MobileNav } from "./MobileNav";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function NavbarMenu() {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-between px-4 md:px-24 items-center">
        <Link href={"/"}>
          <Image
            src="/assets/brand-logo.png"
            width={120}
            height={120}
            alt="a1-associates"
            priority
            placeholder="blur"
            blurDataURL={blurBase64}
          ></Image>
        </Link>
        <NavigationMenu className="hidden sm:flex">
          <NavigationMenuList>
            {navData.map(({ title, href, subMenu, mobileOnly }, index) => {
              return (
                <NavigationMenuItem key={index}>
                  {subMenu ? (
                    <>
                      <NavigationMenuTrigger className="text-base">
                        {title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="mt-1">
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px] ">
                          {subMenu?.map((component) => {
                            return (
                              <ListItem
                                key={component.title}
                                title={component.title}
                                href={component.href}
                                logo={component.logo}
                                className="flex items-center gap-2"
                              >
                                {component.description}
                              </ListItem>
                            );
                          })}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    !mobileOnly && (
                      <Link href={href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          {title}
                        </NavigationMenuLink>
                      </Link>
                    )
                  )}
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="gap-3 hidden lg:flex items-center">
          <Button
            variant="outline"
            size="sm"
            className="hover:scale-105 font-regular transition duration-300 ease-in-out "
          >
            Apply Online <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              router.push(PATH.employeeCentral);
            }}
            className="hover:scale-105 font-regular transition duration-300 ease-in-out "
          >
            Employee Central <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <MobileNav></MobileNav>
      </div>
      <Separator></Separator>
    </>
  );
}

export const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { logo?: JSX.Element }
>(({ className, title, children, logo, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          {logo}
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
