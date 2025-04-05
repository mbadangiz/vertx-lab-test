import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import { useEffect, useState } from "react";

const MyMapChart = () => {
  const [topology, setTopology] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://code.highcharts.com/mapdata/custom/world.topo.json",
        );
        const data = await response.json();
        setTopology(data);
      } catch (error) {
        console.error("Error fetching map data:", error);
      }
    };

    fetchData();
  }, []);

  if (!topology) {
    return <div className="py-8 text-center">Loading map data...</div>;
  }

  const demographicData = [
    {
      name: "India",
      lat: 20.5937,
      lon: 78.9629,
      population: 1380,
      color: "#4CAF50",
    },
    {
      name: "USA",
      lat: 37.0902,
      lon: -95.7129,
      population: 331,
      color: "#2196F3",
    },
    {
      name: "CANADA",
      lat: 56.1304,
      lon: -106.3468,
      population: 38,
      color: "#FF5722",
    },
    {
      name: "UAE",
      lat: 23.4241,
      lon: 53.8478,
      population: 9.9,
      color: "#9C27B0",
    },
  ];

  const options = {
    chart: {
      map: topology,
      backgroundColor: "#f8f9fa",
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#ddd",
      height: 100,
    },
    title: {
      text: "World Demographics",
      style: {
        color: "#333",
        fontSize: "20px",
        fontWeight: "bold",
      },
    },
    subtitle: {
      text: "Population in millions (2023 estimates)",
      style: {
        color: "#666",
      },
    },
    legend: {
      enabled: true,
      title: {
        text: "Population (millions)",
      },
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },
    tooltip: {
      headerFormat: "",
      pointFormat:
        "<b>{point.name}</b><br>Population: {point.population} million",
      style: {
        fontSize: "14px",
      },
    },
    colorAxis: {
      min: 0,
      max: 1500,
      minColor: "#E1F5FE",
      maxColor: "#01579B",
    },
    series: [
      {
        // World map base
        name: "Countries",
        borderColor: "#A0A0A0",
        nullColor: "rgba(200, 200, 200, 0.2)",
        showInLegend: false,
      },
      {
        // Demographic data points
        type: "mappoint",
        name: "Population",
        data: demographicData,
        color: Highcharts.getOptions().colors[1],
        dataLabels: {
          enabled: true,
          format: "{point.name}",
          style: {
            color: "#333",
            textOutline: "none",
            fontWeight: "bold",
          },
        },
        marker: {
          radius: 8,
          fillColor: "#ffffff",
          lineWidth: 2,
          lineColor: null, // inherit from point color
        },
        tooltip: {
          pointFormat:
            "<b>{point.name}</b><br>Population: {point.population} million",
        },
      },
    ],
  };

  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <HighchartsReact
        highcharts={highchartsMap}
        constructorType={"mapChart"}
        options={options}
      />

      <div className="mt-4">
        <h3 className="mb-2 text-lg font-semibold">Key Demographics:</h3>
        <ul className="grid grid-cols-2 gap-2">
          {demographicData.map((country) => (
            <li key={country.name} className="flex items-center">
              <span
                className="mr-2 h-4 w-4 rounded-full"
                style={{ backgroundColor: country.color }}
              ></span>
              {country.name}: {country.population} million
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function MapChart() {
  return (
    <div className="w-full">
      <MyMapChart />
    </div>
  );
}

export default MapChart;
