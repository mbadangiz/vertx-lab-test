import LineChartContainer from "./line-chart";
import MapChart from "./map-chart";
import MetricsContainer from "./metrics-container";

function AnalyticsOverview() {
  return (
    <div className="w-full overflow-y-auto">
      <h2 className="mb-6 text-3xl font-black">Overview</h2>
      <div className="grid grid-cols-1 gap-4 pb-40">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <LineChartContainer />
          <MetricsContainer />
        </div>
        <MapChartContainer />
      </div>
    </div>
  );
}

function MapChartContainer() {
  const countries = [
    { id: 1, name: "A Country 1", percent: 50, color: "#e80936" },
    { id: 2, name: "A Country 2", percent: 10, color: "#460de0" },
    { id: 3, name: "A Country 3", percent: 80, color: "#17f507" },
  ];
  return (
    <div className="rounded-card mb-3 flex h-max gap-4 md:h-120">
      {/* <MapChart /> */}
      <div className="rounded-custom h-full w-full bg-blue-500/60 md:w-3/4"></div>
      <div className="h-full w-full space-y-6 overflow-y-auto md:w-1/4">
        {countries.map((items) => (
          <div
            key={items.id}
            className="flex content-center items-center gap-2"
          >
            <div
              className="h-12 w-1/5 rounded bg-amber-50"
              style={{
                background: items.color,
              }}
            ></div>
            <div className="w-4/5 space-y-1">
              <div className="flex content-center items-center justify-between">
                <p>{items.name}</p>
                <p>{items.percent}%</p>
              </div>
              <div className="h-3.5 w-full rounded bg-amber-100 p-0.5">
                <div
                  style={{
                    width: `${items.percent}%`,
                    background: items.color,
                  }}
                  className="h-full"
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnalyticsOverview;
