import React from "react";

const NetworkMessage = ({ text, isError }) => {
  return <h4 className={`message ${isError ? "error" : "success"}`}>{text}</h4>;
};

export default NetworkMessage;
