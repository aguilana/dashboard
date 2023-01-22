import { useEffect, useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DATA from "../../data/allDataInUSA.csv";
import DUMMY from "../../data/dummyData.csv";
import { csv } from "d3";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  Tooltip,
  Legend,
  Title,
} from "chart.js";

import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
);

const TEST = () => {
  const [dummyData, setDummyData] = useState();
  // const [columns, setColumns] = useState;
  console.log("dummyData", dummyData);
  // console.log("dummyData COLUMNS ----", dummyData.columns);

  const options = {
    scales: {
      y: {
        beginAtZero: false,
        min: 120000,
      },
    },
  };
  const labels = dummyData ? dummyData.columns.slice(5) : "x";
  console.log("LABELS: ", labels);

  const USA = dummyData ? Object.entries(dummyData[0]) : "oop";
  console.log("USA", USA);
  const USAData = [];
  USA.forEach((el) => USAData.push(el[1]));
  console.log("DATA USA", USAData.slice(5));

  const NYC = dummyData ? Object.entries(dummyData[1]) : "oop";
  console.log("NYC", NYC);
  const NYCData = [];
  NYC.forEach((el) => NYCData.push(el[1]));
  console.log("DATA NYC", NYCData.slice(5));

  const LAX = dummyData ? Object.entries(dummyData[2]) : "oop";
  console.log("LAX", LAX);
  const LAXData = [];
  LAX.forEach((el) => LAXData.push(el[1]));
  console.log("DATA LAX", LAXData.slice(5));
  // function(dummyData){

  // }

  const data = {
    labels,
    datasets: {
      label: "USA Real Estate Property Cost",
      data: USAData,
      borderWidth: 1,
      borderColor: "rgb(75, 192, 192)",
    },
    datasets: {
      label: "USA Real Estate Property Cost",
      data: NYCData,
      borderWidth: 1,
      borderColor: "rgb(75, 192, 192)",
    },
    datasets: {
      label: "USA Real Estate Property Cost",
      data: LAXData,
      borderWidth: 1,
      borderColor: "rgb(75, 192, 192)",
    },
  };

  useEffect(() => {
    csv(DUMMY).then((data) => {
      setDummyData(data);
      console.log("DATA USE EFFECT", data);
      console.log("COLUMNS AFTER SETTING DATA", data.columns);
    });
  }, []);

  console.log("DATA HERE??? ---------------->", dummyData);

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
        {dummyData ? (
          <Bar data={data} options={options} />
        ) : (
          "NO DATA TO SHOW :("
        )}
        {/* <Bar option={options} data={data} /> */}
      </div>
    </div>
  );
};

export default TEST;
