import React from "react";
import Head from "./head.json";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <p className="header-info">From: {Head.fromEmail}</p>
      <p className="header-info">To: {Head.replyTo}</p>
      <p className="header-info">Bcc: {Head.bccEmail}</p>
      <p className="header-info">Subject: {Head.subject}</p>
      <p className="header-info">
        Date: {Head.monthAbbrev} {Head.dayOfTheMonth}, {Head.year}{" "}
        {Head.hourTime}:{Head.minuteTime} {Head.amOrPm}
      </p>
    </div>
  );
}

export default Header;
