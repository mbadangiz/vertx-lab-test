import MetricDisplay from "../../../core/components/metric-display";
import SelectOption from "../../../core/components/select-option";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Options } from "highcharts"; // Import Options type
import { AxisLabelsFormatterContextObject } from "highcharts"; // Import the correct context type

export default function LineChartContainer() {
  return (
    <div className="rounded-card col-span-1 h-90 md:col-span-3">
      <div className="w-full space-x-6">
        <SelectOption onChange={() => {}} options={["Visitors", "Users"]} />
        <SelectOption
          onChange={() => {}}
          options={["Last 30 Days", "Last 15 Days"]}
        />
        <button className="cursor-pointer rounded-4xl border-2 border-dotted border-white px-3 py-2">
          +Add
        </button>
      </div>
      <div className="my-3">
        <MetricDisplay
          mainTitle="13.49K"
          percent={66.5}
          percentType="+"
          subPercent={100}
        />
      </div>
      <div>
        <MyLineChart />
      </div>
    </div>
  );
}

const chartData = [
  ["Mar 1", 300],
  ["Mar 3", 900],
  ["Mar 5", 1300],
  ["Mar 7", 1000],
  ["Mar 9", 900],
  ["Mar 11", 1350],
  ["Mar 13", 800],
  ["Mar 15", 700],
  ["Mar 17", 850],
  ["Mar 19", 700],
  ["Mar 20", 2000],
  ["Mar 22", 600],
  ["Mar 23", 1000],
  ["Mar 25", 550],
  ["Mar 26", 1100],
  ["Mar 28", 900],
  ["Mar 29", 1600],
  ["Mar 31", 1700],
];

const MyLineChart: React.FC = () => {
  const chartOptions: Options = {
    chart: {
      type: "line",
      backgroundColor: "black",
      height: 180,
    },
    title: {
      text: "",
      style: {
        color: "#ffffff",
      },
    },
    xAxis: {
      type: "category",
      labels: {
        style: {
          color: "#ffffff",
        },
      },
    },
    yAxis: {
      title: {
        text: "",
      },
      labels: {
        formatter: function (this: AxisLabelsFormatterContextObject): string {
          if (this.value >= 1000) {
            return this.value / 1000 + "K";
          }
          return String(this.value);
        },
        style: {
          color: "#ffffff",
        },
      },
      gridLineColor: "#333333",
      tickPositions: [200, 400, 800, 1200, 1600, 2000],
    },
    tooltip: {
      style: {
        color: "#000000",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: false,
        },
        marker: {
          enabled: false,
        },
      },
    },
    series: [
      {
        type: "line",
        name: "Data",
        data: chartData,
        color: "#ffffff",
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};
