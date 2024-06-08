"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  mobileNavigationMenuTriggerStyle,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@radix-ui/react-navigation-menu";
import { ListItem } from "./Navbar";
import { navData } from "@/CONSTANTS";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 sm:hidden"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 rotate-180"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="pr-0 w-3/4">
        <MobileLink
          href="/"
          className="flex items-center mt-5"
          onOpenChange={setOpen}
        >
          <span className="font-bold">A1 Associates</span>
        </MobileLink>
        <ScrollArea className="h-[calc(100vh-8rem)] pb-10">
          <NavigationMenu className="mt-2">
            <NavigationMenuList>
              {navData.map(
                ({ title, href, subMenu, hiddenOnMobile }, index) => {
                  if (hiddenOnMobile) return null;
                  return (
                    <NavigationMenuItem key={index}>
                      {subMenu ? (
                        <>
                          <NavigationMenuTrigger className="h-10">
                            {title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className="mt-2">
                            <ul className="grid w-[400px] gap-3 md:w-[500px] md:grid-cols-3 lg:w-[600px]">
                              {subMenu?.map((component) => {
                                return (
                                  <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                    logo={component.logo}
                                    className="flex items-center gap-2 py-1"
                                  >
                                    {component.description}
                                  </ListItem>
                                );
                              })}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <MobileLink
                          href={href}
                          className={mobileNavigationMenuTriggerStyle()}
                          onOpenChange={setOpen}
                        >
                          <span>{title}</span>
                        </MobileLink>
                      )}
                    </NavigationMenuItem>
                  );
                }
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
