import React from "react";

const Wave: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        lineHeight: 0,
        marginTop: "-5px",
      }}
    >
      {/* <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: "100px", width: "100%" }}
      >
        <path
          d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
          style={{ stroke: "none", fill: "#2b475e" }}
        ></path>
      </svg> */}
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: "100px", width: "100%" }}
      >
        <path
          fill="#284b63"
          fill-opacity="1"
          d="M0,96L80,90.7C160,85,320,75,480,64C640,53,800,43,960,48C1120,53,1280,75,1360,85.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default Wave;
