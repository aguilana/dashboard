import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DATA from "../../data/allDataInUSA.csv";
import DUMMY from "../../data/dummyData.csv";
const d3 = require("d3");

const TEST = () => {
  const [details, setDetails] = useState();

  const X_AXIS = details ? Object.keys(details[0]) : []
  console.log("XXXX", X_AXIS)

  useEffect(() => {
    fetchDetails();
  }, []);
  const fetchDetails = async () => {
    const dataArray = [];
    d3.csv(DATA, function (data) {
      dataArray.push(data);
      setDetails(dataArray);
    });
  };
  console.log("THE DETAILS!", details);

  return (
    <div>
      <h1>TEST</h1>
      <Link to="/">
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
      <div>
        <p style={{display: "flex", flexWrap: "wrap"}}>{X_AXIS && X_AXIS.length ? X_AXIS.map(el=> {
            return (
                <div> {el} </div>
            )
        }) : "nothing"}
        </p>
        {details && details.length
          ? details.map((el) => {
            console.log("ELEMENT AT 0",el)
              return (
                <div key={el.RegionID}>
                  <div>{el.RegionName}</div>
                </div>
              );
            })
          : "no data"}
      </div>
    </div>
  );
};

export default TEST;
