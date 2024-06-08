import { cn } from "@/lib/utils";

const Divider = ({ className }: { className?: string }) => {
  return <div className={cn("h-8 w-full bg-divider my-5", className)}></div>;
};
export default Divider;
