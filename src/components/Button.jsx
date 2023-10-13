import React from "react";
import "./Button.css";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>Make a Payment Today!</button>;
};

export default Button;
