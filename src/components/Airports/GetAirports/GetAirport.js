import React, { useState, useEffect } from "react";
import getAirPorts from "../../../API/airports/getAirports";

const CreateAirports = () => {
  const [airportsList, setAirportsList] = useState([]);

  const handleGetAirports = async () => {
    const resp = await getAirPorts();
    console.log(resp);
    if (resp) {
      setAirportsList(resp);
    }
  };

  useEffect(() => {
    handleGetAirports();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          minWidth: "60vw",
          maxWidth: "60vw",
          minHeight: "70vh",
          maxHeight: "70vh",
          marginTop: "20px",
          overflowY: "scroll",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              marginTop: "10px",
            }}
          >
            {" "}
            <p
              style={{ minWidth: "30%", textAlign: "center", fontWeight: 800 }}
            >
              {" "}
              Name
            </p>
            <p
              style={{ minWidth: "30%", textAlign: "center", fontWeight: 800 }}
            >
              {" "}
              Code
            </p>
            <p
              style={{ minWidth: "40%", textAlign: "center", fontWeight: 800 }}
            >
              {" "}
              Creator
            </p>
          </div>
          {airportsList &&
            airportsList.map((airport, i) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                  }}
                  key={i}
                >
                  <p style={{ minWidth: "30%", textAlign: "center" }}>
                    {airport.name}
                  </p>
                  <p style={{ minWidth: "30%", textAlign: "center" }}>
                    {airport.code}
                  </p>
                  <p style={{ minWidth: "40%", textAlign: "center" }}>
                    {airport.createdBy}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default CreateAirports;
