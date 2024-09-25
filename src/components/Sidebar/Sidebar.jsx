import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="citiesList">
      <button className="getBtn">Get Weather</button>
      <div className="cityTable">
        <p className="cityTitle">City</p>
        <p className="cityList">Las Vegas</p>
        <p className="cityList">London</p>
        <p className="cityList">Los Angeles</p>
        <p className="cityList">New York</p>
      </div>
    </div>
  );
};

export default Sidebar;
