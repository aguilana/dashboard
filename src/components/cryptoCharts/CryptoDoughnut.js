import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

ChartJS.register( ArcElement,   Tooltip,
  Legend);

const CryptoDoughnut = () => {
  const [coinData, setCoinData] = useState([]);
  const baseUrl = "https://api.coinranking.com/v2/coins/";
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";

  const fetchCoins = async () => {
    try {
      const { data } = await axios.get(`${proxyUrl}${baseUrl}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${API_KEY}`,
          "Access-Control-Allow-Origin": "*",
        },
      });
      console.log("COIN DATA:", data.data);
      setCoinData(data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCoins();
  }, [baseUrl, proxyUrl]);

  const data = {
    labels: coinData?.coins?.map((coin) => coin.name),
    datasets: [
      {
        label: `${coinData?.coins?.length} Crypto `,
        data: coinData?.coins?.map((coin) => coin.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {},
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };

  return (
    <>
      <div>
        <Doughnut data={data} options={options} height={400} />
      </div>
    </>
  );
};

export default CryptoDoughnut;
