import React from "react";

const Player = ({ id }) => {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      style={{ height: "400px", borderRadius: "1rem" }}
      className="w-100"
    />
  );
};

export default Player;
