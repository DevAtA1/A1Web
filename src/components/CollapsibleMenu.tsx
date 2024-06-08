"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { TComboBox } from "@/types";
export function CollapsibleMenu({
  dataSource,
  placeholder,
  notFoundMsg,
  defaultValue,
}: {
  dataSource: TComboBox[] | undefined;
  placeholder?: string;
  notFoundMsg?: string;
  defaultValue?: string;
}) {
  const [open, setOpen] = React.useState(false);

  if (!dataSource) {
    return null;
  }
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between"
        >
          {defaultValue
            ? dataSource.find((item: TComboBox) => item.key === defaultValue)
                ?.label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandEmpty>{notFoundMsg}</CommandEmpty>
          <CommandGroup>
            {dataSource.map((item: TComboBox) => (
              <Link href={item.value} key={item.key}>
                <CommandItem
                  key={item.key}
                  value={item.key}
                  defaultValue={defaultValue}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      defaultValue === item.key ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item.label}
                </CommandItem>
              </Link>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
