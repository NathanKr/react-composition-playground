import React from "react";
import NiceBorder from "./NiceBorder";
import "./Dialog.css";

const Dialog = ({ title, message }) => {
  return (
    <NiceBorder color="blue">
      <h1>{title}</h1>
      <p className="Dialog-message">{message}</p>
    </NiceBorder>
  );
};

export default Dialog;
