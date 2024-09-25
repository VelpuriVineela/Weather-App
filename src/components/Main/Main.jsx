import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Details from "../Details/Details";
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <Sidebar />
      <Details />
    </main>
  );
};

export default Main;
