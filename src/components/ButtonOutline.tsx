import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ReloadIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
type ButtonProps = {
  onClick?: () => void;
  size?: "sm" | "lg" | "xl";
  children?: React.ReactNode;
  variant?: "outline" | "default";
  type?: "submit";
  loading?: boolean;
  className?: string;
};
export function ButtonOutline({
  onClick,
  size,
  children,
  variant,
  type,
  loading,
  className,
}: ButtonProps) {
  return (
    <Button
      variant={variant ?? "outline"}
      size={size}
      type={type}
      disabled={loading}
      onClick={onClick}
      className={cn(
        "transition duration-300 ease-in-out hover:scale-105",
        className
      )}
    >
      {loading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
      {children} {!loading && <ArrowRightIcon className="ml-2 h-4 w-4" />}
    </Button>
  );
}
