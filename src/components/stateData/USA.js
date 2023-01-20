import React from "react";
import DATA from "../../data/usa-data.csv";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useEffect } from "react";
import { Link } from "react-router-dom";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const USA = () => {
  const X_AXIS = [];
  const USA = [];
  const NY = [];
  const LA = [];
  const CHI = [];
  const DLS = [];
  const HOU = [];
  const DC = [];
  const MIA = [];
  const BOS = [];
  const SF = [];

  useEffect(() => {
    chart();
  }, [chart]);

  function chart() {
    async function getUSAData() {
      const response = await fetch(DATA);
      const data = await response.text();
      console.log(data);
      // to parse the data can use /\n/ or '\n' to convert to regular expression

      const table = data.split("\n");

      const years = table[0].split("\t");
      const prices = table[1].split("\t");
      const pricesNY = table[2].split("\t");
      const pricesLA = table[3].split("\t");
      const pricesCHI = table[4].split("\t");
      const pricesDLS = table[5].split("\t");
      const pricesHOU = table[6].split("\t");
      const pricesDC = table[7].split("\t");
      const pricesMIA = table[8].split("\t");
      const pricesBOS = table[9].split("\t");
      const pricesSF = table[10].split("\t");

      years.forEach((year) => {
        X_AXIS.push(year);
      });
      prices.forEach((price) => {
        USA.push(price);
      });
      pricesNY.forEach((price) => {
        NY.push(price);
      });
      pricesLA.forEach((price) => {
        LA.push(price);
      });
      pricesCHI.forEach((price) => {
        CHI.push(price);
      });
      pricesDLS.forEach((price) => {
        DLS.push(price);
      });
      pricesHOU.forEach((price) => {
        HOU.push(price);
      });
      pricesDC.forEach((price) => {
        DC.push(price);
      });
      pricesMIA.forEach((price) => {
        MIA.push(price);
      });
      pricesBOS.forEach((price) => {
        BOS.push(price);
      });
      pricesSF.forEach((price) => {
        SF.push(price);
      });
    }
    getUSAData();
  }
  const options = {
    scales: {
      y: {
        beginAtZero: false,
        min: 120000,
      },
    },
  };
  const labels = X_AXIS;
  const data = {
    labels,
    datasets: [
      {
        label: "USA Real Estate Property Cost",
        data: USA,
        borderWidth: 1,
        borderColor: "rgb(75, 192, 192)",
      },
      {
        label: "NY Real Estate Property Cost",
        data: NY,
        borderWidth: 1,
        borderColor: "rgb(65, 140, 130)",
      },
      {
        label: "LA Real Estate Property Cost",
        data: LA,
        borderWidth: 1,
        borderColor: "rgb(75, 250, 102)",
      },
      {
        label: "CHI Real Estate Property Cost",
        data: CHI,
        borderWidth: 1,
        borderColor: "rgb(150, 65, 192)",
      },
      {
        label: "DLS Real Estate Property Cost",
        data: DLS,
        borderWidth: 1,
        borderColor: "rgb(75, 100, 192)",
      },
      {
        label: "HOU Real Estate Property Cost",
        data: HOU,
        borderWidth: 1,
        borderColor: "rgb(50, 250, 50)",
      },
      {
        label: "DC Real Estate Property Cost",
        data: DC,
        borderWidth: 1,
        borderColor: "rgb(200, 50, 200)",
      },
      {
        label: "MIA Real Estate Property Cost",
        data: MIA,
        borderWidth: 1,
        borderColor: "rgb(250, 250, 250)",
      },
      {
        label: "BOS Real Estate Property Cost",
        data: BOS,
        borderWidth: 1,
        borderColor: "rgb(250, 50, 50)",
      },
      {
        label: "SF Real Estate Property Cost",
        data: SF,
        borderWidth: 1,
        borderColor: "rgb(200, 20, 20)",
      },
    ],
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <h1>USA</h1>
      <Link to="/">
        {" "}
        <button
          style={{
            width: "80px",
            height: "40px",
            alignSelf: "center",
            padding: "10px 20px",
            borderRadius: "15px",
            textAlign: "center",
          }}
        >
          HOME
        </button>
      </Link>
      <div
        className="chart-container"
        style={{
          position: "relative",
          height: "100vh",
          width: "100vw",
          padding: "40px",
        }}
      >
        <Bar option={options} data={data} />
      </div>
    </div>
  );
};

export default USA;
