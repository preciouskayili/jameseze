import React from "react";

const Player = ({ id }) => {
  return (
    <video className="ratio 16x9" style={{ borderRadius: "1rem" }} controls>
      <source
        className="w-100"
        src={require("./assets/video/there.mp4").default}
        type="video/mp4"
      />
    </video>
  );
};

export default Player;
