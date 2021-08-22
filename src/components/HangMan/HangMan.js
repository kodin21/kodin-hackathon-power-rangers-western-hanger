import React from "react";

const HangMan = ({ stateOfMan }) => {
  const stage = {
    "0": {
      height: 0,
      width: 0
    },
    "1": {
      height: 0,
      width: 128
    },
    "2": {
      height: 0,
      width: 256
    },
    "3": {
      height: 0,
      width: 384
    },
    "4": {
      height: 128,
      width: 0
    },
    "5": {
      height: 128,
      width: 128
    },
    "6": {
      height: 128,
      width: 256
    },
    "7": {
      height: 128,
      width: 384
    },
    finish: {
      height: 256,
      width: 0
    }
  };

  return (
    <>
      <div
        style={{
          top: 0,
          height: 128,
          width: 128,
          backgroundPosition: `-${stage[stateOfMan].width}px -${stage[stateOfMan].height}px`,
          backgroundImage: "url(assets/images/western.png)"
        }}
      />
      {stateOfMan === "7" && (
        <span style={{ marginTop: "15px", color: "red", fontSize: "18px" }}>
          Game OVER!
        </span>
      )}
      {stateOfMan === "finish" && (
        <span style={{ marginTop: "15px", color: "green", fontSize: "18px" }}>
          You WIN!
        </span>
      )}
    </>
  );
};

export default HangMan;
