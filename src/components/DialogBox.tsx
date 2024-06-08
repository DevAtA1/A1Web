import { CopyIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { contactData } from "@/CONSTANTS";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";

export function DialogBox({
  buttonClassName,
  buttonName,
}: {
  buttonClassName: string;
  buttonName: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className={cn(buttonClassName)}>
          {buttonName}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg gap-5">
        <DialogHeader>
          <DialogTitle>Apply Now</DialogTitle>
          <DialogDescription className="text-md">
            Please email your resume referencing the Job Code for which you are
            applying to:
          </DialogDescription>
          <DialogDescription className="text-md text-foreground">
            <div className="flex gap-2 items-center">
              <IoLocationOutline />
              {contactData.location}
            </div>
            <div className="flex gap-2 items-center">
              <MdOutlineEmail />
              {contactData.email}
            </div>
            <div className="flex gap-2 items-center">
              <MdOutlinePhone />
              {contactData.phoneNumbers}
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
