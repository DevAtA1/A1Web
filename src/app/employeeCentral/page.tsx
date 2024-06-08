"use client";
import { blurBase64, contactData } from "@/CONSTANTS";
import { ButtonOutline } from "@/components/ButtonOutline";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { useState } from "react";
const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  ssn: z
    .string({
      required_error: "Please enter your last 4 digit of SSN",
    })
    .max(4),
});

export default function EmployeeCentral() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const [loading, setLoading] = useState(false);
  function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    setTimeout(() => {
      toast({
        title: "Could not find user with the given details.",
        description: "Please check and try again.",
        variant: "destructive",
      });
      setLoading(false);
    }, 2000);
  }
  return (
    <div className="mt-5 lg:mt-8 px-5 md:px-24 flex justify-center items-center">
      <div className="border flex flex-col items-center p-10 w-full lg:w-2/5">
        <Image
          src="/assets/brand-logo.png"
          width={150}
          height={300}
          alt="A1 Associates"
          priority
          placeholder="blur"
          blurDataURL={blurBase64}
        ></Image>
        <h1 className="text-xl mb-5">Login</h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full"
          >
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel>Date of birth</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="end">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ssn"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Last 4 digits of SSN</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter SSN" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <ButtonOutline type="submit" size="lg" loading={loading}>
                Submit
              </ButtonOutline>
            </div>
          </form>
        </Form>
        <div className="text-sm mt-5 text-center">
          <p>Need Help? Please send an email to</p>
          <p>{contactData.email}</p>
        </div>
      </div>
    </div>
  );
}
