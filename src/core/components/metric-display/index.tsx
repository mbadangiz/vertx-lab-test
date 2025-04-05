import { In_MetricDisplayProps } from "../../interfaces";

function MetricDisplay({
  mainTitle,
  percent,
  percentType,
  subPercent,
}: In_MetricDisplayProps) {
  return (
    <div className="flex content-center items-center gap-4">
      <p className="text-4xl font-black">{mainTitle}</p>
      <div>
        <p
          className={`${percentType === "-" ? "text-rose-600" : "text-green-600"}`}
        >
          {`${percentType}${percent}%`}
        </p>
        <p className="opacity-60">({subPercent})</p>
      </div>
    </div>
  );
}

export default MetricDisplay;
