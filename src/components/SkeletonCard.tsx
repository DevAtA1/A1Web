import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonFull() {
  return (
    <div className="flex flex-col mt-5 lg:mt-8 px-5 md:px-24">
      <Skeleton className="h-[50px] w-[300px]" />
      <div className="flex mt-10 gap-10">
        <Skeleton className="hidden lg:block h-[300px] w-[200px]" />
        <div className="flex flex-col h-full w-full gap-5">
          <Skeleton className="w-[350px] h-[30px]" />
          <Skeleton className="w-full h-[20px]" />
          <Skeleton className="w-full h-[20px]" />
          <Skeleton className="w-full h-[20px]" />
          <Skeleton className="w-full lg:w-[550px] h-[30px]" />

          <div className="mt-5 gap-5 flex flex-col">
            <Skeleton className="w-full h-[20px]" />
            <Skeleton className="w-full h-[20px]" />
            <Skeleton className="w-full h-[20px]" />
            <Skeleton className="w-full lg:w-[550px] h-[30px]" />
          </div>

          <div className="mt-5 gap-5 flex flex-col">
            <Skeleton className="w-full h-[20px]" />
            <Skeleton className="w-full h-[20px]" />
            <Skeleton className="w-full h-[20px]" />
            <Skeleton className="w-full lg:w-[550px] h-[30px]" />
          </div>

          <div className="mt-5 gap-5 flex">
            <Skeleton className="w-full h-[20px]" />
            <Skeleton className="w-full h-[20px]" />
            <Skeleton className="w-full h-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
