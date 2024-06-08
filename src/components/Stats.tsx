import { TStat } from "@/types";

const Stats = ({ stats }: { stats: TStat[] }) => {
  return (
    <div className="flex gap-4 text-primary">
      {stats.map((item, index) => {
        return (
          <div key={index} className="flex flex-col">
            <div className="text-4xl font-semibold">{item.number}+</div>
            <div className="text-sm opacity-70">{item.subtitle}</div>
          </div>
        );
      })}
    </div>
  );
};
export default Stats;
