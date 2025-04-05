import { FaArrowRightLong } from "react-icons/fa6";
import MetricDisplay from "../../../core/components/metric-display";

export default function MetricsContainer() {
  return (
    <div className="rounded-card col-span-1 h-90 space-y-4">
      <h2 className="text-xl font-black">Insights</h2>
      <div>
        <h3>Founders</h3>
        <MetricDisplay
          mainTitle="7.4K"
          percent={56.69}
          percentType="+"
          subPercent={100}
        />
      </div>
      <div>
        <h3>Investors</h3>
        <MetricDisplay
          mainTitle="6.09K"
          percent={56.69}
          percentType="+"
          subPercent={100}
        />
      </div>
      <div className="bg-lines mt-10 h-0.5 w-full"></div>
      <p className="flex content-center items-end justify-end gap-1.5 pt-2.5">
        View detailed insights <FaArrowRightLong />
      </p>
    </div>
  );
}
