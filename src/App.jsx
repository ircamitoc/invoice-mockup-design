import React from "react";
import Header from "./components/Header";
import Statement from "./components/Statement";
import VADisabilityPay from "./components/VADisabilityPay";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <hr />
      <Statement />
      <VADisabilityPay />
    </div>
  );
}

export default App;
